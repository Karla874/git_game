let azar = ["Piedra","Papel","Tijeras"];

function getComputerChoice() {
	let max = 2;
	let min = 0;
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

let human = 99
let humanScore = 0;
let computadoraScore = 0;
let contador = 0;
let imagen = document.createElement('img');

function playGround() {
	let computadora = getComputerChoice();
	let mensaje = azar[human]+" Vs "+azar[computadora];
	
	if (human == computadora) {
		mensaje = mensaje + " = ¡EMPATE!";
	} else if ((human == 0 && computadora == 2) || (human == 1 && computadora == 0) || (human == 2 && computadora == 1)) {
		mensaje = mensaje + " = ¡GANASTE!";
		humanScore++;
	} else {
		mensaje = mensaje + " = ¡PERDISTE!";
		computadoraScore++;
	}
	
	//console.log("Contador humano: "+humanScore+" — "+ "Contador computadora: "+computadoraScore);
	const ninin = document.querySelector(".ninja");
	const mostrarM = document.querySelector(".mensajes");
	const mostrar = document.querySelector(".resultados");
	
	ninin.setAttribute("style", "display: block;");
	
	mostrarM.textContent = mensaje;
	mostrar.textContent = "Contador humano: "+humanScore+" — "+ "Contador computadora: "+computadoraScore;
	
	human = 99;
}

function finalMatch() {
	const ninin2 = document.querySelector(".ninja2");
	const mostrar2 = document.querySelector(".resultados2");
	const selectorui = document.querySelector("#ui2");
	
	if (contador == 5) {
		let mensajeFinal = "";
		if (humanScore > computadoraScore) {
			mensajeFinal = "Human is the GOAT!!";
			imagen.src = "https://miro.medium.com/v2/resize:fit:1280/0*OrGjSxNCOe8trpJ6.jpg";
		} else if (humanScore < computadoraScore) {
			mensajeFinal = "We're all screwed. The IA is gonna take the world, GG."
			imagen.src = "https://media.tenor.com/5HxmzW4g67EAAAAM/futurama-bender.gif";
		} else {
			mensajeFinal = "A tie? Dishonour on your cow!!"
			imagen.src = "https://media.tenor.com/V2CTmrxLRdQAAAAM/disney-mulan.gif";
		}
		selectorui.appendChild(imagen);
		
		contador = 0;
		humanScore = 0;
		computadoraScore = 0;
		
		ninin2.setAttribute("style", "display: block;");
		mostrar2.setAttribute("style", "display: block;");
		mostrar2.textContent = mensajeFinal;
	}
	if (contador == 1) {
		ninin2.setAttribute("style", "display: none;");
		mostrar2.setAttribute("style", "display: none;");
		imagen.src = "";
	}
}

document.addEventListener('DOMContentLoaded', function() {
	document.getElementById('piedra').addEventListener('click', function() {
		human = 0;
		//console.log("Elegiste piedra!");
		playGround();
		contador++;
		finalMatch();
	});
	document.getElementById('papel').addEventListener('click', function() {
		human = 1;
		//console.log("Elegiste papel!");
		playGround();
		contador++;
		finalMatch();
	});
	document.getElementById('tijeras').addEventListener('click', function() {
		human = 2;
		//console.log("Elegiste tijeras!");
		playGround();
		contador++;
		finalMatch();
	});
});