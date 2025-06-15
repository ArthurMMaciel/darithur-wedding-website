import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-rsvp',
  imports: [FormsModule, CommonModule],
  templateUrl: './rsvp.component.html',
  styleUrl: './rsvp.component.scss'
})
export class RsvpComponent {
  guestList = [
    { name: 'João Silva', companions: [{ id: 1, name: 'Maria Silva', confirmed: false }] },
    { name: 'Ana Souza', companions: [{ id: 2, name: 'Carlos Souza', confirmed: true }] },
    { name: 'Beatriz Rocha', companions: [] }
  ];

  guestSearch = '';
  filteredGuests = this.guestList;
  selectedGuest: any;
  phone = '';
  email = '';

  public filterGuests() {
    const search = this.guestSearch.toLowerCase();
    this.filteredGuests = this.guestList.length > 0 ? this.guestList.filter((g) =>
      g.name.toLowerCase().includes(search)
    ) : [];
  }

  public onGuestSelect() {
    if (this.selectedGuest) {
      this.phone = this.selectedGuest.companions.length > 0 ? this.selectedGuest.companions[0].name : '';
      this.email = ''; 
    } else {
      this.phone = '';
      this.email = '';
    }
  }
}
