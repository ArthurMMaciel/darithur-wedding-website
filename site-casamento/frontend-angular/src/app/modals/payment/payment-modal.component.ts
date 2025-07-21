import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastComponent } from '../../components/toast/toast.component';

@Component({
  selector: 'app-payment-modal',
  standalone: true,
  imports: [CommonModule, ToastComponent],
  templateUrl: './payment-modal.component.html',
  styleUrls: ['./payment-modal.component.scss']
})
export class PaymentModalComponent {
  @Input() paymentRandomKey: string = '';
  @Output() closed = new EventEmitter<void>();

  showToast: boolean = false;

  public copyKey(): void {
    navigator.clipboard.writeText(this.paymentRandomKey)
    this.showToast = true;
    setTimeout(() => {
      this.showToast = false;
    }, 4000);
  }
}
