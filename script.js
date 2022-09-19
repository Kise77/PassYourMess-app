"use strict"

const inputEl = document.querySelector(".input-area");
const textBoxEl = document.querySelector(".text-box");
const resetBtnEl = document.querySelector(".reset-btn")
let arr = [];

// Writing Text Zone Functionnality
inputEl.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    // Condition to not exceed text zone
    if (arr.length < 13 && inputEl.value !== "") {
      const newText = document.createElement("div")
      textBoxEl.appendChild(newText);
      newText.textContent = inputEl.value;
      arr.push(inputEl.value);
      console.log(arr);
      inputEl.value = "";
    }
  }
});

// Reset button
resetBtnEl.addEventListener("click", function () {
  textBoxEl.textContent = "";
  arr = [];
  inputEl.value = "";

  //window.location.reload() also possible
});


