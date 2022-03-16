const numero = document.querySelectorAll(".number");
const operaciones = document.querySelectorAll(".op");
const borrarTodo = document.querySelector(".delete");
const borrar = document.querySelector(".arrow");
var pantalla = document.getElementById("input");
var opActual = '';
var opAnterior = '';
var op = undefined;


numero.forEach( (boton) => {
    
  boton.addEventListener('click' , () => {
    
    agregarNumero(boton.innerHTML);
    actualizarDisplay();  
  })
    
})

  
function agregarNumero(num) {
    
    opActual = opActual.toString() + num.toString();
    
}

function actualizarDisplay() {
    
    pantalla.value = opActual;
    
}