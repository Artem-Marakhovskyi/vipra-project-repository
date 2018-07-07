import { Injectable } from "@angular/core";
import { ContentfulService } from "../services/contentful-service";
import { Observable } from "rxjs";
import { mapNavigationMenuItem } from "../mappingLayer/mapper";
import { NavigationMenuItem } from "../entities/navigation-menu-item";

@Injectable()
export class NavigationMenuService {

    public constructor(
        private contentfulService : ContentfulService) {
            
    }

    public getNavigationMenuItems(
    ) : Observable<NavigationMenuItem[]> {
         return this.contentfulService
            .ofContentType(
                NavigationMenuItem.CONTENT_TYPE_ID,
                "order_field",
                mapNavigationMenuItem,
                false,
                10,
                0
            );
    }

}
