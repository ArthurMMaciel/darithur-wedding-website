import { Component } from '@angular/core';

@Component({
  selector: 'app-recommendations',
  imports: [],
  templateUrl: './recommendations.component.html',
  styleUrl: './recommendations.component.scss'
})
export class RecommendationsComponent {
  selectedGender: 'male' | 'female' = 'female';
  recommendationImage: string = '';

  genders = {
    male: {
      description: 'Sugerimos traje social completo para os homens. O ideal é usar terno em cores sóbrias (azul-marinho ou preto), camisa clara e gravata. Sapatos sociais escuros e bem engraxados completam o visual. Caso prefira um estilo menos formal, calça social com blazer e sapato social também são muito bem-vindos.'
    },
    female: {
      description: 'Para as mulheres, sugerimos vestidos longos ou midi em tecidos leves e elegantes, que tragam conforto e sofisticação. Cores escuras, estampas delicadas e detalhes como renda, babados ou bordados são sempre um toque especial. Sandálias ou sapatos de salto médio a alto e uma bolsa de mão complementam o look.'
    }
  };

  ngOnInit() { 
    this.loadRecommendation(this.selectedGender);
  }

  public selectGender(gender: 'male' | 'female') {
    this.selectedGender = gender;
    this.loadRecommendation(gender);
  }

  public loadRecommendation(selectedGender: string) {
    console.log(selectedGender);
    
    switch (selectedGender) {
      case 'male':
        this.recommendationImage = 'assets/images/recommendations/recomendacoes-homens.png';
        break;
      case 'female':
        this.recommendationImage = 'assets/images/recommendations/recomendacoes-mulheres.png';
        break;
      default:
        this.recommendationImage = 'assets/images/recommendations/recomendacoes-mulheres.png';
    }
  }
}
