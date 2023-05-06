import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BigCardComponent } from '../components/big-card/big-card.component';
import { SmallCardComponent } from '../components/small-card/small-card.component';
import { CardComponent } from './card/card.component';
import { LogoComponent } from './logo/logo.component';


@NgModule({
  declarations: [CardComponent, LogoComponent, BigCardComponent, SmallCardComponent],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [CardComponent, LogoComponent, BigCardComponent, SmallCardComponent]
})
export class SharedModule { }
