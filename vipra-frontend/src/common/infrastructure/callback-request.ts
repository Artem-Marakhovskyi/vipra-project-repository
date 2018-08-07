export class CallbackRequest {

    public name : any;
    public email : any;
    public phone : any;
    public comment : any;

    constructor(
        name :string,
        email : string,
        phone : string,
        comment : string){
            this.name = {'ru-UA' : !name ? '<Нет данных>' : name };
            this.email = {'ru-UA' : !email ? '<Нет данных>' : email };
            this.phone = {'ru-UA' : !phone ? '<Нет данных>' : phone };
            this.comment = {'ru-UA' : !comment ? '<Нет данных>' : comment };
    }
}