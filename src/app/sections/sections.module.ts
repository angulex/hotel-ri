import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'src/app/shared/shared.module';
import { HomeInfoComponent } from 'src/app/sections/home-info/home-info.component';
import { ShowcaseComponent } from 'src/app/sections/showcase/showcase.component';
import { FeaturesComponent } from 'src/app/sections/features/features.component';
import { AboutComponent } from 'src/app/sections/about/about.component';
import { TestimonialsComponent } from 'src/app/sections/testimonials/testimonials.component';
import { ContactComponent } from 'src/app/sections/contact/contact.component';

@NgModule({
  declarations: [
    HomeInfoComponent,
    ShowcaseComponent,
    FeaturesComponent,
    AboutComponent,
    TestimonialsComponent,
    ContactComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    HomeInfoComponent,
    ShowcaseComponent,
    FeaturesComponent,
    AboutComponent,
    TestimonialsComponent,
    ContactComponent
  ]
})
export class SectionsModule { }
