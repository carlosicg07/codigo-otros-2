
var formulario = document.querySelector(".formulario"); //Changed #form to .formulario
var btnEnviar = document.getElementById("btnEnviar"); //Added var btnEnviar

btnEnviar.addEventListener("click", function(event){ //Added addEventListener
  event.preventDefault();

  //Moved variables:
  var n = formulario.elements[0]; //Add elements to formulario
  var e = formulario.elements[1];
  var na = formulario.elements[2];

  var nombre = n.value; //Take input values and save them in variables
  var edad = e.value; 
  var i = na.selectedIndex; //selectedIndex is a method

  var nacionalidad = na.options[i].value //Take the i value chosen and save it 

  //console.log("funciona"); //Used to verify function
  //console.log(nombre, edad);
  //console.log(nacionalidad);

  //Moved if:
  if (nombre.length > 0 && (edad > 18 && edad < 120) ) { //If is true implements the function
    agregarInvitado(nombre, edad, nacionalidad)
  }//if nombre
});//btnEnviar

formulario.onSubmit = function(event) { //Modified e to event

  event.prevent(); //Modified e to event
  
  //Added Commets:
  // var n = formulario.elements[0];
  // var e = formulario.elements[1];
  // var na = formulario.elements[2];
  // var nombre = n.value; 
  // var edad = e.value; 
  // var i = na.selectedIndex;
  // var nacionalidad = na.options[i].value
  // console.log(nombre, edad);
  // console.log(nacionalidad);

  if (nombre.length === 0) {
    n.classList.add("error")
  }//if nombre
  if (edad < 18 || edad > 120) {
    e.classList.add("error")
  }//if edad

  //Added Commets:
// if (nombre.length > 0 && (edad > 18 && edad < 120) ) {
//   agregarInvitado(nombre, edad, nacionalidad)
//   }//if nombre
};//function event

var botonBorrar = document.createElement("button"); //Create DOM
botonBorrar.textContent = "Eliminar invitado";
botonBorrar.id = "boton-borrar";
var corteLinea = document.createElement("br");
document.body.appendChild(corteLinea); //Add children
document.body.appendChild(botonBorrar);

function agregarInvitado(nombre, edad, nacionalidad) {

  if (nacionalidad === "ar") {
    nacionalidad = "Argentina"
  }//if
  else if (nacionalidad === "mx") {
    nacionalidad = "Mexicana"
  }//else if
  else if (nacionalidad === "vnzl") {
    nacionalidad = "Venezolana"
  }//else if
  else if (nacionalidad === "per") {
    nacionalidad = "Peruana"
  }//else if

  var lista = document.getElementById("lista-de-invitados"); //Parent

  var elementoLista = document.createElement("div"); //child
  elementoLista.classList.add("elemento-lista");//Changed added to add
  lista.appendChild(elementoLista); //Add Child

  //DUPLICATED:
  // var spanNombre = document.createElement("span");
  // var inputNombre = document.createElement("input");
  // var espacio = document.createElement("br");
  // spanNombre.textContent = "Nombre: ";
  // inputNombre.value = nombre ;
  // elementoLista.appendChild(spanNombre);
  // elementoLista.appendChild(inputNombre);
  // elementoLista.appendChild(espacio);

  function crearElemento(descripcion, valor) { //Create DOM (Lista de invitados)
    var spanNombre = document.createElement("span");
    var inputNombre = document.createElement("input");
    var espacio = document.createElement("br");
    spanNombre.textContent = descripcion + ": "
    inputNombre.value = valor; 
    elementoLista.appendChild(spanNombre);
    elementoLista.appendChild(inputNombre);
    elementoLista.appendChild(espacio);
  }//function crearElemento

  crearElemento("Nombre", nombre);
  crearElemento("Edad", edad);
  crearElemento("Nacionalidad", nacionalidad);

  //Duplicated Button:
  // var botonBorrar = document.createElement("button");
  // botonBorrar.textContent = "Eliminar invitado";
  // botonBorrar.id = "boton-borrar";
  // var corteLinea = document.createElement("br");
  // elementoLista.appendChild(corteLinea);
  // elementoLista.appendChild(botonBorrar);

  botonBorrar.onclick = function() {
    //this.parentNode.style.display = 'none';
    // if(elementoLista.parentNode) {
    //   elementoLista.removeChild(elementoLista);
    // }

    if(lista.parentNode) { //Added if
      lista.removeChild(lista.lastChild); //Modified node
    }
  };//function() botonBorrar
};//function agregarInvitado

//Added ; every row