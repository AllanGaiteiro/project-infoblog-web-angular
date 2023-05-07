import { Routes } from '@angular/router';
import { PageHomeComponent } from './pages/page-home/page-home.component';
import { PageNewPostComponent } from './pages/page-new-post/page-new-post.component';
import { PagePostComponent } from './pages/page-post/page-post.component';
import { PageSearchComponent } from './pages/page-search/page-search.component';

export const routes: Routes = [
    { path: '', component: PageHomeComponent },
    { path: 'search/:text', component: PageSearchComponent },
    { path: 'post/:id', component: PagePostComponent },
    { path: 'new-post', component: PageNewPostComponent },
    { path: '**', redirectTo: '' }
];
