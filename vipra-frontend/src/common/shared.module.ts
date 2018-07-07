import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ModalComponent } from './components/modal/modal.component';
import { ContentfulService } from './services/contentful-service';
import { ContentfulValues } from './infrastructure/contentful-values';
import { ModalService } from './infrastructure/modal-service';
import { ErrorReason } from './errors/error-reason';
import { LogoComponent } from './components/logo/logo.component';
import { ContentfulServiceLower } from './services/contentful-service-lower';
import { ImageService } from './entityServices/image-service';
import { NavMenuComponent } from './components/navMenu/nav-menu.component';
import { NavigationMenuService } from './entityServices/navigation-menu-service';


@NgModule({
    imports: [CommonModule],
    declarations: [
        HeaderComponent,
        FooterComponent,
        ModalComponent,
        LogoComponent,
        NavMenuComponent
    ],
    providers: [
        ErrorReason,
        ContentfulServiceLower,
        NavigationMenuService
    ],
    exports: [
        HeaderComponent,
        FooterComponent,
        ModalComponent,
    ]
})
export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: [
                ContentfulService,
                ContentfulValues,
                ModalService,
                ImageService
            ]
        };
    }    
}
