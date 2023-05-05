import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BigCardComponent } from './components/big-card/big-card.component';
import { CardListComponent } from './components/card-list/card-list.component';
import { FooterBlogComponent } from './components/footer-blog/footer-blog.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { SectionDestaquesComponent } from './components/section-destaques/section-destaques.component';
import { SetionSmallCardListComponent } from './components/setion-small-card-list/setion-small-card-list.component';
import { SmallCardComponent } from './components/small-card/small-card.component';
import { PageHomeComponent } from './pages/page-home/page-home.component';
import { PageNewPostComponent } from './pages/page-new-post/page-new-post.component';
import { PagePostComponent } from './pages/page-post/page-post.component';
import { PageSearchComponent } from './pages/page-search/page-search.component';
import { ButtonPostComponent } from './shared/button-post/button-post.component';
import { CardComponent } from './shared/card/card.component';
import { LogoComponent } from './shared/logo/logo.component';
import { MenuComponent } from './shared/menu/menu.component';
import { SearchBarComponent } from './shared/search-bar/search-bar.component';


const routes: Routes = [
  { path: '', component: PageHomeComponent },
  { path: 'search', component: PageSearchComponent },
  { path: 'post/:id', component: PagePostComponent },
  { path: 'new-post', component: PageNewPostComponent },
  { path: '**', redirectTo: '' }
];


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
    CardListComponent,
    PageHomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
