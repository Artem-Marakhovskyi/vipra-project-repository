import { Component, OnInit } from "@angular/core";
import { mapImage } from "../../mappingLayer/mapper";
import { Image } from "../../entities/image";
import { ImageService } from "../../entityServices/image-service";

@Component({
    selector: 'logo',
    styleUrls: ['logo.component.scss'],
    templateUrl: 'logo.component.html'
})
export class LogoComponent implements OnInit {
 
    private static readonly LOGO_ENTRY_ID = "2UymGvlNhCoUsuags8mSqo";

    public imageUrl : string;

    constructor(
        private imageService : ImageService
    ) {
        
    }

    ngOnInit(): void {
        this.imageService.getImageUrl(LogoComponent.LOGO_ENTRY_ID)
            .subscribe(url => {
                this.imageUrl = url;
            });
    }
}