import { Component } from '@angular/core';

@Component({
  selector: 'app-impressum',
  templateUrl: './impressum.component.html',
  styleUrl: './impressum.component.css'
})
export class ImpressumComponent {
  isContentHidden = true; // Zustand für die Sichtbarkeit des Inhalts

  toggleContent(): void {
    // Zustand umschalten
    this.isContentHidden = !this.isContentHidden;
  }  
}
