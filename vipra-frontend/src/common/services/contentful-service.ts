import { Injectable } from '@angular/core';
import { ContentfulValues } from '../infrastructure/index';
const contentful = require('contentful');



[Injectable]
export class ContentfulService {

    private client : any;

    public constructor(private contentfulValues: ContentfulValues) {
        this.client = contentful.createClient({
            space: contentfulValues.SPACE_ID,
            accessToken: contentfulValues.ACCESS_TOKEN
        });
    }

    public entries<T>(
        contentTypeId : string,
        orderField : string,
        reverseOrder : boolean = false,
        limit : number = 100,
        skip : number = 0)
        : T[] {
        
            if (contentTypeId.length === 0){
                throw new Erro
            }

            return this.client.getEntries({
                content_type: contentTypeId,
                order: reverseOrder ? orderField : '-'+orderField,
                limit: limit,
                skip: skip
            }).then(response => response.items.map(map<T>));
        }
    }

    public map<T>(item : any) {

    }

}