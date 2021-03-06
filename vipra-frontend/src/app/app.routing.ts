import { ModuleWithProviders, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ContactsComponent } from '../contacts/contacts.component';

const routes: Routes = [
    { path: 'home', loadChildren: '../home/home.module#HomeModule' },
    { path: 'contacts',  loadChildren: '../contacts/contacts.module#ContactsModule' },
    { path: 'gallery',  loadChildren: '../gallery/gallery.module#GalleryModule' },
    { path: 'about',  loadChildren: '../about/about.module#AboutModule' },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
