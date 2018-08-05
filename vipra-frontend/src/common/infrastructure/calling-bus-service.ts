import { Injectable } from "@angular/core";
import { BusService } from "./bus-service";

@Injectable()
export class CallingBusService {

    public static FORM = 'form';

    constructor(
        private busService : BusService
    ) {
        
    }

    public callForm() {
        this.busService.call(CallingBusService.FORM);
    }
}