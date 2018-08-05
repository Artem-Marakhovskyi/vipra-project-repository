
import { Component, OnInit } from '@angular/core';
import { BusService } from '../../common/infrastructure/bus-service';
import { Pingable } from '../../common/infrastructure/pingable';
import { CallingBusService } from '../../common/infrastructure/calling-bus-service';
import { ModalService } from '../../common/infrastructure/modal-service';
import { FormControl, FormGroup, FormBuilder, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'call-us-form',
  templateUrl: './call-us-form.component.html',
  styleUrls: ['./call-us-form.component.scss']
})
export class CallUsFormComponent implements Pingable, OnInit{

    private email: FormControl;
    private username: FormControl;
    private phone: FormControl;
    private comment: FormControl;
    private callForm: FormGroup;
    private triedToPost : boolean;
    private emailError : boolean;
    private phoneError : boolean;

    constructor(
        private busService : BusService,
        public modalService : ModalService,
        private fb: FormBuilder
    ) {
    }


    public ngOnInit(): void {
        this.busService.register(this, CallingBusService.FORM);
        this.createFormControls();
        this.createFormGroup(this.fb);
        this.subscribeToValueChanges();
    }

    public ping(caller : Pingable) {
        (<CallUsFormComponent>caller).modalService.open('callFormId');
    }

    public post() {
        this.triedToPost = true;
        
        this.emailError = !!this.email.errors;
        this.phoneError = !!this.phone.errors;

        if (this.emailError || this.phoneError)
        {
            return;
        }

        this.email.setValue('');
        this.username.setValue('');
        this.phone.setValue('');
        this.comment.setValue('');
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
        this.email.valueChanges.subscribe(
            () => {
                if (!this.triedToPost) {
                    return;
                }

                this.emailError = this.email.errors != null;
            });

    }

    private createFormControls() {
        this.email = new FormControl();
        this.username = new FormControl();
        this.phone = new FormControl();
        this.comment = new FormControl();
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
