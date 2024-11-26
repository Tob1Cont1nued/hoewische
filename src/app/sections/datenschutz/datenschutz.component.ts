import { Component } from '@angular/core';

@Component({
  selector: 'app-datenschutz',
  templateUrl: './datenschutz.component.html',
  styleUrl: './datenschutz.component.css'
})
export class DatenschutzComponent {
  isContentHidden = true; // Zustand für die Sichtbarkeit des Inhalts

  toggleContent(): void {
    // Zustand umschalten
    this.isContentHidden = !this.isContentHidden;
  }  

}
