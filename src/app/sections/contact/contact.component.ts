import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
 
  startNavigation(): void {
    window.open(' https://maps.app.goo.gl/wZ4fQLKUmWSqhVF68', '_blank');
  }

  bookAppointment(): void {
    window.open('https://docs.google.com/forms/d/1Jerd2YHUmmXGED1rc67Cc2kiErptUv5exB4GOCBRG4I/edit', '_blank');
  }
}
