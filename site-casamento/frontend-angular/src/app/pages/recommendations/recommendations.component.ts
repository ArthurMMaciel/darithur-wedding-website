import { Component } from '@angular/core';

@Component({
  selector: 'app-recommendations',
  imports: [],
  standalone: true,
  templateUrl: './recommendations.component.html',
  styleUrl: './recommendations.component.scss'
})
export class RecommendationsComponent {
  selectedGender: 'male' | 'female' = 'female';
  recommendationImage: string = '';

  genders = {
    male: {
      description: 'Sugerimos traje social esporte fino para os homens. Sapatos sociais bem engraxados completam o visual.'
    },
    female: {
      description: 'Para as mulheres, sugerimos vestidos longos ou midi. Sandálias ou sapatos de salto médio a alto pois o casamento acontece em salão e uma bolsa de mão complementam o look.'
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
        this.recommendationImage = 'assets/images/recommendations/recomendacoes_convidadas.png';
        break;
      default:
        this.recommendationImage = 'assets/images/recommendations/recomendacoes-mulheres.png';
    }
  }
}
