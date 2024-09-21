const KEY_USERS = "users";
const users = [
    {
        username: 'abc',
        password: '123',
    },
    {
        username: 'abcd',
        password: '123',
    }
];
localStorage.setItem(KEY_USERS, JSON.stringify(users));
const listUser = localStorage.getItem(KEY_USERS) ? JSON.parse(localStorage.getItem(KEY_USERS)) : [];

const btnClickRegister = document.getElementById("regiser_button");
const btnClickLogin = document.getElementById("login_button");

const registerBox = document.getElementById("register_form");
const loginBox = document.getElementById("login_form");

const elUserName_register = document.getElementById("username_register");
const elPassword_register = document.getElementById("password_register");
const btnRegister = document.getElementById("btnRegister");

const elUserName_login = document.getElementById("username_login");
const elPassword_login = document.getElementById("password_login");
const btnLogin = document.getElementById("btnLogin");

// click show form box login, register
btnClickRegister.addEventListener('click', showRegisterBox);
btnClickLogin.addEventListener('click',showLoginBox);

// show form box login, register
function showRegisterBox() {
    loginBox.style.display = 'none';
    registerBox.style.display = 'block';
}
function showLoginBox() {
    registerBox.style.display = 'none';
    loginBox.style.display = 'block';
}

// click login, register
btnRegister.addEventListener('click',onClickRegister);
btnLogin.addEventListener("click", onClickLogin);

// function login, register

function onClickRegister(event) {
    event.preventDefault();
    const user = listUser.find((user) => user.username == elUserName_register.value);
    if ( elUserName_register.value == user.username ) {
        alert('Tai khoan da ton tai');
    }
    else {
        let obj = {
            username: JSON.stringify(elUserName_register),
            password: JSON.stringify(elPassword_register),
        }
        users.push(obj);
        console.log(users);
        localStorage.setItem(KEY_USERS, JSON.stringify(users));
        alert('Dang ki thanh cong');
    }
    
}

function onClickLogin(event) {
  event.preventDefault();
  if (listUser.length > 0) {
    const user = listUser.find((user) => user.username == elUserName_login.value);      
    if (!!user && user.password == elPassword_login.value)
      alert("Dang nhap thanh cong");
    else alert("Sai password hoac khong co tai khoan");
    ///logic phia sau
  }
}
