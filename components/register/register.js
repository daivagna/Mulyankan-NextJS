import { useState, useEffect } from 'react';

 import classes from '../register/register-form.module.css';
 import { userService, alertService } from 'services';


function RegisterForm() {
  const fs = require('fs');

let users = require('data/users.json');
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredQualification, setEnteredQualification] = useState('');
  const [enteredHobbies, setEnteredHobbies] = useState('');
  const [enteredReportingmanager, setEnteredReportingmanager] = useState('');
  const [enteredInterestedin, setEnteredInterestedin] = useState('');
  const [enteredName, setEnteredName] = useState('');
  const [enteredComments, setEnteredComments] = useState('');
  const [requestStatus, setRequestStatus] = useState(); // 'pending', 'success', 'error'
  const [requestError, setRequestError] = useState();

  useEffect(() => {
    if (requestStatus === 'success' || requestStatus === 'error') {
    }
  }, [requestStatus]);

  function createUser(data) {
    return userService.create(data)
        .then(() => {
            alertService.success('User added', { keepAfterRouteChange: true });
            router.push('.');
        })
        .catch(alertService.error);
  }

  function sendMessageHandler(event) {
    const user = { enteredName, enteredEmail, enteredQualification, enteredHobbies, enteredReportingmanager, enteredInterestedin };
    createUser(user);
    
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
              <div className="mb-3">
                  <label htmlFor="inputsubject">Qualification</label>
                  <input type="text" className="form-control mt-1" id="subject" name="qualification" placeholder="Qualification" required value={enteredQualification}
              onChange={(event) => setEnteredQualification(event.target.value)} />
              </div>
              <div className="mb-3">
                  <label htmlFor="inputsubject">Hobbies</label>
                  <input type="text" className="form-control mt-1" id="subject" name="hobbies" placeholder="Hobbies" value={enteredHobbies}
              onChange={(event) => setEnteredHobbies(event.target.value)} />
              </div>
              <div className="mb-3">
                  <label htmlFor="inputsubject">Reporting Manager</label>
                  <input type="text" className="form-control mt-1" id="subject" name="reportingto" placeholder="Reporting Manager" value={enteredReportingmanager}
              onChange={(event) => setEnteredReportingmanager(event.target.value)} />
              </div>
              <div className="mb-3">
                  <label htmlFor="inputsubject">Interested In</label>
                  <select name="interestedin" className='form-control mt-1' required placeholder="Interested In" value={enteredInterestedin}
              onChange={(event) => setEnteredInterestedin(event.target.value)}>
                        <option value=""></option>
                        <option value="Frontend">Frontend</option>
                        <option value="Backend">Backend</option>
                        <option value="QA">QA</option>
                        <option value="DevOps">DevOps</option>
                  </select>
              </div>
              <div className="mb-3">
                  <label htmlFor="inputmessage">Comments</label>
                  <textarea className="form-control mt-1" id="message" name="comments" placeholder="Comments" rows="8" value={enteredComments}
            onChange={(event) => setEnteredComments(event.target.value)}></textarea>
              </div>
              <div className="row">
                  <div className="col text-end mt-2">
                      <button type="submit" className="btn btn-success btn-lg px-3">Register</button>
                  </div>
              </div>
          </form>
      </div>
     </div>
  </section>
  );
}

export default RegisterForm;
