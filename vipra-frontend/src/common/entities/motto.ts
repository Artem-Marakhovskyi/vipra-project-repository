export class Motto {

    public static readonly CONTENT_TYPE_ID = 'motto';

    constructor(
        public accentedText : string,
        public additionalText : string,
        public callbackText : string
    ) {
    }

}