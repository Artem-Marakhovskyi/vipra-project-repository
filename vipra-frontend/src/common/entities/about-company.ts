import { forEach } from "@angular/router/src/utils/collection";

export class AboutCompany {
    
    public static readonly CONTENT_TYPE_ID = 'about_company';

    public contentArr : AboutCompanyContent[] = new Array<AboutCompanyContent>();

    public constructor(
        public header : string,
        public content : string
    ) {
        this.content = this.content.replace(/\!\[.*\]\(/g, '<link>(');

        var prevIdx = 0;
        for(var i = 0; i<this.content.length; i++) {
            if (this.content.charCodeAt(i) === 10) {
                
                this.contentArr.push(new AboutCompanyContent(this.content.substring(prevIdx, i)));
                prevIdx = i;
            }
        }
        this.contentArr.push(new AboutCompanyContent(this.content.substring(prevIdx, this.content.length)));

        for(var i=0;i<this.contentArr.length; i++) {
            while (this.contentArr[i].content.indexOf('<link>') > 0) {
                var startIdx =this.contentArr[i].content.indexOf('<link>');
                var endIdx = this.contentArr[i].content.indexOf(')', startIdx);
                this.contentArr[i].push(this.contentArr[i].content.substring(startIdx+7, endIdx));
                this.contentArr[i].content 
                    = this.contentArr[i].content.substring(0, startIdx) 
                        + this.contentArr[i].content.substr(endIdx + 1, this.contentArr[i].content.length - endIdx - 1);
            }
            this.contentArr[i].toString();
        }
     }
}

export class AboutCompanyContent {
    constructor(public content : string) {}
    public imgSources : string[] = new Array<string>();
    public push(imgSrc : string) {
        this.imgSources.push(imgSrc);
    }

    public toString() {
        for(var i=0; i< this.imgSources.length; i++) {
            console.log(this.imgSources[i]);
        }
    }
}