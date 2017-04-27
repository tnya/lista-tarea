
/* QUE TIENE QUE HACER MI PROGRAMA:

- Mostrar las primeras 10 tareas solamente
(ideas? hacer ciclo FOR para recorrer las primeras 10, guardarlas en "algun lugar" darles un id y ponerlas dentro de una lista en html)
- Tareas deben ir en un arreglo y sumar las nuevas ingresadas 
(ideas? ciclo FOR con contador que agregue tareas nuevas)
*/

/*PARA TENER LAS PRIMERAS 10 TAREAS:

- Recorro array para buscar las primeras 10
- .push para agregar cada una de las tareas al arreglo []
*/





//PARA AGREGAR TAREAS NUEVAS 

function todoList(){
	var task = document.getElementById("todoInput").value
	var text = document.createTextNode(item)
	var newItem = document.createElement("li")
	newItem.appendChild(text)
	document.getElementById("todoList").appendChild(newItem)

}







