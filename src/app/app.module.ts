import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getRemoteConfig, provideRemoteConfig } from '@angular/fire/remote-config';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { CardListComponent } from './components/card-list/card-list.component';
import { FooterBlogComponent } from './components/footer-blog/footer-blog.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { SectionDestaquesComponent } from './components/section-destaques/section-destaques.component';
import { SetionSmallCardListComponent } from './components/setion-small-card-list/setion-small-card-list.component';
import { PageHomeComponent } from './pages/page-home/page-home.component';
import { PageSearchComponent } from './pages/page-search/page-search.component';
import { routes } from './routes';
import { PostService } from './services/post/post.service';
import { ButtonPostComponent } from './shared/button-post/button-post.component';
import { ContentFormatPipe } from './shared/card/contentformat.pipe';
import { MenuComponent } from './shared/menu/menu.component';
import { SearchBarComponent } from './shared/search-bar/search-bar.component';
import { SharedModule } from './shared/shared.module';
@NgModule({
  declarations: [
    AppComponent,
    FooterBlogComponent,
    SectionDestaquesComponent,
    SetionSmallCardListComponent,
    MenuComponent,
    SearchBarComponent,
    ButtonPostComponent,
    NavigationComponent,
    CardListComponent,
    PageHomeComponent,
    PageSearchComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    SharedModule,
    RouterModule.forRoot(routes),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideRemoteConfig(() => getRemoteConfig()),
  ],
  exports: [
    SharedModule,
    RouterModule,
    ContentFormatPipe
  ],
  providers: [{ provide: FIREBASE_OPTIONS, useValue: environment.firebase }, PostService, ContentFormatPipe],
  schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
