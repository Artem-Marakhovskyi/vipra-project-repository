import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GalleryComponent } from './gallery.component';

const routes: Routes = [
    { path: '', component: GalleryComponent }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);