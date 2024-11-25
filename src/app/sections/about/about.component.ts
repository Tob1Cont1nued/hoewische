import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  isContentHidden = false; // Zustand für die Sichtbarkeit des Inhalts
  buttonLabel = 'Inhalt ausblenden'; // Beschriftung des Buttons

  toggleContent(): void {
    // Zustand umschalten
    this.isContentHidden = !this.isContentHidden;

    // Button-Beschriftung entsprechend aktualisieren
    this.buttonLabel = this.isContentHidden ? 'Inhalt anzeigen' : 'Inhalt ausblenden';
  }  
}
