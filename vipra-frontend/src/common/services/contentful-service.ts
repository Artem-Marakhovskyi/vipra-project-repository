import { Injectable } from '@angular/core';
import { ArgumentError } from '../errors/argument-error';
import { ErrorReason } from '../errors/error-reason';
import { ContentfulValues } from '../infrastructure/contentful-values';
import { Observable } from 'rxjs/Observable';

const contentful = require('contentful');

@Injectable()
export class ContentfulService {

    private client : any;

    public constructor(
        private contentfulValues: ContentfulValues,
        private errorTypes : ErrorReason) {
        this.client = contentful.createClient({
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
                paramObj.order = reverseOrder ? orderField : '-'+ orderField;
            }

            return this.client.getEntries(
                paramObj
            ).then(
                    response => response.items.map(mappingFunction)
            ).catch(
                () => 
                {
                    throw new Error('Problem with rertieving data');
                });
    }

    public entry<T>(
        entryId : string,
        mappingFunction : <T>(arg : any) => T
    ) {
        if (entryId.length === 0){
            throw new ArgumentError(this.errorTypes.Inconsistency, "entryId");
        }

        return this.client.getEntry(entryId)
            .then((response) => mappingFunction(response))
            .catch(
                () => 
                {
                    throw new Error('Problem with rertieving entry');
                });        
    }

    public asset(
        assetId : string
    ) : string
    {
        return this.client.getAsset(assetId)
            .then((response) => response.fields.file.url)
            .catch(
                () => 
                {
                    throw new Error('Problem with rertieving entry');
                });     
    }
}
