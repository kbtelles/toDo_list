import {data_list} from "./data.js"


//Se quita el export y se convierte en función.
export function item_component(numero_tareas){
    let item = `
    <div class="todo_item"> <!--Primer to do list-->
        <span class="ico" >☑️</span>  <!--Texto especial-->
            <p class="tareas${numero_tareas}" >
            ${data_list[numero_tareas].mensaje}
            </p> <!--Descripción-->
        <span class="icono2">X</span>  <!--Texto especial-->
    </div>
    `

    return item // Para que sea una funcion que pueda retornar y se encierren las cosas que se quieran devolver
}


