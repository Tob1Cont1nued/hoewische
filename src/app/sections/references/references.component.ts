import { Component, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import { isPlatformBrowser } from '@angular/common';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

Swiper.use([Navigation, Pagination]);

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
      var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 60,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        breakpoints: {
          768: {
            slidesPerView: 1,
            spaceBetween: 60
          },
          1024: {
            slidesPerView: 1,
            spaceBetween: 60
          }
        }
      });
    }
  }
}