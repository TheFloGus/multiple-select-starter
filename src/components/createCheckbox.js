import counter from "./counter.js";

export default function createCheckbox(checkboxesParent, options) {
  for (let i = 0; i < options.length; i++) {
    checkboxesParent.insertAdjacentHTML(
      "beforeend",
      `<input type="checkbox" class="check" name="check" id="${options[i].value}">
		  <label class="checkbox" for="${options[i].value}"></label>
		  `
    );
  }
  let inputs = document.querySelectorAll(".check");
  checkboxesParent.addEventListener("change", (e) => {
    if (e.target === inputs[0]) {
      options.forEach((option, index) => {
        option.classList.add("selected");
        inputs[index].checked = true;
        counter(options);
      });
    } else if (e.target.tagName === "INPUT" || e.target.tagName === "LABEL") {
      options.forEach((option) => {
        if (option.value === e.target.id) {
          option.selected = e.target.checked;
          option.classList.toggle("selected");
          counter(options);
          for (let i = 0; i < options.length; i++) {
            if (options[i].classList.contains("selected")) {
              options[0].classList.remove("selected");
              inputs[0].checked = false;
              console.log("nice");
            }
          }
        }
      });
    }
  });
}
