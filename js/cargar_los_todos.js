import {item_component} from "./item_component.js"
import { data_list } from "./data.js";


// FUNCIÓN PARA IMPRIMIR LA LISTA DE TAREAS
function imprimir_todos(){
    let caja_todo_list = (document.querySelector(".todo_list"));


    //PARA DOS PARAMETROS SE CIERRAN ENTRE PARENTESIS
    data_list.forEach((element, indice) => {
        let todo = document.createElement("div");
        todo.innerHTML = item_component(indice); // item es un método que vive en otra hoja, con paremtesis se vuelve funcion * indice = elemnt.id
        caja_todo_list.appendChild(todo)



    });
}
export {imprimir_todos};



// MANIPULANDO EL DOM
// todo_list.innerHTML = item + item + item + item + item + item + item;

// FUNCIÓN PARA IMPRIMIR LA LISTA DE TAREAS
//(REFERENCIA CON EL DOM) 
// alert("hola soy función") - Sirve para dar alerta y verificar si funciona
// Creacion para cerrar ventana:

