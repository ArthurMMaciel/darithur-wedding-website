import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Guest, GuestService, GuestsToConfirmDto } from '../../services/guest.service';
import { ToastComponent } from '../../components/toast/toast.component';

@Component({
  selector: 'app-rsvp',
  imports: [FormsModule, CommonModule, ToastComponent],
  standalone: true,
  templateUrl: './rsvp.component.html',
  styleUrl: './rsvp.component.scss'
})
export class RsvpComponent implements OnInit {
  guestList: Guest[] = [];
  selectedGuest: Guest | null = null;
  searchText = '';
  showGuestSuggestions = false;
  companions: (Guest & { isSelected?: boolean })[] = [];

  phone = '';
  email = '';

  loadingGuests = false;
  loadingCompanions = false;
  submitting = false;

  // Toast state
  toastVisible = false;
  toastMessage = '';
  toastType: 'success' | 'error' | 'info' = 'info';

  constructor(private guestService: GuestService) { }

  ngOnInit(): void {
    this.fetchInitialGuests();
  }

  private fetchInitialGuests(): void {
    this.loadingGuests = true;
    this.guestService.getAllNonConfirmed().subscribe({
      next: (guests) => {
        this.guestList = guests;
        this.showGuestSuggestions = true;
      },
      error: () => {
        this.guestList = [];
      },
      complete: () => (this.loadingGuests = false)
    });
  }

  public onSearch(term: string): void {
    const value = (term || '').trim();
    if (!value) {
      this.fetchInitialGuests();
      return;
    }
    this.loadingGuests = true;
    this.guestService.searchNonConfirmedByName(value).subscribe({
      next: (guests) => {
        this.guestList = guests;
        this.showGuestSuggestions = true;
      },
      error: () => (this.guestList = []),
      complete: () => (this.loadingGuests = false)
    });
  }

  public onGuestSelect(): void {
    if (!this.selectedGuest) {
      this.companions = [];
      return;
    }
    this.searchText = this.selectedGuest.name;
    this.showGuestSuggestions = false;
    this.phone = '';
    this.email = '';

    this.loadingCompanions = true;
    this.guestService
      .findAllNonConfirmedByGroupCode(this.selectedGuest.groupCode)
      .subscribe({
        next: (groupGuests) => {
          this.companions = groupGuests
            .filter((g) => g.id !== this.selectedGuest!.id)
            .map((g) => ({ ...g, isSelected: false }));
        },
        error: () => (this.companions = []),
        complete: () => (this.loadingCompanions = false)
      });
  }

  public selectGuest(guest: Guest): void {
    this.selectedGuest = guest;
    this.onGuestSelect();
  }

  public onSearchInput(event: Event): void {
    const target = event.target as HTMLInputElement | null;
    const value = (target?.value || '').trim();
    this.searchText = value;
    this.onSearch(value);
    this.showGuestSuggestions = true;
  }

  public onGuestInputBlur(): void {
    // small delay to allow click on suggestion
    setTimeout(() => (this.showGuestSuggestions = false), 150);
  }

  public submitRSVP(): void {
    if (!this.selectedGuest || !this.phone || !this.email) {
      this.showToast('Nome, telefone e email são obrigatórios.', 'error');
      return;
    }

    if (!this.email.includes('@')) {
      this.showToast('Email inválido. Deve conter @.', 'error');
      return;
    }

    const phoneDigits = this.phone.replace(/\D/g, '');
    if (!/^\d{11}$/.test(phoneDigits)) {
      this.showToast('Telefone inválido. Use apenas números (11 dígitos).', 'error');
      return;
    }

    const ids: number[] = [this.selectedGuest.id, ...this.companions.filter(c => c.isSelected).map(c => c.id)];
    const payload: GuestsToConfirmDto = {
      guestsToConfirmIds: ids,
      guestHeaderEmail: this.email,
      guestHeaderPhone: phoneDigits,
      guestHeaderName: this.selectedGuest.name
    };

    this.submitting = true;
    this.guestService.confirmPresence(payload).subscribe({
      next: () => {
        this.selectedGuest = null;
        this.companions = [];
        this.phone = '';
        this.email = '';
        this.searchText = '';
        this.showGuestSuggestions = false;
        this.fetchInitialGuests();
        this.showToast('Presença confirmada com sucesso!', 'success');
      },
      error: () => {
        this.submitting = false;
        this.showToast('Erro ao confirmar presença. Tente novamente.', 'error');
      },
      complete: () => (this.submitting = false)
    });
  }

  public onPhoneInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    const digitsOnly = input.value.replace(/\D/g, '');
    this.phone = digitsOnly.slice(0, 11);
  }

  private showToast(message: string, type: 'success' | 'error' | 'info' = 'info') {
    this.toastMessage = message;
    this.toastType = type;
    this.toastVisible = true;
    setTimeout(() => (this.toastVisible = false), 4000);
  }
}
