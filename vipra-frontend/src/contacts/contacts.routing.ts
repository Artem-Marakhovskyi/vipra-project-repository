import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactsComponent } from './contacts.component';

const routes: Routes = [
    { path: 'contacts', component: ContactsComponent }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);