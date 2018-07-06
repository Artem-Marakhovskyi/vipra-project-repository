import { Injectable } from '@angular/core';
import { ArgumentError } from '../errors/argument-error';
import { ContentfulValues } from '../infrastructure/contentful-values';
import { Observable } from 'rxjs/Observable';
import { createClient, Entry } from 'contentful';
import { Asset } from '../entities/asset';
import { ContentfulServiceLower } from './contentful-service-lower';
import { from } from 'rxjs';

@Injectable()
export class ContentfulService {

    public constructor(
        private contentfulServiceLower : ContentfulServiceLower) {
    }

    public ofContentType<T>(
        contentTypeId : string,
        orderField : string,
        mappingFunction : (arg : any) => T,
        reverseOrder : boolean = false,
        take : number = 100,
        skip : number = 0)
        : Observable<T[]> {
            return from(this.contentfulServiceLower.ofContentType<T>(
                contentTypeId,
                orderField,
                mappingFunction,
                reverseOrder,
                take,
                skip
            ));
    }

    public entry<T>(
        entryId : string,
        mappingFunction : (arg : any) => T
    ) : Observable<T> {
        return from(this.contentfulServiceLower.entry(
            entryId,
            mappingFunction
        ));
    }

    public obtainAssetUrl(
        assetId : string
    ) : Observable<string>
    {
        return from(this.contentfulServiceLower.obtainAssetUrl(assetId));
    }

    public obtainAsset(
        assetId : string
    ) : Observable<Asset>
    {
        return from(this.contentfulServiceLower.obtainAsset(assetId));
    }
}
