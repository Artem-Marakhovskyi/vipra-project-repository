import { Injectable } from "@angular/core";
import { MailDetails } from "./mail-details";
@Injectable()
export class MailSender {

    public static SMPT_USERNAME='e39c7ed919e83531002e87656acdd8cc';

    public static SMPT_PASSWORD='f5e393db762d58761d0908a76dde0903';


    public send(mailDetails: MailDetails) {
        // var mailjet = 
        //     .connect(MailSender.SMPT_USERNAME, MailSender.SMPT_PASSWORD)
        
        // var request = 
        //     .post("send")
        //     .request({
        //         "FromEmail":"vipra.internal@gmail.com",
        //         "FromName":"Без имени",
        //         "Subject":"Заявка на обратную связь",
        //         "Text-part":"Доброго времени суток, пользователь веб-сайта \"Випра\" оставил заявку на обратную связь.",
        //         "Html-part": `<ul><li>Имя: ${mailDetails.username}</li><li>Email: ${mailDetails.email}</li><li>Телефон: ${mailDetails.phone}</li><li>Комментарий: ${mailDetails.comment}</li></ul>`,
        //         "Recipients":[
        //                 {
        //                         "Email": "vipra.internal@gmail.com"
        //                 }
        //         ]
        //     });
        // request
        //     .on('success', function (response, body) {
        //         console.log (response.statusCode, body);
        //     })
        //     .on('error', function (err, response) {
        //         console.log (response.statusCode, err);
        //     });
    }
}