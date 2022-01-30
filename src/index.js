import clickHandler from "./components/clickHandler.js";
import clearAll from "./components/clearAll.js";
import createCheckbox from "./components/createCheckbox.js";
import counter from "./components/counter.js";

let listContainers = document.querySelectorAll(".list-container");

function App(listContainer, index) {
  let list = listContainer.querySelector("#list");
  let options = list.querySelectorAll(".option");

  options.forEach((option) => {
    option.selected && option.classList.add("selected");
  });

  list.insertAdjacentHTML("afterend", `<div class="checkboxes"></div>`);
  listContainer.insertAdjacentHTML(
    "afterend",
    `<div class="bottom__buttons">
	<button type="button" class="accept">Принять</button>
  	<button class="clear-all" id="clear${index}">Очистить</button>
  </div>`
  );

  listContainer.insertAdjacentHTML(
    "beforebegin",
    `<div class="header">
    <div class="header__title">
	  <h2>Товары</h2>
	  <span class="counter" id="counter${index}">Выбрано</span>
    </div>
</div>`
  );

  counter(options, index);

  let clearAllBtn = document.getElementById("clear" + index);
  let checkboxesParent = listContainer.querySelector(".checkboxes");

  createCheckbox(checkboxesParent, options, index);

  let checkboxes = checkboxesParent.querySelectorAll(".check");

  clickHandler(list, options, checkboxes, checkboxesParent, index);

  clearAll(options, clearAllBtn, checkboxes);

  for (let i = 0; i < checkboxes.length; i++) {
    if (options[i].selected) {
      checkboxes[i].checked = true;
    }
  }
}
listContainers.forEach((listContainer, index) => App(listContainer, index));
