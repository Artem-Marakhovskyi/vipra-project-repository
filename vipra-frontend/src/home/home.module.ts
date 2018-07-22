import { CommonModule } from "@angular/common";
import { NgModule, ModuleWithProviders } from "@angular/core";
import { WelcomeComponent } from "./welcome/welcome.component";
import { ActivityDetailsComponent } from "./activity-details/activity-details.component";
import { SharedModule } from "../common/shared.module";
import { HomeComponent } from "./home.component";
import { routing } from "./home.routing";

@NgModule({
    imports: [
        CommonModule, 
        SharedModule.forRoot(),
        routing
    ],
    declarations: [
        WelcomeComponent,
        ActivityDetailsComponent,
        HomeComponent
    ],
    providers: [
    ],
    exports: [
        HomeComponent,
        WelcomeComponent,
        ActivityDetailsComponent
    ]
})
export class HomeModule {
}
