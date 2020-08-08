import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';

import { SharedService } from 'src/app/shared/shared.service';
import { HeaderComponent } from './navigation/header/header.component';
import { FooterComponent } from './navigation/footer/footer.component';
import { CreditsComponent } from './navigation/credits/credits.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, CreditsComponent],
  imports: [CommonModule, FlexLayoutModule, RouterModule, AppRoutingModule],
  exports: [
    CommonModule,
    FlexLayoutModule,
    RouterModule,
    AppRoutingModule,
    HeaderComponent,
    FooterComponent,
    CreditsComponent,
  ],
  providers: [SharedService],
})
export class SharedModule {}
