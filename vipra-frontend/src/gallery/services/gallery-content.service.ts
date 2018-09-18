import { Injectable } from "@angular/core";
import { Observable, concat } from "rxjs";
import { switchMap, switchMapTo, map, flatMap } from "rxjs/operators";
import { GalleryImage } from "../../common/entities/gallery-image";
import { ContentfulService } from "../../common/services/contentful-service";
import { mapGalleryImage } from "../../common/mappingLayer/mapper";

@Injectable()
export class GalleryContentService {

    public constructor(
        private contentfulService : ContentfulService) {
    }

    public getGalleryContent() : Observable<Array<GalleryImage>> {
         return this.contentfulService
            .ofContentType(GalleryImage.CONTENT_TYPE_ID, null, mapGalleryImage);
    }
}
