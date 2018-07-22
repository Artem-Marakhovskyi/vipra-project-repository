export class NavigationMenuItem {
    
    public static readonly CONTENT_TYPE_ID = 'navigation_element';

    constructor(    
        public name : string,
        public order : number,
        public link : string
    ) {
    }

}