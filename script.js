// Obtenemos los elementos HTML que necesitamos
const campoTarea = document.getElementById("tarea");
const botonAgregar = document.getElementById("btnAgregar");
const listaTareas = document.getElementById("listaTareas");

// Cuando pulsamos el botón, ejecutamos esta función
botonAgregar.addEventListener("click", function () {

    // Obtenemos el texto escrito por el usuario
    const texto = campoTarea.value.trim();

    // Comprobamos que no esté vacío
    if (texto === "") {
        alert("Debes escribir una tarea.");
        return;
    }

    // Creamos un nuevo elemento de lista
    const nuevaTarea = document.createElement("li");

    // Añadimos el texto de la tarea
    nuevaTarea.textContent = texto;

    // Cuando hacemos clic en una tarea,
    // la marcamos como completada
    nuevaTarea.addEventListener("click", function () {
        nuevaTarea.classList.toggle("completada");
});

    // Añadimos la tarea a la lista
    listaTareas.appendChild(nuevaTarea);

    // Limpiamos el campo de texto
    campoTarea.value = "";
});