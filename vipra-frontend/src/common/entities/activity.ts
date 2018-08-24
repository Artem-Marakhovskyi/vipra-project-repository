export class Activity {

    public static readonly CONTENT_TYPE_ID = 'activity';

    constructor(
        public name : string,
        public list : string[],
        public icon_name : string
    ) {
        this.list = this.list.filter(e => e);
    }
}