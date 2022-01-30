export default function clickHandler(list){
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
}