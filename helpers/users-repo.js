import sendemail from "../pages/api/sendmail";
const fs = require('fs');

let users = require('data/users.json');

export const usersRepo = {
    getAll,
    getById,
    create,
    update,
    delete: _delete
};

function getAll() {
    return users;
}

function getById(id) {
    return users.find(x => x.id.toString() === id.toString());
}

function create({ enteredName, enteredEmail, enteredQualification, enteredHobbies, enteredReportingmanager, enteredInterestedin }) {
    const message =`
    Email: ${enteredEmail}\n\r
    Greetings From Horizontal : 'You have been successfully registered to Horizontal Grads Program. Welcome OnBoard
    `;
    const data={
        to:enteredEmail,
        from:'abarve@horizontal.com',
        subject:'Successfull Account Creation With Horizontal Grads Program',
        text: message,
        html: message.replace(/\r\n/g,'<br>')
    }

    sendemail(data, message);
    
    const user = { enteredName, enteredEmail, enteredQualification, enteredHobbies, enteredReportingmanager, enteredInterestedin };

    // validate
    if (users.find(x => x.email === user.enteredEmail))
        throw `User with the email ${user.enteredEmail} already exists`;

    // generate new user id
    user.id = users.length ? Math.max(...users.map(x => x.id)) + 1 : 1;

    // set date created and updated
    user.dateCreated = new Date().toISOString();
    user.dateUpdated = new Date().toISOString();

    // add and save user
    users.push(user);
    saveData();
}

function update(id, { title, firstName, lastName, email, role, password }) {
    const params = { title, firstName, lastName, email, role, password };
    const user = users.find(x => x.id.toString() === id.toString());

    // validate
    if (params.email !== user.email && users.find(x => x.email === params.email))
        throw `User with the email ${params.email} already exists`;

    // only update password if entered
    if (!params.password) {
        delete params.password;
    }

    // set date updated
    user.dateUpdated = new Date().toISOString();

    // update and save
    Object.assign(user, params);
    saveData();
}

// prefixed with underscore '_' because 'delete' is a reserved word in javascript
function _delete(id) {
    // filter out deleted user and save
    users = users.filter(x => x.id.toString() !== id.toString());
    saveData();
    
}

// private helper functions

function saveData() {
    fs.writeFileSync('data/users.json', JSON.stringify(users, null, 4));
}