import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { CountdownComponent } from './pages/countdown/countdown.component';
import { RsvpComponent } from './pages/rsvp/rsvp.component';
import { LocationComponent } from './pages/location/location.component';
import { HomageComponent } from './pages/homage/homage.component';
import { RecommendationsComponent } from './pages/recommendations/recommendations.component';
import { OurStoryComponent } from './pages/our-story/our-story.component';
import { GiftsComponent } from './pages/gifts/gifts.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, 
            NavbarComponent, 
            HomeComponent, 
            GalleryComponent, 
            CountdownComponent, 
            RsvpComponent, 
            LocationComponent, 
            HomageComponent, 
            RecommendationsComponent, 
            OurStoryComponent,
            GiftsComponent,
          ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = '';
}
