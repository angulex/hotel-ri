import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'src/app/shared/shared.module';
import { SectionsModule } from 'src/app/sections/sections.module';
import { HomePageComponent } from "src/app/pages/home-page/home-page.component"

@NgModule({
  declarations: [HomePageComponent],
  imports: [
    CommonModule,
    SharedModule,
    SectionsModule
  ],
  exports: [HomePageComponent]
})
export class PagesModule { }
