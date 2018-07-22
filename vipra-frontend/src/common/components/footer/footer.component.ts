import { Component } from "@angular/core";

@Component({
    selector: 'app-footer',
    styleUrls: ['footer.component.scss'],
    templateUrl: 'footer.component.html'
  })
export class FooterComponent {
    public nowYear : string;

    /**
     *
     */
    constructor() {
      this.nowYear = new Date().getFullYear().toString();
    }
}