function completar_tarea (){

    //Estoy llamando a todos los elementos de la clase icono
    //return: check[]

    let checks = document.querySelectorAll(".ico")

    checks.forEach(function(check,indice) {
        check.addEventListener("click", function(){

            let num = ".tareas" + indice;
            let tarea = document.querySelector(num);

            tarea.classList.add("tachar");

        })
    });

}
