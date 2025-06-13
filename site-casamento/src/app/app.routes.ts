import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RsvpComponent } from './pages/rsvp/rsvp.component';
import { GiftsComponent } from './pages/gifts/gifts.component';
import { LocationComponent } from './pages/location/location.component';
import { CountdownComponent } from './pages/countdown/countdown.component';
import { GalleryComponent } from './pages/gallery/gallery.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'rsvp', component: RsvpComponent },
  { path: 'gifts', component: GiftsComponent },
  { path: 'location', component: LocationComponent },
  { path: 'countdown', component: CountdownComponent },
  { path: 'gallery', component: GalleryComponent }
];
