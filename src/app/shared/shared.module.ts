import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BigCardComponent } from '../components/big-card/big-card.component';
import { SmallCardComponent } from '../components/small-card/small-card.component';
import { CardComponent } from './card/card.component';
import { ContentFormatPipe } from './card/contentformat.pipe';
import { LogoComponent } from './logo/logo.component';
import { SvgEmogiTristeComponent } from './svg-emogi-triste/svg-emogi-triste.component';


@NgModule({
  declarations: [CardComponent, LogoComponent, BigCardComponent, SmallCardComponent, ContentFormatPipe, SvgEmogiTristeComponent],
  exports: [CardComponent, LogoComponent, BigCardComponent, SmallCardComponent,
    SvgEmogiTristeComponent, ContentFormatPipe],
  providers: [],
  imports: [
    CommonModule,
    RouterModule,
  ]
})
export class SharedModule { }
