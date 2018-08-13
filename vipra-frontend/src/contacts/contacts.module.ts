import { CommonModule } from "@angular/common";
import { NgModule, ModuleWithProviders } from "@angular/core";
import { SharedModule } from "../common/shared.module";
import { ContactComponent } from "./contact/contact.component";
import { routing } from "./contacts.routing";
import { ContactsComponent } from "./contacts.component";
import { ContactsListComponent } from "./contacts-list/contacts-list.component";
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { mapContact } from "../common/mappingLayer/mapper";
import { MapComponent } from "./map/map.component";
import { RequisitesComponent } from "./requisites/requisites.component";

@NgModule({
    imports: [
        CommonModule, 
        SharedModule,
        LeafletModule,
        routing
    ],
    declarations: [
        ContactComponent,
        RequisitesComponent,
        ContactsComponent,
        ContactsListComponent,
        MapComponent
    ],
    providers: [],
    exports: [
        ContactsComponent
    ]
})
export class ContactsModule {}
