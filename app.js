const userList = document.querySelector('#user-list');
const form = document.querySelector('#add-user-form');


// create element and render user
function renderUser(doc){
    let li = document.createElement('li');
    let password = document.createElement('span');
    let username = document.createElement('span');

    li.setAttribute('data-id', doc.id);
    password.textContent = doc.data().password;
    username.textContent = doc.data().username;

    li.appendChild(password);
    li.appendChild(username);

    userList.appendChild(li);
}



//saving data
form.addEventListener('submit', (e) => {
    e.preventDefault();
    db.collection('accounts').add({ 
        password: form.password.value,
        username: form.username.value,
    });
    form.password.value = '';
    form.username.value = '';
})
