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
    'assets/images/gallery/arthur-dari-06.jpg',
    'assets/images/gallery/Arthur e Dari-09.jpg',
    'assets/images/gallery/Arthur e Dari-18.jpg',
    'assets/images/gallery/Arthur e Dari-20.jpg',
    'assets/images/gallery/Arthur e Dari-27.jpg',
    'assets/images/gallery/Arthur e Dari-38.jpg',
    'assets/images/gallery/Arthur e Dari-39.jpg',
    'assets/images/gallery/Arthur e Dari-53.jpg',
    'assets/images/gallery/Arthur e Dari-63.jpg',
    'assets/images/gallery/Arthur e Dari-64.jpg',
    'assets/images/gallery/Arthur e Dari-69.jpg',
    'assets/images/gallery/Arthur e Dari-79.jpg'
  ]
}
