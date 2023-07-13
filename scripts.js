

            

let cuadrados=document.querySelectorAll(".square");//cuadrados
let colors=generateRandomColors(6); // generando 6 colores random
let pickedColor=pickColor()//color elegido al azar en el array
let colorDisplay=document.querySelector("#colorDisplay")
colorDisplay.textContent=pickedColor.toUpperCase()//se guarda el valor de pickedColor en la var colorDisplay
let clickedColor//cuadrados que al ser iterados se selecciona uno
let mensaje=document.querySelector("#message")//mensaje en el stripe 
let resetear=document.querySelector("#reset")//guardamos el boton reset en var
let modo = document.querySelectorAll(".modo");
modo[1].classList.add("selected")
let numberOfSquares = 6;

init()//inicializa el juego 

function init(){
	for(let i=0;cuadrados.length>i;i++){
		cuadrados[i].style.backgroundColor=colors[i]//a cada cuadrado se le da un bg
		cuadrados[i].addEventListener("click", function(){
			clickedColor=this.style.backgroundColor
			console.log(clickedColor)
			if(clickedColor==pickedColor){
				mensaje.textContent="¡Correcto!"
				resetear.textContent="jugar de nuevo"
				document.querySelector("h1").style.backgroundColor=clickedColor//le da color al fondo del header
				changeColors(clickedColor)//llama a la funcion dando como argumento clickedColor
			}else{
				mensaje.textContent="Intentalo Nuevamente"
				this.style.transition = "background-color 1s";
				this.style.backgroundColor = "black"
				
			}
		})
	}
}

function changeColors(color){
	for (var i = 0; i < cuadrados.length; i++) {//itera los cuadrados
		cuadrados[i].style.backgroundColor = color//le da el color del argumento a todos los cuadrados
	}
}

function pickColor(){
    let randomIndex = Math.floor(Math.random() * colors.length) // genera un numero aleatorio entre 0 y el tamaño del arreglo colors
    return colors[randomIndex] // retorna el color en la posición correspondiente al índice generado aleatoriamente
}

function generateRandomColors(num){//genera un array de colores random, num indica que cantidad de colores genera
	var array=[]
	for (let i = 0; i<num ; i++) {
	  array.push(randomColor())//en cada iteración del ciclo, se agrega un nuevo color random al arreglo. se llama a la función randomColor
	}
	return array
}

function randomColor(){//compone un color donde cada componente(rgb)es aleatorio
	var r=Math.floor(Math.random()*256)
	var b=Math.floor(Math.random()*256)
	var g=Math.floor(Math.random()*256)
	return "rgb("+r+", "+g+", "+b+")"

}
//Añadir un event listener al botón "#reset" para que cuando se haga click, se llame a la función "reset()".
resetear.addEventListener("click", reset);
//Crear la función "reset()", que generará nuevos colores, elegirá un nuevo color ganador, cambiará el texto en "#colorDisplay", cambiará los colores de los cuadrados y reseteará los mensajes y el botón
function reset() {
	colors = generateRandomColors(numberOfSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor.toUpperCase();
	for (let i = 0; i < cuadrados.length; i++) {
	  if (colors[i]) {
		cuadrados[i].style.backgroundColor = colors[i];
		cuadrados[i].style.display = "block";
	  } else {
		cuadrados[i].style.display = "none";
	  }
	}
	resetear.textContent = "Nuevos Colores";
	mensaje.textContent = "";
	document.querySelector("h1").style.backgroundColor = "steelblue";
  }
//Añadir un event listener al botón "#reset" para que, cuando el usuario haga click y el texto del botón sea "jugar de nuevo", se llame a la función "reset()


resetear.addEventListener("click", function () {
	if (resetear.textContent === "jugar de nuevo") {
	  reset();
	} else {
	  generateRandomColors();
	  init();
	  pickedColor = pickColor();
	  document.querySelector("h1").style.backgroundColor = "steelblue";
	}
});

function modoSeleccionado(boton, num) {
	modo[0].classList.remove("selected");
	modo[1].classList.remove("selected");
	boton.classList.add("selected");
	numberOfSquares = num;
	reset();
	for (let i = 0; i < cuadrados.length; i++) {
	  if (i < num) {
		cuadrados[i].style.display = "block";
	  } else {
		cuadrados[i].style.display = "none";
	  }
	}
}

modo[0].addEventListener("click", function() {
	modoSeleccionado(this, 3);//modo facil muestra 3 cuadrados
  });
  
modo[1].addEventListener("click", function() {
	modoSeleccionado(this, 6);//modo dificil muestra los 6 cuadrados
  });
  
  
  
  
  
  
  
  



