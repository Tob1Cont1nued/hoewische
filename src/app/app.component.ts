import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // Die Methode scrollTo wird verwendet, um zum gewünschten Abschnitt zu scrollen
  scrollTo(section: string) {
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
  }

  isNavbarVisible = true; // Initial sichtbar
  lastScrollTop = 0; // Letzte Scroll-Position
  minWidth = 450;
  minHeight = 950;
  
  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Überprüfe die aktuelle Bildschirmgröße
    const currentWidth = window.innerWidth;
    const currentHeight = window.innerHeight;

    // Wenn die Bildschirmgröße kleiner ist als die festgelegten Werte, gehe mit der Logik fort
    if (currentWidth < this.minWidth && currentHeight < this.minHeight) {
      const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

      // Überprüfe die Scrollrichtung
      if (currentScrollTop > this.lastScrollTop) {
        // Wenn nach unten gescrollt wird
        this.isNavbarVisible = false; // Navbar ausblenden
      } else {
        // Wenn nach oben gescrollt wird
        this.isNavbarVisible = true; // Navbar einblenden
      }

      // Aktualisiere die letzte Scroll-Position
      this.lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop; // Verhindert negative Scroll-Positionen
    }
  }
}
