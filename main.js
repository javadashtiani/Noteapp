let input = document.querySelector("input");
let noteAdded = document.querySelector(".note-add-box");
let addBtn = document.querySelector("#add");
let eraseBtn = document.querySelector("#eraser");
let colorBox = document.querySelectorAll(".color");
let alertBox = document.querySelector(".alert-box");
input.addEventListener("keyup", (event) => {
  if (event.target.value == "") {
    setTimeout(() => {
      alertBox.classList.add("alert-box-show");
    }, 500);
    setTimeout(() => {
      alertBox.classList.remove("alert-box-show");
    }, 1900);
  } else {
    if (event.keyCode === 13) {
      // Enter Key
      create();
      inputValue();
      focusInput();
      input.style.background = "#374151";
    }
  }
});
//   color box --------------------------------------------------------------------------
colorBox.forEach(function (color) {
  let getBackground = window
    .getComputedStyle(color)
    .getPropertyValue("background");
  color.addEventListener("click", () => {
    input.style.background = getBackground;
  });
});
//Add -----------------------------------------------------------------------------------
addBtn.addEventListener("click", () => {
  if (input.value === "") {
    setTimeout(() => {
      alertBox.classList.add("alert-box-show");
    }, 500);
    setTimeout(() => {
      alertBox.classList.remove("alert-box-show");
    }, 1900);
  } else {
    create();
    inputValue();
    focusInput();
    input.style.background = "#374151";
  }
});

//remove Input ---------------------------------------------------------------------------
eraseBtn.addEventListener("click", () => {
  inputValue();
  focusInput();
  input.style.background = "#374151";
});
// create note -------------------------------------------------------------------------
function create() {
  let createNote = document.createElement("div");
  createNote.innerHTML = input.value;
  createNote.setAttribute("class", "notes");
  createNote.style.background = input.style.background;
  noteAdded.appendChild(createNote);
  //   Remove note--------------------------------------------------------------------------
  let notes = document.querySelectorAll(".notes");
  notes.forEach(function (val) {
    val.addEventListener("click", (e) => {
      e.target.remove();
    });
  });
}

//   function focus
function focusInput() {
  return input.focus();
}
//   function input value " " -------------------------------------------------------------
function inputValue() {
  return (input.value = "");
}
