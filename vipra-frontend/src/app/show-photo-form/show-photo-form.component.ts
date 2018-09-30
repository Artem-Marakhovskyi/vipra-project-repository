
import { Component, OnInit } from '@angular/core';
import { BusService, PingContext } from '../../common/infrastructure/bus-service';
import { Pingable } from '../../common/infrastructure/pingable';
import { CallingBusService } from '../../common/infrastructure/calling-bus-service';
import { ModalService } from '../../common/infrastructure/modal-service';
import { Observable } from '../../../node_modules/rxjs';
import { CallbackRequest } from '../../common/infrastructure/callback-request';

@Component({
  selector: 'show-photo-form',
  templateUrl: './show-photo-form.component.html',
  styleUrls: ['./show-photo-form.component.scss']
})
export class ShowPhotoFormComponent implements Pingable, OnInit{

    private static readonly FORM_ID = 'showPhotoFormId';

    public outerWidth = "800px";
    public imageUrl : string;
    public content : string;

    constructor(
        private busService : BusService,
        public modalService : ModalService
    ) {
        this.busService.register(this, CallingBusService.SHOW_PHOTO_FORM);
    }


    public ngOnInit(): void {
        
    }

    public ping(ctx : PingContext) {
        let me = <ShowPhotoFormComponent>ctx.pingable;
        me.imageUrl = ctx.context.imageUrl;
        me.content = ctx.context.content;
        (<ShowPhotoFormComponent>ctx.pingable).modalService.open(ShowPhotoFormComponent.FORM_ID);
    }

}
