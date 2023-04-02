import { SENDGRID_API_KEY } from 'config';
const mail = require('@sendgrid/mail');
mail.setApiKey(SENDGRID_API_KEY);

export default function handler (data: string,message: string)  
{
    const status:boolean = mail.send(data);
    if(status){
        console.log('email sent');
    }
}
