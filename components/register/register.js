import { useState, useEffect } from 'react';

 import classes from '../register/register-form.module.css';


// import Notification from '../ui/notification';

// async function sendContactData(contactDetails) {
//   const response = await fetch('/api/contact', {
//     method: 'POST',
//     body: JSON.stringify(contactDetails),
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   });

//   const data = await response.json();

//   if (!response.ok) {
//     throw new Error(data.message || 'Something went wrong!');
//   }
// }

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
    //   const timer = setTimeout(() => {
    //     setRequestStatus(null);
    //     setRequestError(null);
    //   }, 3000);

    //   return () => clearTimeout(timer);
    }
  }, [requestStatus]);

  function post(url, body) {
    debugger;
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
    };
    return fetch(url, requestOptions).then(handleResponse);
  } 

  async function sendMessageHandler(event) {
    alert("in" + users);
    var data = {
      email: enteredEmail,
      name: enteredName,
      message: enteredMessage,
    }
    console.log("user");
    console.log(users);
    debugger;
    const user = { enteredName, enteredEmail, lastName, enteredEmail, role, password };
    alert(users.find(x => x.email === user.email));
    // validate
    if (users.find(x => x.email === user.email))
        throw `User with the email ${user.email} already exists`;

    // generate new user id
    user.id = users.length ? Math.max(...users.map(x => x.id)) + 1 : 1;

    // set date created and updated
    user.dateCreated = new Date().toISOString();
    user.dateUpdated = new Date().toISOString();

    // add and save user
    users.push(user);
    fs.writeFileSync('data/users.json', JSON.stringify(users, null, 4));
    
    post("http://localhost:3000/api/users",data);

    console.log(data);

    
    //event.preventDefault();
    return false;

    // optional: add client-side validation

    // setRequestStatus('pending');

    // try {
    //   await sendContactData({
    //     email: enteredEmail,
    //     name: enteredName,
    //     message: enteredMessage,
    //   });
    //   setRequestStatus('success');
    //   setEnteredMessage('');
    //   setEnteredEmail('');
    //   setEnteredName('');
    // } catch (error) {
    //   setRequestError(error.message);
    //   setRequestStatus('error');
    // }
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
