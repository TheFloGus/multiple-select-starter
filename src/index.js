import clickHandler from "./components/clickHandler.js";
import clearAll from "./components/clearAll.js";
import createCheckbox from "./components/createCheckbox.js";
let list = document.getElementById("list");
let options = list.querySelectorAll(".option");
let listContainer = document.querySelector(".list-container");

clickHandler(list);

options.forEach((option) => {
  option.selected && option.classList.add("selected");
});

list.insertAdjacentHTML("afterend", `<div class="checkboxes"></div>`);
listContainer.insertAdjacentHTML(
  "afterend",
  `<button class="clear-all">Clear All</button>`
);
let clearAllBtn = document.querySelector(".clear-all");
let checkboxesParent = document.querySelector(".checkboxes");

createCheckbox(checkboxesParent, options);

let checkboxes = document.querySelectorAll(".check");

clearAll(options, clearAllBtn, checkboxes);

for (let i = 0; i < checkboxes.length; i++) {
  if (options[i].selected) {
    checkboxes[i].checked = true;
  }
}
