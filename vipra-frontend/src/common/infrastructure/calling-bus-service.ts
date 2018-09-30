import { Injectable } from "@angular/core";
import { BusService } from "./bus-service";

@Injectable()
export class CallingBusService {

    public static FORM = 'form';
    public static SHOW_PHOTO_FORM = 'show-photo-form';

    constructor(
        private busService : BusService
    ) {
        
    }

    public callForm() {
        this.busService.call(CallingBusService.FORM);
    }

    public callPhotoForm(context : object) {
        this.busService.call(CallingBusService.SHOW_PHOTO_FORM, context);
    }    
}