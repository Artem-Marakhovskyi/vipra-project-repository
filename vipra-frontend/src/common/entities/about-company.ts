export class AboutCompany {
    
    public static readonly CONTENT_TYPE_ID = 'about_company';
    public static readonly ORDER_FIELD = '';

    public constructor(
        public title : string,
        public about : string
    ) { }
}