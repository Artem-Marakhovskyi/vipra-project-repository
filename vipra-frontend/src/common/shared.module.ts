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


@NgModule({
    imports: [CommonModule],
    declarations: [
        HeaderComponent,
        FooterComponent,
        ModalComponent,
        LogoComponent,
    ],
    providers: [
        ErrorReason,
        ContentfulServiceLower
    ],
    exports: [
        HeaderComponent,
        FooterComponent,
        LogoComponent,
        ModalComponent
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
