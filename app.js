const cafeList = document.querySelector('#cafe-list');
const form = document.querySelector('#add-cafe-form');


// create element and render cafe
function renderCafe (doc){
    let li = document.createElement('li');
    let username = document.createElement('span');
    let password = document.createElement('span');

    li.setAttribute('data-id', doc.id);
    username.textContent = doc.data().username;
    password.textContent = doc.data().password;

    li.appendChild(username);
    li.appendChild(password);

    cafeList.appendChild(li);
}



//saving data
form.addEventListener('submit', (e) => {
    e.preventDefault();
    db.collection('accounts').add({
        username: form.username.value, 
        password: form.password.value
    });
    form.username.value = '';
    form.password.value = '';
})
