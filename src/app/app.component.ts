import { Component, HostListener, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild('menu') menu: any;
  
  isScrolled = false; // Zustand der Navigation: gescrollt oder nicht
  isNavbarVisible = true; // Navbar initial sichtbar
  lastScrollTop = 0; // Letzte Scroll-Position
  minWidth = 450;
  minHeight = 950;

  currentWidth: number = 0; // Aktuelle Fensterbreite
  currentHeight: number = 0; // Aktuelle Fensterhöhe
  logoVisible: boolean = true; // Logo-Sichtbarkeit
  isMenuOpen = false; // Zustand des mobilen Menüs

  ngOnInit() {
    if (typeof window !== 'undefined') {
      // Initiale Fenstergröße erfassen
      this.currentWidth = window.innerWidth;
      this.currentHeight = window.innerHeight;
      this.updateLogoVisibility();
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    if (typeof window !== 'undefined') {
      // Fenstergröße bei Änderung aktualisieren
      this.currentWidth = window.innerWidth;
      this.currentHeight = window.innerHeight;
      this.updateLogoVisibility();
    }
  }

  updateLogoVisibility() {
    // Logo wird nur angezeigt, wenn Fensterbreite >= 1490px ist
    this.logoVisible = this.currentWidth >= 1490;
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (typeof window !== 'undefined') {
      // Scroll-Position abfragen
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      // Wenn gescrollt, Navigation anpassen (transparent zu weiß)
      this.isScrolled = scrollTop > 50; // Grenzwert, ab dem die Navigation sich ändert
    }
  }

  scrollTo(section: string) {
    // Smooth-Scrolling zur Ziel-Sektion
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
  }

  toggleMenu(): void {
    // Mobile Navigation (Hamburger-Menü) ein-/ausblenden
    this.isMenuOpen = !this.isMenuOpen;
  }

  bookAppointment(): void {
    // Logik für Terminvereinbarung
    // Z.B. Weiterleitung zu einer Terminseite
    window.open('https://terminbuchung.deinservice.de', '_blank');
  }
}
