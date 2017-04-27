alert("lista");
/* QUE TIENE QUE HACER MI PROGRAMA:

- Mostrar las primeras 10 tareas solamente
(ideas? hacer ciclo FOR para recorrer las primeras 10, guardarlas en "algun lugar" darles un id y ponerlas dentro de una lista en html)
- Tareas deben ir en un arreglo y sumar las nuevas ingresadas 
(ideas? ciclo FOR con contador que agregue tareas nuevas)
*/



/* prueba para agregar nuevas tareas que no funciono

function todoList(){
	var task = document.getElementById("todoInput").value
	var text = document.createTextNode(item)
	var newItem = document.createElement("li")
	newItem.appendChild(text)
	document.getElementById("todoList").appendChild(newItem)

}


/*PARA TENER LAS PRIMERAS 10 TAREAS:

- Recorro array para buscar las primeras 10
- .push para agregar cada una de las tareas al arreglo []
*/


var arreglo = [];

var task = document.getElementById("todolist"); 
for (var i = 0; i < 10; i++){
 arreglo.push(arr[i]);
  task.innerHTML += "<li>" + arreglo[i].title + "</li>" + "<br>";//imprime dentro de mi lista los 10 primeros elementos del arreglo

}

/*
    arreglo.forEach(function(element){ 
    	
        
    });*/
 

//PARA INGRESAR NUEVOS VALORES DENTRO DE MI LISTA

function addNewTask(){
    var task = document.getElementById("todolist");
    var add = document.getElementById("todoAdd").value;//para tomar todos los datos que sean ingresados cuando oprimo el boton 
        task.innerHTML += '<li>' + add + '</li>';

}




