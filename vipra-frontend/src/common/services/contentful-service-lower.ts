import { Injectable } from '@angular/core';
import { ArgumentError } from '../errors/argument-error';
import { ErrorReason } from '../errors/error-reason';
import { ContentfulValues } from '../infrastructure/contentful-values';
import { Observable } from 'rxjs/Observable';
import { createClient, Entry, ContentfulClientApi } from 'contentful';
import { Asset } from '../entities/asset';
import { createWriteStream } from 'fs';

@Injectable()
export class ContentfulServiceLower {

    private client : ContentfulClientApi;

    public constructor(
        private contentfulValues: ContentfulValues,
        private errorTypes : ErrorReason) {
        this.client = createClient({
            space: contentfulValues.SPACE_ID,
            accessToken: contentfulValues.ACCESS_TOKEN
        });
    }

    public ofContentType<T>(
        contentTypeId : string,
        orderField : string,
        mappingFunction : (arg : any) => T,
        reverseOrder : boolean = false,
        take : number = 100,
        skip : number = 0)
        : Promise<T[]> {
            if (contentTypeId.length === 0) {
                throw new ArgumentError(this.errorTypes.Inconsistency, "contentTypeId");
            }

            var returnList = [];

            let paramObj : any = {
                content_type: contentTypeId,
                limit: take,
                skip: skip
            };

            if (orderField) {
                paramObj.order = (reverseOrder ? '-' : '') + 'fields.' + orderField;
            }

            return this.client.getEntries(
                paramObj
            ).then(
                    response => {
                        var res = [];
                        for (var i = 0; i < response.items.length; i++) {
                            res.push(mappingFunction(response.items[i]));
                        }

                        return res;
                    }
            ).catch(
                (e) => 
                {
                    throw new Error('Problem with rertieving data.' + e);
                });
    }

    public entry<T>(
        entryId : string,
        mappingFunction : (arg : any) => T
    ) : Promise<T> {
        if (entryId.length === 0){
            throw new ArgumentError(this.errorTypes.Inconsistency, "entryId");
        }

        return this.client.getEntry(entryId)
            .then((response) => mappingFunction(response))
            .catch(
                () => 
                {
                    throw new Error(`Problem with rertieving entry ${entryId}`);
                });        
    }

    public obtainAssetUrl(
        assetId : string
    ) : Promise<string>
    {
        return this.client.getAsset(assetId)
            .then((response) => response.fields.file.url)
            .catch(
                () => 
                {
                    throw new Error(`Problem with rertieving entry ${assetId}`);
                });     
    }

    public obtainAsset(
        assetId : string
    ) : Promise<Asset>
    {
        return this.client.getAsset(assetId)
            .then(this.mapAsset)
            .catch(
                () => 
                {
                    throw new Error(`Problem with rertieving asset ${assetId}`);
                });     
    }

    private mapAsset(item: any) {
        return new Asset(
            item.fields.title,
            item.fields.description,
            item.fields.file.url,
            item.fields.file.details.image.width,
            item.fields.file.details.image.height,
            item.fields.file.contentType
        );
    }
}
