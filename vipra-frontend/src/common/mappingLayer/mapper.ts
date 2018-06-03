import { AboutCompany } from "../entities/about-company";
import { Image } from "../entities/image";

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