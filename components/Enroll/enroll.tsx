import { useState, useEffect } from 'react';
import classes from '../Register/register-form.module.css';
import { userService, alertService } from 'services';
import eventJson from 'data/Events.json';
import {useRouter} from 'next/router';

function EnrollForm() {
  const router = useRouter();
const queryString = location.search;

const urlParams = new URLSearchParams(queryString);
const eventID = urlParams.get('tid');
var eventToEnroll = eventJson.filter(x=>x.ID.toString() == eventID).slice(0,1);

let users = require('data/users.json');
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredName, setEnteredName] = useState('');
  const [requestStatus, setRequestStatus] = useState();
  const [requestError, setRequestError] = useState();

  function enrollGrad(data:any) {
    //var eventToEnroll = eventJson.filter(x=>x.ID.toString() == eventID).slice(0,1);
    //alert(eventToEnroll[0].Topic);
    //TODO: send email and then redirec to success message.
    
    return;

    //return userService.create(data);
  }

  function sendMessageHandler(e:React.FormEvent) {
    e.preventDefault();
    //TODO: enroll to which training?
    const enrollData = { enteredName, enteredEmail };
    enrollGrad(enrollData);
    router.push('/success-enroll');
    //sendemail(enteredEmail);
  }

  let notification;

  if (requestStatus === 'pending') {
    notification = {
      status: 'pending',
      title: 'Sending message...',
      message: 'Your message is on its way!',
    };
  }

  if (requestStatus === 'success') {
    notification = {
      status: 'success',
      title: 'Success!',
      message: 'Message sent successfully!',
    };
  }

  if (requestStatus === 'error') {
    notification = {
      status: 'error',
      title: 'Error!',
      message: requestError,
    };
  }

  return (
    
    <section className={classes.contact}>
    <div className="container py-12">
    <p>You are enrolling to : {(eventToEnroll[0].Topic)}</p>
    <div className="row py-5">
          <form className="col-md-9 m-auto" method='POST' onSubmit={sendMessageHandler}>
              <div className="row">
                  <div className="form-group col-md-6 mb-3">
                      <label htmlFor="inputname">Name</label>
                      <input type="text" className="form-control mt-1" id="name" name="name" placeholder="Name" required value={enteredName}
              onChange={(event) => setEnteredName(event.target.value)} />
                  </div>
                  <div className="form-group col-md-6 mb-3">
                      <label htmlFor="inputemail">Email</label>
                      <input type="email" className="form-control mt-1" id="email" name="email" placeholder="Email" required value={enteredEmail}
              onChange={(event) => setEnteredEmail(event.target.value)} />
                  </div>
              </div>
              <div className="row">
                  <div className="col text-end mt-2">
                      <button type="submit" className="btn btn-success btn-lg px-3">Enroll Now</button>
                  </div>
              </div>
          </form>
      </div>
     </div>
  </section>
  );
}

export default EnrollForm;
