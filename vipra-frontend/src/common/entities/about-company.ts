export class AboutCompany {
    
    public static readonly CONTENT_TYPE_ID = 'about_company';

    public constructor(
        public title : string,
        public about : string
    ) { }
}