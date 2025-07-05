import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PaymentModalComponent } from '../../modals/payment/payment-modal.component';

@Component({
  selector: 'app-gifts',
  imports: [CommonModule, PaymentModalComponent],
  templateUrl: './gifts.component.html',
  styleUrl: './gifts.component.scss'
})
export class GiftsComponent {
  activeTab: string = 'standard';
  public showPaymentModal = false;
  public paymentRandomKey = 'b81f4eb2-f199-4f6c-8118-f7a9125d53fc';

  personalizedGifts = [
    {
      name: 'Jantar Romântico',
      description: 'Um jantar especial para celebrarmos juntos.',
      value: 200,
      image: 'assets/images/gallery/arthur-dari-06.jpg'
    },
    {
      name: 'Passeio a Dois',
      description: 'Um passeio inesquecível para o casal curtir adoidado.',
      value: 150,
      image: 'assets/images/gallery/arthur-dari-06.jpg'
    },
    {
      name: 'Contribuição Lua de Mel',
      description: 'Ajude-nos a tornar nossa viagem dos sonhos realidade.',
      value: 500,
      image: 'assets/images/gallery/arthur-dari-06.jpg'
    },
    {
      name: 'Contribuição Lua de Mel',
      description: 'Ajude-nos a tornar nossa viagem dos sonhos realidade.',
      value: 500,
      image: 'assets/images/gallery/arthur-dari-06.jpg'
    },
    {
      name: 'Contribuição Lua de Mel',
      description: 'Ajude-nos a tornar nossa viagem dos sonhos realidade.',
      value: 500,
      image: 'assets/images/gallery/arthur-dari-06.jpg'
    },
    {
      name: 'Contribuição Lua de Mel',
      description: 'Ajude-nos a tornar nossa viagem dos sonhos realidade.',
      value: 500,
      image: 'assets/images/gallery/arthur-dari-06.jpg'
    },
    {
      name: 'Contribuição Lua de Mel',
      description: 'Ajude-nos a tornar nossa viagem dos sonhos realidade.',
      value: 500,
      image: 'assets/images/gallery/arthur-dari-06.jpg'
    },
    {
      name: 'Contribuição Lua de Mel',
      description: 'Ajude-nos a tornar nossa viagem dos sonhos realidade.',
      value: 500,
      image: 'assets/images/gallery/arthur-dari-06.jpg'
    },
    {
      name: 'Contribuição Lua de Mel',
      description: 'Ajude-nos a tornar nossa viagem dos sonhos realidade.',
      value: 500,
      image: 'assets/images/gallery/arthur-dari-06.jpg'
    },
    {
      name: 'Contribuição Lua de Mel',
      description: 'Ajude-nos a tornar nossa viagem dos sonhos realidade.',
      value: 500,
      image: 'assets/images/gallery/arthur-dari-06.jpg'
    },
    {
      name: 'Contribuição Lua de Mel',
      description: 'Ajude-nos a tornar nossa viagem dos sonhos realidade.',
      value: 500,
      image: 'assets/images/gallery/arthur-dari-06.jpg'
    },
    {
      name: 'Contribuição Lua de Mel',
      description: 'Ajude-nos a tornar nossa viagem dos sonhos realidade.',
      value: 500,
      image: 'assets/images/gallery/arthur-dari-06.jpg'
    },
  ];

  standardGifts = [
    {
      description: 'Os valores se tornam créditos para compras ou pode comprar normal e entregar.',
      image: 'assets/images/gifts/magalu.png',
      url: 'http://finalfeliz.de/arthur-martins-dariane-peixoto'
    },
    {
      description: 'Os valores se tornam créditos para compras ou pode comprar normal e entregar.',
      image: 'assets/images/gifts/havan.png',
      url: 'https://lista.havan.com.br/Convidado/ItensListaPresente/845663'
    }
  ];

  public redirectToSite(giftSiteUrl: string): void {
    window.open(giftSiteUrl, '_blank');
  }

  public openPaymentModal(): void {
    this.showPaymentModal = true;
  }

  public closePaymentModal(): void {
    this.showPaymentModal = false;
  }
}
