function agregarTarea() {
    // Obtener los valores de nombre y detalle de la tarea
    var nuevaTareaNombre = document.getElementById("nuevaTareaNombre").value;
    var nuevaTareaDetalle = document.getElementById("nuevaTareaDetalle").value;

    // Validar que ambos campos no estén vacíos
    if (nuevaTareaNombre.trim() !== "" && nuevaTareaDetalle.trim() !== "") {
        // Crear elementos de lista con nombre y detalle de la tarea
        var nuevaTareaNombreElemento = document.createElement("li");
        nuevaTareaNombreElemento.textContent = "Nombre: " + nuevaTareaNombre;
        nuevaTareaNombreElemento.classList.add("Nombre_Tarea", "ListaDesordenada"); // Agregar clase Nombre

        var nuevaTareaDetalleElemento = document.createElement("li");
        nuevaTareaDetalleElemento.textContent = "Detalle: " + nuevaTareaDetalle;
        nuevaTareaDetalleElemento.classList.add("Detalle_Tarea", "ListaDesordenada"); // Agregar clase Detalle

        // Crear un elemento de lista que contendrá la tarea
        var listaTareas = document.createElement("ul");
        listaTareas.classList.add("Contenedor_Tarea_Inferior");

        // Crear un elemento de lista que contendrá el checkbox
        var checkboxElemento = document.createElement("li");

        // Crear el elemento de checkbox
        var checkbox = document.createElement("input");
        checkbox.type = "checkbox";

        // Agregar el checkbox al elemento de lista
        checkboxElemento.appendChild(checkbox);

        // Agregar los elementos de la tarea y el checkbox a la lista
        listaTareas.appendChild(checkboxElemento);
        listaTareas.appendChild(nuevaTareaNombreElemento);
        listaTareas.appendChild(nuevaTareaDetalleElemento);

        // Agregar la lista al contenedor de tareas
        var contenedorTarea = document.getElementById("ContenedorTarea");
        contenedorTarea.appendChild(listaTareas);

        // Limpiar los campos de texto después de agregar la tarea
        document.getElementById("nuevaTareaNombre").value = "";
        document.getElementById("nuevaTareaDetalle").value = "";
    }
}
