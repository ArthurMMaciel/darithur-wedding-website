import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-gallery-carousel',
    imports: [CommonModule, FormsModule],
    templateUrl: './gallery-carousel.component.html',
    styleUrls: ['./gallery-carousel.component.scss'],
})
export class GalleryCarouselComponent {
    @Input() images: string[] = [];

    photosPerPageOptions = [2, 3, 4, 8, 12];
    photosPerPage: number = 3;
    currentPage = 0;
    visibleImages: string[] = [];

    ngOnInit() {
        this.__updateVisibleImages();
    }

    get totalPages(): number {
        return Math.ceil(this.images.length / this.photosPerPage);
    }

    private __updateVisibleImages(): void {
        const perPage = Number(this.photosPerPage); // força conversão pra número
        const start = this.currentPage * perPage;
        const end = start + perPage;

        this.visibleImages = this.images.slice(start, end);
    }

    public nextPage() {
        if (this.currentPage < this.totalPages - 1) {
            this.currentPage++;
            this.__updateVisibleImages();
        }
    }

    public prevPage() {
        if (this.currentPage > 0) {
            this.currentPage--;
            this.__updateVisibleImages();
        }
    }

    public onPhotosPerPageChange() {
        this.currentPage = 0;
        this.__updateVisibleImages();
    }
}
