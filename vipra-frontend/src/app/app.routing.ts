import { ModuleWithProviders, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ContactsComponent } from '../contacts/contacts.component';

const routes: Routes = [
    { path: 'home', loadChildren: '../home/home.module#HomeModule' },
    { path: 'contacts',  loadChildren: '../contacts/contacts.module#ContactsModule' },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', redirectTo: '/heroes', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
