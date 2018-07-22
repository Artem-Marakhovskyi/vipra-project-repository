export class Contact {

    public static readonly CONTENT_TYPE_ID = 'contact';
    public static readonly ORDER_FIELD = 'order_field';

    constructor(
        public title : string,
        public content : string,
        public contactPerson : string,
        public isPhone : boolean,
        public order : number) { }
}