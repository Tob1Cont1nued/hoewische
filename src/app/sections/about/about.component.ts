import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

  isContentHidden = true; // Zustand für die Sichtbarkeit des Inhalts

  toggleContent(): void {
    // Zustand umschalten
    this.isContentHidden = !this.isContentHidden;
  }  
}
