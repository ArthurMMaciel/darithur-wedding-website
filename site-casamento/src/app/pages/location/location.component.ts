import { Component, OnInit } from '@angular/core';

declare var google: any;

@Component({
  selector: 'app-location',
  imports: [],
  standalone: true,
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
      address: 'Praça Emíliano Perneta, s/n - Vila Operária, Maringá - PR, 87050-070',
      maps: 'https://www.google.com.br/maps/place/Pra%C3%A7a+Em%C3%ADliano+Perneta/@-23.4233137,-51.9233933,17z/data=!3m1!4b1!4m6!3m5!1s0x94ecd171a23adf41:0x98a99e3e8e7b9530!8m2!3d-23.4233186!4d-51.9208184!16s%2Fg%2F11mpy6p0h0?hl=pt-BR&entry=ttu&g_ep=EgoyMDI1MDYyOS4wIKXMDSoASAFQAw%3D%3D'
    },
    salon: { 
      lat: -23.41936132405546, 
      lng: -51.97977308416688, 
      title: 'Buffet Paradise',
      address: 'Av. Paranavaí, 2219 - Parque Industrial Bandeirantes, Maringá - PR, 87070-130',
      maps: 'https://www.google.com.br/maps/place/Av.+Paranava%C3%AD,+2219+-+Jardim+Ouro+Cola,+Maring%C3%A1+-+PR,+87070-130/@-23.4196454,-51.9825248,17z/data=!3m1!4b1!4m6!3m5!1s0x94ecd657c29eb5e3:0x1bdd2de30ed6c650!8m2!3d-23.4196503!4d-51.9799499!16s%2Fg%2F11kqfywcjr?hl=pt-BR&entry=ttu&g_ep=EgoyMDI1MDYyOS4wIKXMDSoASAFQAw%3D%3D'
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
