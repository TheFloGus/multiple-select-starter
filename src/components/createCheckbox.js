export default function createCheckbox(checkboxesParent, options) {
  for (let i = 0; i < options.length; i++) {
    checkboxesParent.insertAdjacentHTML(
      "beforeend",
      `<input type="checkbox" class="check" name="check" id="${options[i].value}">
		  <label class="checkbox" for="${options[i].value}"></label>
		  `
    );
  }

  checkboxesParent.addEventListener("change", (e) => {
    if (e.target.tagName === "INPUT" || e.target.tagName === "LABEL") {
      options.forEach((option) => {
        if (option.value === e.target.id) {
          option.selected = e.target.checked;
          option.classList.toggle("selected");
        }
      });
    }
  });
}
