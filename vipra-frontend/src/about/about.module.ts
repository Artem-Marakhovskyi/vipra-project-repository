import { NgModule, ModuleWithProviders } from "@angular/core";
import { AboutComponent } from "./about.component";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../common/shared.module";
import { routing } from "./about.routing";

@NgModule({
    imports: [
        CommonModule, 
        SharedModule,
        routing
    ],
    declarations: [
        AboutComponent
    ],
    providers: [
    ],
    exports: [
    ]
})
export class AboutModule {
}
