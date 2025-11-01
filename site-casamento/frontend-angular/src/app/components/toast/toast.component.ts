import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-toast',
  imports: [CommonModule],
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss'],
  standalone: true,
})
export class ToastComponent {
  @Input() message: string = '';
  @Input() visible: boolean = false;
  @Input() type: 'success' | 'error' | 'info' = 'info';
}
