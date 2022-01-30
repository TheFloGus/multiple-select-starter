export default function counter(options){
	let counterText = document.querySelector('.counter')
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