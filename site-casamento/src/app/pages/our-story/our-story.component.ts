import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-our-story',
  imports: [CommonModule],
  templateUrl: './our-story.component.html',
  styleUrls: ['./our-story.component.scss']
})
export class OurStoryComponent {
  leftImages = [
    'assets/images/gallery/arthur-dari-06.jpg',
    'assets/images/gallery/arthur-dari-06.jpg',
    'assets/images/gallery/arthur-dari-06.jpg',
    'assets/images/gallery/arthur-dari-06.jpg',
    'assets/images/gallery/arthur-dari-06.jpg'
  ];

  rightImages = [
    'assets/images/gallery/arthur-dari-06.jpg',
    'assets/images/gallery/arthur-dari-06.jpg',
    'assets/images/gallery/arthur-dari-06.jpg',
    'assets/images/gallery/arthur-dari-06.jpg',
    'assets/images/gallery/arthur-dari-06.jpg'
  ];
  
  storyText: string = `
    Tudo começou no terceiro ano do ensino médio, quando os caminhos de dois corações se cruzaram de forma inesperada. Eles não tinham ideia de que aquele simples "oi" nos corredores da escola daria início à maior aventura de suas vidas. Em apenas três meses, entre conversas no recreio, risadas nas aulas e olhares tímidos durante as provas, já estavam namorando. Foi rápido, intenso e sincero.

    O relacionamento floresceu ao longo do tempo, e a verdadeira mágica aconteceu durante o processo: eles se conheceram de verdade enquanto já estavam juntos. Descobriram gostos diferentes, manias engraçadas, medos bobos e sonhos parecidos. Aprenderam a lidar com provas finais e crises existenciais, com ciúmes bobos e domingos tediosos. Brigaram por mensagens não respondidas, mas também ficaram horas conversando sobre o futuro.

    Passaram juntos pelo último ano do colégio, se apoiando nas decisões mais difíceis da juventude. Depois, encararam a faculdade, com rotinas diferentes, novos desafios e ainda mais responsabilidades. Mas nunca deixaram de caminhar lado a lado. Um levava café na biblioteca, o outro fazia surpresa no meio da semana. Quando um caía, o outro segurava. Quando um duvidava, o outro acreditava por dois.

    Foram crescendo juntos — como amigos, companheiros e, acima de tudo, como casal. Com o tempo, o namoro virou parceria, o carinho virou cuidado, e o amor virou lar. Eles se viram em tantas versões ao longo dos anos, mas sempre escolheram permanecer. E é essa escolha que os trouxe até aqui.

    Hoje, depois de tantos capítulos vividos, eles escrevem o mais bonito de todos: o começo da vida a dois, como marido e esposa.
  `;
}
