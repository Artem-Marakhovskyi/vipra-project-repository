import { AboutCompany } from "../entities/about-company";
import { Image } from "../entities/image";
import { NavigationMenuItem } from "../entities/navigation-menu-item";
import { Contact } from "../entities/contact";
import { FooterContent } from "../entities/footer-content";
import { Motto } from "../entities/motto";
import { Activity } from "../entities/activity";
import { Requisites } from "../entities/requisites";

export function mapAboutCompany(item : any) : AboutCompany {
    return new AboutCompany(
        item.fields.title,
        item.fields.about
    );
}

export function mapImage(item : any) : Image {
    return new Image(
        item.fields.content.sys.id,
        item.fields.name
    );
}

export function mapNavigationMenuItem(item : any) : NavigationMenuItem {
    return new NavigationMenuItem(
        item.fields.element_name,
        item.fields.order,
        item.fields.link_value,
        item.fields.visible
    );
}

export function mapContact(item : any) : Contact {
    return new Contact(
        item.fields.contact_name,
        item.fields.contact_values,
        item.fields.contact_person,
        item.fields.is_phone,
        item.fields.order_field
    );
}

export function mapFooterContent(item : any) : FooterContent {
    return new FooterContent(
        item.fields.left_side,
        item.fields.right_side
    );
}

export function mapMotto(item : any) : Motto {
    return new Motto(
        item.fields.accented_caption,
        item.fields.description,
        item.fields.callback_caption
    );
}

export function mapActivity(item : any) : Activity {
    return new Activity(
        item.fields.name,
        [
            item.fields.number1,
            item.fields.number2,
            item.fields.number3,
            item.fields.number4,
            item.fields.number5,
            item.fields.number6,
            item.fields.number7,
            item.fields.number8,
            item.fields.number9,
            item.fields.number10
        ]
    )
}

export function mapRequisites(item : any) {
    return new Requisites(
        item.fields.subtitle,
        [
            item.fields.line1,
            item.fields.line2,
            item.fields.line3,
            item.fields.line4,
            item.fields.line5
        ]
    )
}