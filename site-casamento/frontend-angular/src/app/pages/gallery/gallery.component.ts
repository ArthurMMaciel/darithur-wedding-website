import { Component } from '@angular/core';
import { GalleryCarouselComponent } from '../../components/gallery-carousel/gallery-carousel.component';

@Component({
  selector: 'app-gallery',
  imports: [GalleryCarouselComponent],
  standalone: true,
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss'
})
export class GalleryComponent {
  galleryImages = [
    'assets/images/gallery/0055 - Pré Casamento.jpg',
    'assets/images/gallery/0023 - Pré Casamento.jpg',
    'assets/images/gallery/0105 - Pré Casamento.jpg',
    'assets/images/gallery/0110 - Pré Casamento.jpg',
    'assets/images/gallery/0117 - Pré Casamento.jpg',
    'assets/images/gallery/0160 - Pré Casamento.jpg'
  ]
}
