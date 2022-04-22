"use strict";

const submit = document.querySelector(".submit");
const confirmWindow = document.querySelector(".confirm");
const currentRate = document.querySelector(".currentRate");

let valueChecked = function () {
  return document.querySelector('input[name="rateGroup"]:checked');
};

submit.addEventListener("click", function () {
  if (valueChecked() !== null) {
    confirmWindow.classList.remove("hidden");

    currentRate.textContent = `You selected ${valueChecked().value} out of 5`;
  } else {
    alert("Please rate before submit");
  }
});
