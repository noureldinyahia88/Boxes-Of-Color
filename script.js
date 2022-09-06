const contianer = document.getElementById('container')
const squares = 10000

for(let i=0; i<squares; i++) {
	const squre = document.createElement('div')
	squre.classList.add('square')
	
	squre.addEventListener('mouseover',() => addcolor(squre))
	squre.addEventListener('mouseout',() => removecolor(squre))

	contianer.appendChild(squre)
}
function addcolor(element) {
	const colors = randomColor()
	element.style.background = colors
	element.style.boxShadow = `0 0 2px ${colors}, 0 0 10px ${colors}`
}
function removecolor(element) {
	element.style.background = '#1d1d1d';
	element.style.boxShadow = '0 0 2px #000'
}
function randomColor() {
	let hexArray = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]
	let colorparts = [];

	for(let i=0; i<6; i++){
		colorparts.push(hexArray[Math.floor(Math.random() * hexArray.length)])
	}
	return `#${colorparts.join("")}`;

}