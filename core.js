
let loopID = 0

/**
 * Carga una imagen en el div moodIMG
 *
 * @param {string} imageURI ruta de la imagen.
 */
function loadImageTag(imageURI){
	const imageTag = document.getElementById("moodIMG")
	imageTag.setAttribute("src", imageURI)
}

/**
 * Muestra los datos de un vPet en el div vPetData
 * 
 * @param {vPet} vPetInstance Instancia de vPet que contiene todos
 * los datos a mostrar.
 */
function showData(vPetInstance = new vPet()){
	loadImageTag("sunglasses.png")
	let dataDiv = document.getElementById("vPetData")
	dataDiv.innerHTML = ""
	let vPetData = vPetInstance.toJson()
	for (let field of Object.keys(vPetData)){
		let node = document.createElement("p")
		node.innerHTML = `${field}: ${vPetData[field]}`
		dataDiv.appendChild(node)
	}
}

function mainLoop(){
	console.log("Empieza el loop")
	console.log("Termina el loop")
}

function runLoop(){
	loopID = setInterval(mainLoop, 1000)
	document.getElementById("runLoop").style.disabled = true
}

function stopLoop(){
	clearInterval(loopID)
}

/**
 * 
 */
class vPet{
	/**
	 * 
	 */
	constructor(){
		this.name = "vPet"
		this.bornDate = new Date()
		this.bornDisplay = this.bornDate.toLocaleDateString('es-ES')
		this.hp = 10
		this.food = 10
		this.fun = 10
		this.clean = 10
	}
	/**
	 * 
	 * @returns {object} Objeto con las claves relativas a la información de la instancia.
	 */
	toJson(){
		return {
			"Nacimiento": this.bornDisplay,
			"HP": this.hp,
			"Comida": this.food,
			"Diversion": this.fun,
			"Limpieza": this.clean
		}
	}
	/**
	 * 
	 * @param {Food} food 
	 */
	eat(food = new Food("Algo", 0.1)){
		console.log(`${this.name} ha comido ${food.name}`)
		this.food += food.value
	}
	/**
	 * 
	 */
	clean(){
		console.log(`${this.name} se ha limpiado`)
		this.clean += 1
	}
}

class Food{
	constructor(name, quality){
		this.name = name
		this.quality = quality
		this.baseValue = 10
		this.value = 10*this.quality
	}
}