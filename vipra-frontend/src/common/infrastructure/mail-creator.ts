import { Injectable } from "@angular/core";
import { MailDetails } from "./mail-details";
@Injectable()
export class MailCreator {

    public create(mailDetails: MailDetails) {
       return {
           body : 'Доброго времени суток, пользователь веб-сайта \"Випра\" оставил заявку на обратную связь.' 
            + `<ul><li>Имя: ${mailDetails.username}</li><li>Email: ${mailDetails.email}</li><li>Телефон: ${mailDetails.phone}</li><li>Комментарий: ${mailDetails.comment}</li></ul>`,
           subject : 'Заявка на обратную связь'
       }
    }

}