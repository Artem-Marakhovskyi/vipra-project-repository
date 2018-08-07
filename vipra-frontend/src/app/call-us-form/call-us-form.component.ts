
import { Component, OnInit } from '@angular/core';
import { BusService } from '../../common/infrastructure/bus-service';
import { Pingable } from '../../common/infrastructure/pingable';
import { CallingBusService } from '../../common/infrastructure/calling-bus-service';
import { ModalService } from '../../common/infrastructure/modal-service';
import { FormControl, FormGroup, FormBuilder, ValidationErrors } from '@angular/forms';
import { MailCreator } from '../../common/infrastructure/mail-creator';
import { MailDetails } from '../../common/infrastructure/mail-details';
import { Observable } from '../../../node_modules/rxjs';
import { ContentfulManagementService } from '../../common/services/contentful-management-service-lower';
import { CallbackRequest } from '../../common/infrastructure/callback-request';

declare function sendMail(subject, bodyMsg) : void;

@Component({
  selector: 'call-us-form',
  templateUrl: './call-us-form.component.html',
  styleUrls: ['./call-us-form.component.scss']
})
export class CallUsFormComponent implements Pingable, OnInit{

    private static readonly FORM_ID = 'callFormId';

    private email: FormControl;
    private username: FormControl;
    private phone: FormControl;
    private comment: FormControl;
    private callForm: FormGroup;
    private triedToPost : boolean;
    private emailError : boolean;
    private phoneError : boolean;
    public customError : string;
    private success : boolean;

    constructor(
        private busService : BusService,
        public modalService : ModalService,
        private fb: FormBuilder,
        private mailCreator : MailCreator,
        private contentfulManagementService : ContentfulManagementService
    ) {
    }


    public ngOnInit(): void {
        this.busService.register(this, CallingBusService.FORM);
        this.createFormControls();
        this.createFormGroup(this.fb);
        this.subscribeToValueChanges();
    }

    public ping(caller : Pingable) {
        (<CallUsFormComponent>caller).modalService.open(CallUsFormComponent.FORM_ID);
    }

    public post() {
        this.triedToPost = true;
        
        this.emailError = !!this.validateEmail(this.email);
        this.phoneError = !!this.validatePhone(this.phone);

        if (this.emailError && this.phoneError)
        {
            this.customError = 'Укажите адрес электронной почты или телефон';
            return;
        }

        
        this.contentfulManagementService.insert(
            'callback_request',
             new CallbackRequest(this.username.value, this.email.value, this.phone.value, this.comment.value));

        this.email.setValue('');
        this.username.setValue('');
        this.phone.setValue('');
        this.comment.setValue('');

        this.emailError = false;
        this.phoneError = false;

        this.success = true;

        setTimeout(() => {
            this.modalService.close(CallUsFormComponent.FORM_ID)
            this.success = false;
        }, 3000);
    }
        
    private createFormGroup(fb: FormBuilder) {
        this.callForm = fb.group({
            email: this.email,
            username: this.username,
            phone: this.phone,
            comment: this.comment
        });
    } 

    private subscribeToValueChanges() {
        this.email.setValidators(this.validateEmail);
        this.phone.setValidators(this.validatePhone);
        this.email.valueChanges.subscribe(
            () => {
                if (!this.triedToPost) {
                    return;
                }
                this.customError = '';
                this.emailError = this.email.errors != null;
            });
    }

    private createFormControls() {
        this.email = new FormControl();
        this.username = new FormControl();
        this.phone = new FormControl();
        this.comment = new FormControl();
    }

    private validatePhone(pc : FormControl) : ValidationErrors {
        if (!pc.value) {
            return { phone : 1};
        }

        return null;
    }

    private validateEmail(fc : FormControl) : ValidationErrors {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        let result = re.test(new String(fc.value).toLowerCase());

        if (!result || !fc.value) {
            return {email : 1};
        }

        return null;
    }
}
