export class GalleryImage {
    
    public static readonly CONTENT_TYPE_ID = 'gallery-photo';

    public imageUrl : string;

    public constructor(
        public assetId : string,
        public content : string 
    ) {
    }
    
}