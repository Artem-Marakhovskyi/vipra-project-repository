import { Injectable } from "../../../node_modules/@angular/core";
import { ContentfulValues } from "../infrastructure/contentful-values";


@Injectable()
export class ContentfulManagementService {

    private static readonly TOKEN = 'CFPAT-a0bf3111a86ff76dd137d48118d0345f41a0d49d3d3c25f0fea0152d287df146';

    private client : any;

    constructor(
        private contentfulValues : ContentfulValues
    ) {
        this.client = require('contentful-management').createClient({
            accessToken: ContentfulManagementService.TOKEN
          });
          console.log(this.client);
    }

    public insert(contentTypeId: string, obj : any) {
        console.log(obj);
        this.client.getSpace(this.contentfulValues.SPACE_ID)
            .then((space) => space.getEnvironment('master'))
            .then(
                (environment) => 
                    environment.createEntry(
                        contentTypeId, {fields: obj}))
            .then((entry) => console.log(entry))
            .catch(console.error);
    }
}
