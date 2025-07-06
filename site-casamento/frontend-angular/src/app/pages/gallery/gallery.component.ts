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
    'assets/images/gallery/arthur-dari-06.jpg',
    'assets/images/gallery/arthur-dari-06.jpg',
    'assets/images/gallery/arthur-dari-06.jpg',
    'assets/images/gallery/arthur-dari-06.jpg',
    'assets/images/gallery/arthur-dari-06.jpg',
    'assets/images/gallery/arthur-dari-06.jpg',
    'assets/images/gallery/arthur-dari-06.jpg',
    'assets/images/gallery/arthur-dari-06.jpg',
    'assets/images/gallery/arthur-dari-06.jpg',
    'assets/images/gallery/arthur-dari-06.jpg',
    'assets/images/gallery/arthur-dari-06.jpg'
  ]
}
