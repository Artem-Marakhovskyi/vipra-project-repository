import { NgModule, ModuleWithProviders } from "@angular/core";
import { routing } from "./gallery.routing";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../common/shared.module";
import { GalleryHeaderComponent } from "./gallery-header/gallery-header.component";
import { PhotoCellComponent } from "./photo-cell/photo-cell.component";
import { GalleryComponent } from "./gallery.component";
import { GalleryContentComponent } from "./gallery-content/gallery-content.component";
import { GalleryContentService } from "./services/gallery-content.service";

@NgModule({
    imports: [
        CommonModule, 
        SharedModule,
        routing
    ],
    declarations: [
        GalleryHeaderComponent,
        PhotoCellComponent,
        GalleryComponent,
        GalleryContentComponent
    ],
    providers: [
        GalleryContentService
    ],
    exports: [
        GalleryHeaderComponent,
        PhotoCellComponent,
        GalleryComponent,
        GalleryContentComponent
    ]
})
export class GalleryModule {
}
