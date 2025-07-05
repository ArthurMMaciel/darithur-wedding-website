import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Copy, LucideAngularModule, X } from 'lucide-angular';

@Component({
  selector: 'app-payment-modal',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './payment-modal.component.html',
  styleUrls: ['./payment-modal.component.scss']
})
export class PaymentModalComponent {
  @Input() paymentRandomKey: string = '';
  @Output() closed = new EventEmitter<void>();

  public copyKey(): void {
    navigator.clipboard.writeText(this.paymentRandomKey)
  }
}
