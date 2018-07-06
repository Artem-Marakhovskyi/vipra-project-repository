import { Injectable } from "@angular/core";
import { ContentfulService } from "../services/contentful-service";
import { Observable, concat } from "rxjs";
import { switchMap, switchMapTo, map, flatMap } from "rxjs/operators";
import { Image } from "../entities/image";
import { mapImage } from "../mappingLayer/mapper";
@Injectable()
export class ImageService {

    public constructor(
        private contentfulService : ContentfulService) {
            
    }

    public getImageUrl(
        entryId : string
    ) : Observable<string> {
         return this.contentfulService
            .entry<Image>(entryId, mapImage)
            .pipe(flatMap(image => this.contentfulService.obtainAssetUrl(image.assetId)));
    }

}
