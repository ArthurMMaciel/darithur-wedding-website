import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-our-story',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './our-story.component.html',
  styleUrls: ['./our-story.component.scss']
})
export class OurStoryComponent {
  leftImages = [
    'assets/images/gallery/arthur-dari-06.jpg',
    'assets/images/gallery/Arthur e Dari-04.jpg',
    'assets/images/gallery/IMG_7900.jpg',
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
    A nossa história começou no último ano do colégio, quando os nossos caminhos se cruzaram de forma inesperada. Não tínhamos ideia de que aquele simples olhar na sala de aula daria início ao maior acerto de nossas vidas. Em apenas três meses, entre conversas no recreio, risadas nas aulas e passeios na rua, já estávamos namorando. Foi rápido, intenso e sincero.<br>
	  O nosso primeiro ano foi repleto de descobertas, estávamos nos conhecendo, vivendo o terceiro ano do Ensino Médio e passamos por muitas situações divertidas. Um ano incrível. O segundo e o terceiro foram acompanhados pela pandemia, incertezas do dia seguinte e muitas preocupações com a universidade, mas foi exatamente nesse período que entendemos que a nossa relação era muito sólida e que queríamos ficar cada vez mais juntos.<br>
	  No quarto e quinto ano de namoro, foi quando conhecemos de fato a vida adulta, já que não lidávamos somente com os estudos, pois o trabalho também entrou em nossa rotina. Aos poucos entendemos que conciliar a vida acadêmica, trabalho e relações sociais ficava ainda mais fácil quando nos apoiávamos. Foram inúmeras as madrugadas em que ficamos acordados juntos para finalizar atividades da faculdade ou encerrarmos a demanda do trabalho. Uma fase de suma importância para o amadurecimento da nossa relação, o que resultou no pedido de casamento, no dia 23 de novembro de 2024.<br>
	  E finalmente chegamos no nosso sexto ano: a preparação para o casamento. Um ano mágico em que estamos pensando e trabalhando em cada detalhe do nosso sonho. Tudo que vocês presenciarão, no Sábado, dia 25, foi pensado, planejado e será executado com todo amor e carinho. Por isso, queremos que essa experiência não seja única apenas para nós, mas que vocês possam curtir muito e lembrar desse momento para sempre. Estamos ansiosos aguardando você!
  `;
}
