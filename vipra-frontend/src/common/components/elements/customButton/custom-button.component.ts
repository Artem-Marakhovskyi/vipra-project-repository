import { Component, Input, Output } from "@angular/core";
import { EventEmitter } from "@angular/core";

@Component({
    selector: 'custom-button',
    styleUrls: ['custom-button.component.scss'],
    templateUrl: 'custom-button.component.html'
})
export class CustomButtonComponent {
 
    @Input() public txt : string;
    @Input() public filled : boolean;

    @Output()
    public click = new EventEmitter();

    public handleClick() {
        this.click.emit(null);
    }
}