import { SENDGRID_API_KEY } from 'config';
const mail = require('@sendgrid/mail');
mail.setApiKey(SENDGRID_API_KEY);

export default function handler (email: string)  
{
    const message =`
    Email: ${email}\n\r
    Greetings From Horizontal : 'You have been successfully registered to Horizontal Grads Program. Welcome OnBoard
    `;
    const data={
        to:email,
        from:'abarve@horizontal.com',
        subject:'Successfull Account Creation With Horizontal Grads Program',
        text: message,
        html: message.replace(/\r\n/g,'<br>')
    }
    const status:boolean = mail.send(data);
    if(status){
        console.log('email sent');
        console.log(email);
    }
}
