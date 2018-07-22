import { CommonModule } from "@angular/common";
import { NgModule, ModuleWithProviders } from "@angular/core";
import { WelcomeComponent } from "./welcome/welcome.component";
import { ActivityDetailsComponent } from "./activity-details/activity-details.component";
import { SharedModule } from "../common/shared.module";

@NgModule({
    imports: [
        CommonModule, 
        SharedModule.forRoot()],
    declarations: [
        WelcomeComponent,
        ActivityDetailsComponent
    ],
    providers: [
    ],
    exports: [
        WelcomeComponent,
        ActivityDetailsComponent
    ]
})
export class HomeModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: HomeModule,
            providers: [
            ]
        };
    }    
}
