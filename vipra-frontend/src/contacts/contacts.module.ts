import { CommonModule } from "@angular/common";
import { NgModule, ModuleWithProviders } from "@angular/core";
import { SharedModule } from "../common/shared.module";
import { ContactComponent } from "./contact/contact.component";
import { routing } from "./contacts.routing";
import { ContactsComponent } from "./contacts.component";
import { ContactsListComponent } from "./contacts-list/contacts-list.component";


@NgModule({
    imports: [
        CommonModule, 
        SharedModule.forRoot(),
        routing
    ],
    declarations: [
        ContactComponent,
        ContactsComponent,
        ContactsListComponent
    ],
    providers: [],
    exports: [
        ContactsComponent
    ]
})
export class ContactsModule {}
