import { Injectable } from "@angular/core";

@Injectable()
export class ErrorReason  {
    OutOfRange = 'Out of range';
    Null = 'Null';
    TooSmall =  'Argument is to small';
    Inconsistency =  'Inconsistency';
}