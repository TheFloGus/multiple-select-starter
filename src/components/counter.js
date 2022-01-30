export default function counter(options, id){
	let counterText = document.getElementById("counter"+id)
	let counter = 0;
	options.forEach((option, index)=>{
		if(option.classList.contains("selected") && index !== 0){
			counter++
		}
	})
	if(counter>0){
	counterText.innerText = `Выбрано(${counter})`
	} else {
		counterText.innerText = `Выбрано`
	}
	
}