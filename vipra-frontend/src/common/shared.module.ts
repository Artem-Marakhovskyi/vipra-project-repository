import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
    imports: [CommonModule],
    declarations: [
        HeaderComponent,
        FooterComponent
    ],
    providers: [],
    exports: [
        HeaderComponent,
        FooterComponent
    ]
})
export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: [/* Place for services */]
        };
    }    
}
