import { Component, HostListener, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  @ViewChild('menu') menu: any; // Zugriff auf das Menü für mobile Navigation
  scrollTo(section: string) {
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
  }

  isNavbarVisible = true; // Navbar initial sichtbar
  lastScrollTop = 0; // Letzte Scroll-Position
  minWidth = 450;
  minHeight = 950;

  currentWidth: number = 0; // Aktuelle Fensterbreite
  currentHeight: number = 0;

  logoVisible: boolean = true; // Logo-Sichtbarkeit
  isMenuOpen = false; // Zustand des mobilen Menüs

  ngOnInit() {
    if (typeof window !== 'undefined') {
      this.currentWidth = window.innerWidth;
      this.currentHeight = window.innerHeight;
      this.updateLogoVisibility();
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    if (typeof window !== 'undefined') {
      this.currentWidth = window.innerWidth;
      this.currentHeight = window.innerHeight;
      this.updateLogoVisibility();
    }
  }

  updateLogoVisibility() {
    this.logoVisible = this.currentWidth >= 1490;
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (this.currentWidth < this.minWidth && this.currentHeight < this.minHeight) {
      const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

      this.isNavbarVisible = currentScrollTop <= this.lastScrollTop;
      this.lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
    }
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }
}