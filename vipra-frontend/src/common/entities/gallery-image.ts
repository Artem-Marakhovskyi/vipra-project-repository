export class GalleryImage {
    
    public static readonly CONTENT_TYPE_ID = 'gallery-photo';

    public imageUrl : string;

    public shortenedContent : string;

    public constructor(
        public assetId : string,
        public content : string 
    ) {
        this.shortenedContent = this.content.length < 100 
            ? this.content
            : this.content.substr(0, 100) + '...';
    }
    
}