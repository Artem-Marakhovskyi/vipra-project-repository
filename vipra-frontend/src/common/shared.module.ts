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
import { CustomButtonComponent } from './components/elements/customButton/custom-button.component';
import { RouterModule } from '@angular/router';
import { LightBackgroundDirective } from './directives/light-background/light-background.directive';
import { BusService } from './infrastructure/bus-service';
import { Pingable } from './infrastructure/pingable';
import { CallingBusService } from './infrastructure/calling-bus-service';
import { MailCreator } from './infrastructure/mail-creator';
import { ContentfulManagementService } from './services/contentful-management-service-lower';

@NgModule({
    imports: [
        CommonModule,
        RouterModule
    ],
    declarations: [
        HeaderComponent,
        FooterComponent,
        ModalComponent,
        LogoComponent,
        NavMenuComponent,
        CustomButtonComponent,
        LightBackgroundDirective
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
        CustomButtonComponent,
        LightBackgroundDirective
    ]
})
export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: [
                ContentfulService,
                ContentfulManagementService,
                ContentfulValues,
                ModalService,
                ImageService,
                BusService,
                CallingBusService,
                MailCreator
            ]
        };
    }    
}
