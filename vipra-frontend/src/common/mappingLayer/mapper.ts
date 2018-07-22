import { AboutCompany } from "../entities/about-company";
import { Image } from "../entities/image";
import { NavigationMenuItem } from "../entities/navigation-menu-item";
import { Contact } from "../entities/contact";

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
        item.fields.link_value
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