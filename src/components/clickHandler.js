import counter from "./counter.js";

export default function clickHandler(list, options, checkboxes, checkboxesParent, id) {
  list.addEventListener("click", (e) => {
    if (e.target === options[0]) {
      options.forEach((option, index) => {
        option.classList.add("selected");
        checkboxesParent.querySelectorAll(".check")[index].checked = true;
        counter(options, id);
      });
    } else if (e.target.tagName === "OPTION") {
      e.target.selected ? false : true;
      e.target.classList.toggle("selected");
      document.getElementById(e.target.value).checked =
        !document.getElementById(e.target.value).checked;
      counter(options, id);
	  for (let i = 0; i < options.length; i++) {
		if (options[i].classList.contains("selected")) {
		  options[0].classList.remove("selected");
		  checkboxes[0].checked = false;
		}
	  }

    }
  });

}
