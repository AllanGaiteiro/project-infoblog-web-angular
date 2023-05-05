import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BigCardComponent } from './components/big-card/big-card.component';
import { CardListComponent } from './components/card-list/card-list.component';
import { FooterBlogComponent } from './components/footer-blog/footer-blog.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { SectionDestaquesComponent } from './components/section-destaques/section-destaques.component';
import { SetionSmallCardListComponent } from './components/setion-small-card-list/setion-small-card-list.component';
import { SmallCardComponent } from './components/small-card/small-card.component';
import { ButtonPostComponent } from './shared/button-post/button-post.component';
import { CardComponent } from './shared/card/card.component';
import { LogoComponent } from './shared/logo/logo.component';
import { MenuComponent } from './shared/menu/menu.component';
import { SearchBarComponent } from './shared/search-bar/search-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    BigCardComponent,
    SmallCardComponent,
    FooterBlogComponent,
    SectionDestaquesComponent,
    SetionSmallCardListComponent,
    LogoComponent,
    MenuComponent,
    SearchBarComponent,
    ButtonPostComponent,
    NavigationComponent,
    CardComponent,
    CardListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
