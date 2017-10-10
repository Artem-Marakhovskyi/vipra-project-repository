import { ErrorReason } from './error-reason';

export class ArgumentEror extends Error {

    public reason : ErrorReason;
    public argumentName : string;

    constructor(reason : ErrorReason, argumentName? : string) {
        super(reason.toString());

        this.reason = reason;
        this.argumentName = argumentName;
    }

    public toString(){
        var result = '';
        if (this.argumentName){
            result = 'Argument name: ' + this.argumentName + ', ';
        }

        result += 'Reason: ' + reason.toString();
    }
}