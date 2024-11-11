// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './sections/home/home.component';
import { AboutComponent } from './sections/about/about.component';
import { ContactComponent } from './sections/contact/contact.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { ReferencesComponent } from './sections/references/references.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ReferencesComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, // Notwendig für Material Animationen
    MatToolbarModule,
    MatButtonModule,
    AppRoutingModule
  ],
  providers: [], // Standardmäßig keine experimentellen Provider
  bootstrap: [AppComponent]
})
export class AppModule { }
