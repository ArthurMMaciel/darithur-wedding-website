import { Component, OnInit } from '@angular/core';

declare var google: any;

@Component({
  selector: 'app-location',
  imports: [],
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})

export class LocationComponent implements OnInit {
  selectedLocation: 'church' | 'salon' = 'church';
  map!: google.maps.Map;

  locations = {
    church: { 
      lat: -23.423509566079346, 
      lng: -51.92048917438211, 
      title: 'Paróquia São José Operário' ,
      address: 'Praça Emíliano Perneta, s/n - Vila Operária, Maringá - PR, 87050-070'
    },
    salon: { 
      lat: -23.41936132405546, 
      lng: -51.97977308416688, 
      title: 'Buffet Paradise',
      address: 'Av. Paranavaí, 2219 - Parque Industrial Bandeirantes, Maringá - PR, 87070-130'
    }
  };

  ngOnInit() {
    this.loadMap(this.locations[this.selectedLocation]);
  }

  selectLocation(location: 'church' | 'salon') {
    this.selectedLocation = location;
    this.loadMap(this.locations[location]);
  }

  loadMap(location: { lat: number; lng: number; title: string }) {
    const mapElement = document.getElementById('map');

    if (!mapElement) return;

    const center = new google.maps.LatLng(location.lat, location.lng);

    this.map = new google.maps.Map(mapElement, {
      zoom: 16,
      center,
    });

    new google.maps.Marker({
      position: center,
      map: this.map,
      title: location.title,
    });
  }
}
