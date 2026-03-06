import { Component } from '@angular/core';

@Component({
  selector: 'app-recommendations',
  imports: [],
  standalone: true,
  templateUrl: './recommendations.component.html',
  styleUrl: './recommendations.component.scss'
})
export class RecommendationsComponent {
  selectedrecommendation: 'male' | 'female' | 'salon' | 'hotel' = 'hotel';
  recommendationImage: string = '';

  recommendations = {
    hotel: {
      description: 'Sugerimos traje social ou esporte fino para os homens.'
    },
    salon: {
      description: 'Para as mulheres, sugerimos vestidos mais longos e sociais.'
    },
    male: {
      description: 'Sugerimos traje social ou esporte fino para os homens.'
    },
    female: {
      description: 'Para as mulheres, sugerimos vestidos mais longos e sociais.'
    }
  };

  ngOnInit() { 
    this.loadRecommendation(this.selectedrecommendation);
  }

  public selectRecommendation(recommendation: 'male' | 'female' | 'salon' | 'hotel') {
    this.selectedrecommendation = recommendation;
    this.loadRecommendation(recommendation);
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
