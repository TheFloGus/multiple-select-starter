let list = document.getElementById("list");
let options = list.querySelectorAll(".option");

options.forEach((option) => {
  option.selected && option.classList.add("selected");
});

list.addEventListener("click", (e) => {
  if (e.target.tagName === "OPTION") {
    e.target.selected ? false : true;
    console.log(e.target.selected);
    e.target.classList.toggle("selected");
    document.getElementById(e.target.value).checked = !document.getElementById(
      e.target.value
    ).checked;
  }
});

list.insertAdjacentHTML(
  "afterend",
  `<button class="clear-all">Clear All</button>
  <div class="checkboxes"></div>`
);
let clearAllBtn = document.querySelector(".clear-all");
let checkboxesParent = document.querySelector(".checkboxes");
clearAllBtn.addEventListener("click", () =>
  options.forEach((option, index) => {
    option.selected = false;
    option.classList.remove("selected");
    checkboxes[index].checked = false;
  })
);

for (let i = 0; i < options.length; i++) {
  checkboxesParent.insertAdjacentHTML(
    "beforeend",
    `<input type="checkbox" class="check" name="check" id="${options[i].value}">
	<label class="checkbox" for="${options[i].value}"></label>
	`
  );
}

let checkboxes = document.querySelectorAll(".check");

for (let i = 0; i < checkboxes.length; i++) {
  if (options[i].selected) {
    checkboxes[i].checked = true;
  }
}

checkboxesParent.addEventListener("change", (e) => {
  if (e.target.tagName === "INPUT" || e.target.tagName === "LABEL") {
    options.forEach((option) => {
      if (option.value === e.target.id) {
        option.selected = e.target.checked;
		option.classList.toggle("selected")
      }
    });
  }
});
