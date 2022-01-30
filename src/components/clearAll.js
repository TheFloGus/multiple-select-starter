export default function clearAll(options, clearAllBtn, checkboxes) {
  clearAllBtn.addEventListener("click", () =>
    options.forEach((option, index) => {
      option.selected = false;
      option.classList.remove("selected");
      checkboxes[index].checked = false;
	  document.querySelector('.counter').innerHTML = "Выбрано"
    })
  );
}
