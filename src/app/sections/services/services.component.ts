import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {
  services = [
    { 
      title: 'Kategorie 1', 
      description: 'Kurzbeschreibung für Kategorie 1.', 
      image: '/assets/images/kategorie1.png' 
    },
    { 
      title: 'Kategorie 2', 
      description: 'Kurzbeschreibung für Kategorie 2.', 
      image: '/assets/images/kategorie2.png' 
    },
    { 
      title: 'Kategorie 3', 
      description: 'Kurzbeschreibung für Kategorie 3.', 
      image: '/assets/images/kategorie3.png' 
    },
    { 
      title: 'Kategorie 4', 
      description: 'Kurzbeschreibung für Kategorie 4.', 
      image: '/assets/images/kategorie4.png' 
    },
    { 
      title: 'Kategorie 5', 
      description: 'Kurzbeschreibung für Kategorie 5.', 
      image: '/assets/images/kategorie5.png' 
    },
    { 
      title: 'Kategorie 6', 
      description: 'Kurzbeschreibung für Kategorie 6.', 
      image: '/assets/images/kategorie6.png' 
    }
  ];
}
