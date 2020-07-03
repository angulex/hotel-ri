import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './navigation/header/header.component';
import { FooterComponent } from './navigation/footer/footer.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { HomeInfoComponent } from './pages/home-page/home-info/home-info.component';
import { ShowcaseComponent } from './pages/home-page/showcase/showcase.component';
import { FeaturesComponent } from './pages/home-page/features/features.component';
import { AboutComponent } from './pages/about-page/about/about.component';
import { TestimonialsComponent } from './pages/about-page/testimonials/testimonials.component';
import { ContactComponent } from './pages/contact-page/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomePageComponent,
    AboutPageComponent,
    ContactPageComponent,
    HomeInfoComponent,
    ShowcaseComponent,
    FeaturesComponent,
    AboutComponent,
    TestimonialsComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    RouterModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
