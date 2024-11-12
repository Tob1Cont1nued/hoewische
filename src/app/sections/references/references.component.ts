import { Component, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import { isPlatformBrowser } from '@angular/common';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

Swiper.use([Navigation]);

@Component({
  selector: 'app-references',
  templateUrl: './references.component.html',
  styleUrl: './references.component.css'
})

export class ReferencesComponent implements AfterViewInit {
  
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit(): void {
    // Prüfe, ob der Code im Browser läuft
    if (isPlatformBrowser(this.platformId)) {
      // Initialisiere Swiper nur, wenn wir im Browser sind
      const swiper = new Swiper('.swiper-container', {
        modules: [Navigation, Pagination],
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        breakpoints: {
          768: {
            slidesPerView: 2,
            spaceBetween: 30
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 40
          }
        }
      });
    }
  }
}