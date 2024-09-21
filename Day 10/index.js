const changeStyle = document.getElementsByClassName("titleH1");
let isChange = false;
const buttonChange = document.getElementsByClassName("btnClick");
function changeClick() {
  isChange = !isChange;
  changeStyle[0].textContent = isChange ? "Đây là nội dung" : "This is content";
  changeStyle[0].style.color = isChange ? "red" : "black";
  changeStyle[0].style.backgroundColor = isChange ? "blue" : "white";
  changeStyle[0].classList.add("changeStyle");
}

buttonChange[0].addEventListener("click", changeClick);
const getContent = document.getElementById("addText");
const changeContent = document.getElementsByTagName("p");
const elBtnAdd = document.getElementById("btn");
const listTask = [];
const ARRAY_CONTENT_STORAGE = "ARRAY";

function render() {
  if (JSON.parse(localStorage.getItem(ARRAY_CONTENT_STORAGE)).length >= 1) {
    for (let i = 0; i < JSON.parse(localStorage.getItem(ARRAY_CONTENT_STORAGE)).length; i++) {
      let inputCheckBox = document.createElement("input");
      inputCheckBox.setAttribute("type", "checkbox");
      let newP = document.createElement("p");
      newP.style.display = "inline";
      newP.textContent = JSON.parse(localStorage.getItem(ARRAY_CONTENT_STORAGE))[i];
      document.body.appendChild(inputCheckBox);
      document.body.appendChild(newP);
      document.body.appendChild(document.createElement("br"));
    }
  }
}
render();
function addContent() {
  changeContent.textContent = getContent.value;
  listTask.push(changeContent.textContent);
  localStorage.setItem(ARRAY_CONTENT_STORAGE, JSON.stringify(listTask));
  let inputCheckBox = document.createElement("input");
  inputCheckBox.setAttribute("type", "checkbox");
  let newP = document.createElement("p");
  newP.style.display = "inline";
  newP.textContent = getContent.value;
  document.body.appendChild(inputCheckBox);
  document.body.appendChild(newP);
  document.body.appendChild(document.createElement("br"));
}
