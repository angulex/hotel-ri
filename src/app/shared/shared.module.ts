import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';

import { SharedService } from 'src/app/shared/shared.service';
import { HeaderComponent } from './navigation/header/header.component';
import { FooterComponent } from './navigation/footer/footer.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    RouterModule,
    AppRoutingModule,

  ],
  exports: [
    CommonModule,
    FlexLayoutModule,
    RouterModule,
    AppRoutingModule,
    HeaderComponent,
    FooterComponent
  ],
  providers: [
    SharedService
  ]
})
export class SharedModule { }
