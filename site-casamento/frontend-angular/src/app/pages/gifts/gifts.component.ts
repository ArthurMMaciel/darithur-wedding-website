import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PaymentModalComponent } from '../../modals/payment/payment-modal.component';

@Component({
  selector: 'app-gifts',
  imports: [CommonModule, PaymentModalComponent],
  standalone: true,
  templateUrl: './gifts.component.html',
  styleUrl: './gifts.component.scss'
})
export class GiftsComponent {
  activeTab: string = 'custom';
  public showPaymentModal = false;
  public paymentRandomKey = '985d0270-473f-4d8b-89aa-06101b37d779';

  personalizedGifts = [
    {
      name: 'Relógio para o casal não se atrasar mais nos compromissos',
      value: 150,
      image: 'assets/images/gifts/relogio.png'
    },
    {
      name: 'Banho e tosa da Sukita por 1 ano',
      value: 1500,
      image: 'assets/images/gifts/sukita_banho.jpeg'
    },
    {
      name: 'Cobertor para o noivo, porque a noiva já está coberta de razão',
      value: 200,
      image: 'assets/images/gifts/banguela.png'
    },
    {
      name: 'Camiseta nova do Corinthians para o casal',
      value: 200,
      image: 'assets/images/gifts/casal_curinthia.png'
    },
    {
      name: 'Café da manhã da lua de mel',
      value: 300,
      image: 'assets/images/gifts/cafe.png'
    },
    {
      name: 'Passagem aérea da lua de mel',
      value: 5000,
      image: 'assets/images/gifts/passagem_aérea.png'
    },
    {
      name: 'Passeio de bug na lua de mel',
      value: 500,
      image: 'assets/images/gifts/bug_lua.png'
    },
    {
      name: 'Passeio de barco na lua de mel',
      value: 500,
      image: 'assets/images/gifts/barco_lua.png'
    },
    {
      name: 'Tirolesa na lua de mel',
      value: 150,
      image: 'assets/images/gifts/tirolesa_lua.png'
    },
    {
      name: 'Jantar romântico',
      value: 300,
      image: 'assets/images/gifts/jantar.png'
    },
    {
      name: 'Vale para o noivo jogar bola todo mês',
      value: 250,
      image: 'assets/images/gifts/arthur_bola.png'
    },
    {
      name: 'Preferência no quarto de visita',
      value: 1000,
      image: 'assets/images/gifts/quarto_visita.png'
    },
    {
      name: 'Maquiagem de blogueira para a noiva',
      value: 200,
      image: 'assets/images/gifts/camila_pudim.png'
    },
    {
      name: 'Meia superfaturada para noiva não passar frio de noite',
      value: 200,
      image: 'assets/images/gifts/meia_coelha.png'
    },
    {
      name: 'Ração premium para Sukita',
      value: 350,
      image: 'assets/images/gifts/racao_oficial.png'
    },
    {
      name: 'Perguntar sobre filhos',
      value: 1000,
      image: 'assets/images/gifts/filhoss.png',
      available: false
    },
    {
      name: 'Brinquedo novo para Sukita não morder os móveis novos',
      value: 100,
      image: 'assets/images/gifts/brinquedos.png'
    },
    {
      name: 'Fundo emergencial de doces para tpm',
      value: 800,
      image: 'assets/images/gifts/doces_tpm.jpg'
    },
    {
      name: 'Toma aqui uns 50 reais',
      value: 50,
      image: 'assets/images/gifts/50_reais.jpg'
    },
    {
      name: 'Só pra não dizer que eu não dei nada',
      value: 33,
      image: 'assets/images/gifts/nada.png'
    },
    {
      name: 'Cueca sexy para noite de núpcias',
      value: 35,
      image: 'assets/images/gifts/cueca_batman.png'
    },
    {
      name: 'Lingerie sexy para noite de núpcias',
      value: 80,
      image: 'assets/images/gifts/hello_kitty.png'
    },
    {
      name: '3 meses de Netflix para o casal',
      value: 150,
      image: 'assets/images/gifts/png-clipart-netflix-full-logo-tech-companies-thumbnail-removebg-preview.png'
    },
    {
      name: 'Poder escolher a playlist na casa dos noivos',
      value: 400,
      image: 'assets/images/gifts/spotify.png'
    },
    {
      name: 'Maleta de poker para a noiva pegar mais dinheiro do noivo',
      value: 800,
      image: 'assets/images/gifts/poker.png'
    },
    {
      name: 'Taxa da noiva não jogar o buquê para sua namorada',
      value: 2500,
      image: 'assets/images/gifts/buque_oficial.png'
    },
    {
      name: 'Ser nosso convidado favorito',
      value: 3000,
      image: 'assets/images/gifts/favorito.png'
    }
  ];

  standardGifts = [
    {
      name: 'Os valores se tornam créditos para compras ou pode ir ao local e comprar para entregar.',
      image: 'assets/images/gifts/magalu.png',
      url: 'https://www.querodecasamento.com.br/lista-de-casamento/arthur-martins-dariane-peixoto'
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
