import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  scrollTo(section: string) {
    // Diese Methode scrollt zu einem bestimmten Abschnitt auf der Seite
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
  }

  isNavbarVisible = true; // Navbar initial sichtbar
  lastScrollTop = 0; // Letzte Scroll-Position
  minWidth = 450;
  minHeight = 950;

  // Variable für die aktuelle Fenstergröße
  currentWidth: number = 0;
  currentHeight: number = 0;

  // Variable für die Sichtbarkeit des Logos
  logoVisible: boolean = true;

  ngOnInit() {
    // Initialisiere die Fenstergröße nur im Browser
    if (typeof window !== 'undefined') {
      this.currentWidth = window.innerWidth;
      this.currentHeight = window.innerHeight;
      // Überprüfe, ob das Logo sichtbar sein soll
      this.updateLogoVisibility();
    }
  }

  // @HostListener für das 'resize'-Ereignis des Fensters
  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    if (typeof window !== 'undefined') {
      // Fenstergröße bei Resize aktualisieren
      this.currentWidth = window.innerWidth;
      this.currentHeight = window.innerHeight;
      // Überprüfe erneut, ob das Logo sichtbar sein soll
      this.updateLogoVisibility();
    }
  }

  // Methode zur Überprüfung, ob das Logo sichtbar sein soll
  updateLogoVisibility() {
    if (this.currentWidth < 1490) {
      this.logoVisible = false; // Logo ausblenden, wenn das Fenster kleiner als 1490px ist
    } else {
      this.logoVisible = true; // Logo anzeigen, wenn das Fenster größer als 1490px ist
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Überprüfen, ob wir die Größe des Fensters korrekt haben
    if (this.currentWidth < this.minWidth && this.currentHeight < this.minHeight) {
      const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

      if (currentScrollTop > this.lastScrollTop) {
        // Scrollt nach unten
        this.isNavbarVisible = false;
      } else {
        // Scrollt nach oben
        this.isNavbarVisible = true;
      }

      // Aktualisiere die letzte Scroll-Position
      this.lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop; // Verhindert negative Scroll-Positionen
    }
  }
}
