import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-recommendations',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './recommendations.component.html',
  styleUrl: './recommendations.component.scss'
})
export class RecommendationsComponent {
  selectedrecommendation: 'male' | 'female' | 'salon' | 'hotel' = 'hotel';
  recommendationImage: string = '';
  selectedHotelId: string | null = null;
  selectedSalonId: string | null = null;

  categoryDescriptions = {
    hotel: {
      description: 'Selecionamos opções de hotéis recomendados para facilitar sua estadia.'
    },
    salon: {
      description: 'Selecionamos salões de beleza para quem quiser se preparar para o grande dia.'
    },
    male: {
      description: 'Sugerimos traje social ou esporte fino para os homens.'
    },
    female: {
      description: 'Para as mulheres, sugerimos vestidos mais longos e sociais.'
    }
  };

  hotels = [
    {
      id: 'rio-hotel-by-bourbon',
      name: 'Rio Hotel by Bourbon',
      image: 'assets/images/recommendations/rio-hotel.jpg',
      address: 'Av. Colombo, 9161 - Parque Industrial Bandeirantes, Maringá - PR, 87070-000',
      baseRate: 'R$ 417,00',
      phone: '(44) 3024-7800',
      bookingUrl:
        'https://www.booking.com/hotel/br/rio-by-bourbon-maringa.en-gb.html?aid=1874373&label=deville-maringa-3jCyhYw1OQFGJFcvXnAvAgS541021663084%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atiaud-2382347442848%3Akwd-10031740929%3Alp9102185%3Ali%3Adec%3Adm%3Appccp%3DUmFuZG9tSVYkc2RlIyh9YQB9rNbOPxnnFAi1Ok_ieYY&sid=a53e86c2f8c332483518420abb4b8fa0&all_sr_blocks=772478402_365401985_2_1_0&checkin=2026-04-24&checkout=2026-04-25&dest_id=-654034&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=2&highlighted_blocks=772478402_365401985_2_1_0&hpos=2&matching_block_id=772478402_365401985_2_1_0&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&sr_pri_blocks=772478402_365401985_2_1_0__41715&srepoch=1772808328&srpvid=4c8e67990a4900a5&type=total&ucfs=1&',
      proximity: 'Perto do salão da festa (dentro do shopping Catuaí­)'
    },
    {
      id: 'hus-hotel',
      name: 'Hus Hotel',
      image: 'assets/images/recommendations/hus-hotel.jpg',
      address: 'Av. Advogado Horácio Raccanello Filho, 5105 - Zona 7, Maringá - PR, 87020-035',
      baseRate: 'R$ 285,00',
      phone: '(44) 3302-2400',
      bookingUrl:
        'https://www.booking.com/hotel/br/hus-hotel-maringa.en-gb.html?aid=1874373&label=deville-maringa-3jCyhYw1OQFGJFcvXnAvAgS541021663084%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atiaud-2382347442848%3Akwd-10031740929%3Alp9102185%3Ali%3Adec%3Adm%3Appccp%3DUmFuZG9tSVYkc2RlIyh9YQB9rNbOPxnnFAi1Ok_ieYY&sid=a53e86c2f8c332483518420abb4b8fa0&all_sr_blocks=231122210_271948427_2_1_0_712372&checkin=2026-04-24&checkout=2026-04-25&dest_id=-654034&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=6&highlighted_blocks=231122210_271948427_2_1_0_712372&hpos=6&matching_block_id=231122210_271948427_2_1_0_712372&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&sr_pri_blocks=231122210_271948427_2_1_0_712372_28500&srepoch=1772808440&srpvid=4c8e67990a4900a5&type=total&ucfs=1&',
      proximity: 'Mais próximo à igreja (centro - lado do shopping Avenida Center)'
    },
    {
      id: 'transamerica-executive',
      name: 'Transamerica Executive',
      image: 'assets/images/recommendations/transmerica-hotel.jpg',
      address: 'Rod. PR-317, km 5, 5428 - Distrito Industrial 2, Maringá - PR, 87065-005',
      baseRate: 'R$ 280,00',
      phone: '(44) 3123-9800',
      bookingUrl:
        'https://www.booking.com/hotel/br/nobile-suites-maringa.en-gb.html?aid=1874373&label=deville-maringa-3jCyhYw1OQFGJFcvXnAvAgS541021663084%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atiaud-2382347442848%3Akwd-10031740929%3Alp9102185%3Ali%3Adec%3Adm%3Appccp%3DUmFuZG9tSVYkc2RlIyh9YQB9rNbOPxnnFAi1Ok_ieYY&sid=a53e86c2f8c332483518420abb4b8fa0&all_sr_blocks=280771501_107181727_2_1_0&checkin=2026-04-24&checkout=2026-04-25&dest_id=-654034&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=5&highlighted_blocks=280771501_107181727_2_1_0&hpos=5&matching_block_id=280771501_107181727_2_1_0&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&sr_pri_blocks=280771501_107181727_2_1_0__28146&srepoch=1772808485&srpvid=4c8e67990a4900a5&type=total&ucfs=1&',
      proximity: 'Mais próximo ao salão da festa (saída para Campo Mourão)'
    }
  ];

  salons = [
    {
      id: 'salao-monika-ganem',
      name: 'Salão Mônica Ganem',
      image: 'assets/images/recommendations/monica-salao.png',
      address: 'Av. Tiradentes, 1194 - Zona 01, Maringá - PR, 87013-260',
      phone: '(44) 3031-4433',
      proximity: 'Meio termo entre o salão da festa e a igreja'
    },
    {
      id: 'stilo-cabeleireiros',
      name: 'Stilo Cabeleireiros',
      image: 'assets/images/recommendations/stilo-salao.png',
      address: 'Av. São Paulo, 1260 - Zona 2, Maringá - PR, 87013-040',
      phone: '(44) 3223-0312',
      proximity: 'Mais próximo à igreja'
    },
    {
      id: 'shiny-hair-cabeleireiros',
      name: 'Shiny Hair Cabeleireiros',
      image: 'assets/images/recommendations/shiny-salao.png',
      address: 'R. Santos Dumont, 1190 - Zona 01, Maringá - PR, 87050-100',
      phone: '(44) 3028-0082',
      proximity: 'Perto da igreja'
    }
  ];

  ngOnInit() {
    this.loadRecommendation(this.selectedrecommendation);
    this.ensureDefaultSelection();
  }

  public selectRecommendation(recommendation: 'male' | 'female' | 'salon' | 'hotel') {
    this.selectedrecommendation = recommendation;
    this.loadRecommendation(recommendation);
    this.ensureDefaultSelection();
  }

  public selectHotel(hotelId: string) {
    this.selectedHotelId = hotelId;
  }

  public selectSalon(salonId: string) {
    this.selectedSalonId = salonId;
  }

  public get isHotelSelected() {
    return this.selectedrecommendation === 'hotel';
  }

  public get isSalonSelected() {
    return this.selectedrecommendation === 'salon';
  }

  public get isFashionSelected() {
    return this.selectedrecommendation === 'male' || this.selectedrecommendation === 'female';
  }

  public get selectedHotel() {
    return this.hotels.find((hotel) => hotel.id === this.selectedHotelId) ?? this.hotels[0] ?? null;
  }

  public get selectedSalon() {
    return this.salons.find((salon) => salon.id === this.selectedSalonId) ?? this.salons[0] ?? null;
  }

  private ensureDefaultSelection() {
    if (this.selectedrecommendation === 'hotel') {
      this.selectedHotelId = this.hotels[0]?.id ?? null;
    }

    if (this.selectedrecommendation === 'salon') {
      this.selectedSalonId = this.salons[0]?.id ?? null;
    }
  }

  public loadRecommendation(selectedrecommendation: string) {
    switch (selectedrecommendation) {
      case 'hotel':
        this.recommendationImage = 'assets/images/recommendations/recomendacoes-homens.png';
        break;
      case 'salon':
        this.recommendationImage = 'assets/images/recommendations/recomendacoes_convidadas.png';
        break;
      case 'male':
        this.recommendationImage = 'assets/images/recommendations/recomendacoes-homens.png';
        break;
      case 'female':
        this.recommendationImage = 'assets/images/recommendations/recomendacoes_convidadas.png';
        break;
      default:
        this.recommendationImage = 'assets/images/recommendations/recomendacoes-mulheres.png';
    }
  }
}

