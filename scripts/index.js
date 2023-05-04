"use strict";
window.onload = init;
function init() {
  const addBtnEl = document.getElementById("addBtn");
  onAddBtnClicked.onclick = onAddBtnClicked;
}
const number1 = document.getElementById("number1Field");
const number2 = document.getElementById("number2Field");
const answer = document.getElementById("answerField");

const number1El = Number(number1Field.value);
const number2El = Number(number2Field.value);
const answerEl = Number(number1Field + number2Field);
function onAddBtnClicked() {
  const answer = number1Field.value + number2Field.value;
  answerField.value = answer;
}
