import { ErrorReason } from './error-reason';

export class ArgumentError extends Error {

    constructor(
        public reason : string, 
        public argumentName? : string) {
            super();
            this.message = this.toString();
        }

    public toString(){
        var result = '';
        if (this.argumentName){
            result = 'Argument name: ' + this.argumentName + ', ';
        }

        result += 'Reason: ' + this.reason;

        return result;
    }
}