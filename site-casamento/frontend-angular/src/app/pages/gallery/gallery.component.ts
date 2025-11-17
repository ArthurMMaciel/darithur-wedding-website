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
    'assets/images/gallery/IMG_3819.png',
    'assets/images/gallery/Arthur e Dari-20.jpg',
    'assets/images/gallery/Arthur e Dari-27.jpg',
    'assets/images/gallery/IMG_5013.png',
    'assets/images/gallery/Arthur e Dari-39.jpg',
    'assets/images/gallery/Arthur e Dari-53.jpg',
    'assets/images/gallery/IMG_5825.png',
    'assets/images/gallery/Arthur e Dari-64.jpg',
    'assets/images/gallery/Arthur e Dari-69.jpg',
    'assets/images/gallery/IMG_6222.jpg'
  ]
}
