const KEY_USERS = "users";
let users = [];
users = [...users];
let addUser = {
  username: "",
  email: "",
  password: "",
};

const listUser = localStorage.getItem(KEY_USERS) ? JSON.parse(localStorage.getItem(KEY_USERS)) : [];

const btnClickRegister = document.getElementById("register_button");
const btnClickLogin = document.getElementById("login_button");

const registerBox = document.getElementById("register_form");
const loginBox = document.getElementById("login_form");

const elUserName_register = document.getElementById("username_register");
const elEmail_register = document.getElementById("email_register");
const elPassword_register = document.getElementById("password_register");
const elRePassword_register = document.getElementById("re_password_register");
const btnRegister = document.getElementById("btnRegister");

const elUserName_login = document.getElementById("username_login");
const elPassword_login = document.getElementById("password_login");
const btnLogin = document.getElementById("btnLogin");

// click show form box login, register
btnClickRegister.addEventListener("click", showRegisterBox);
btnClickLogin.addEventListener("click", showLoginBox);

// show form box login, register
function showRegisterBox() {
  loginBox.style.display = "none";
  registerBox.style.display = "block";
  elUserName_register.style.margin = "10px 0 10px 0";
  elEmail_register.style.margin = "10px 0 10px 0";
  elPassword_register.style.margin = "10px 0 10px 0";
  elRePassword_register.style.margin = "10px 0 10px 0";
}
function showLoginBox() {
  registerBox.style.display = "none";
  loginBox.style.display = "block";
  elUserName_login.style.margin = "45px 0 45px 0";
  elPassword_login.style.margin = "45px 0 38px 0";
}

// click login, register
btnRegister.addEventListener("click", onClickRegister);
btnLogin.addEventListener("click", onClickLogin);

// function login, register

function onClickRegister(event) {
  event.preventDefault();
  // check username
  if (listUser.length >= 0) {
    const user = listUser.find((user) => user.username == elUserName_register.value);
    const checkEmail = listUser.find((checkEmail) => checkEmail.email == elEmail_register.value);
    if (!!user) {
      // existed username
      alert("Tai khoan da ton tai");
      return;
    } else if (!!checkEmail) {
      // existed email
      alert("Email da ton tai");
      return;
    } else if (elUserName_register.value == "" || elEmail_register.value == "" || elPassword_register.value == "" || elRePassword_register.value == "") {
      alert("Vui long dien day du thong tin");
    } else if (elPassword_register.value != elRePassword_register.value) {
      // wrong re_password
      alert("Mat khau khong trung khop");
      return;
    } else {
      // success sign up
      addUser = {
        ...addUser,
        username: elUserName_register.value,
        email: elEmail_register.value,
        password: elPassword_register.value,
      };
      listUser.push(addUser);
      alert("Dang ki thanh cong");
    }
    // push to localStorage
    localStorage.setItem(KEY_USERS, JSON.stringify(listUser));
  }
}

function onClickLogin(event) {
  event.preventDefault();
  const checkListUser = localStorage.getItem(KEY_USERS) ? JSON.parse(localStorage.getItem(KEY_USERS)) : [];
  if (checkListUser.length > 0) {
    // check username
    const user = checkListUser.find((user) => user.username == elUserName_login.value);
    // success login
    if (!!user && user.password == elPassword_login.value) {
      alert("Dang nhap thanh cong");
    }
    // fail login
    else {
      alert("Sai password hoac khong co tai khoan");
    }
  }
  return;
}
