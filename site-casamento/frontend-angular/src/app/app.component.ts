import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { CountdownComponent } from './pages/countdown/countdown.component';
import { RsvpComponent } from './pages/rsvp/rsvp.component';
import { LocationComponent } from './pages/location/location.component';
import { RecommendationsComponent } from './pages/recommendations/recommendations.component';
import { OurStoryComponent } from './pages/our-story/our-story.component';
import { GiftsComponent } from './pages/gifts/gifts.component';
import { AuthComponent } from './pages/auth/auth.component';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  imports: [NavbarComponent, 
            HomeComponent, 
            GalleryComponent, 
            CountdownComponent, 
            RsvpComponent, 
            LocationComponent, 
            RecommendationsComponent, 
            OurStoryComponent,
            GiftsComponent,
            AuthComponent,
          ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = '';
  constructor(public auth: AuthService) {}
}
