document.getElementById("agregarFinal").addEventListener("click", function(){
    // Crear un nuevo párrafo
    const parrafo = document.createElement("p");
    //añadir texto al párrafo
    parrafo.textContent = "Este es un nuevo párrafo al final.";
    //añadir el párrafo al contenedor
    document.getElementById("contenedor").appendChild(parrafo);
    //agregar el color de texto del nuevo parrafo sea rojo
    parrafo.style.color = "red";
});

//agregar párrafo al principio
document.getElementById("agregarPpio").addEventListener("click", function(){
    // Crear un nuevo párrafo
    const parrafo = document.createElement("p");
    //añadir texto al párrafo
    parrafo.textContent = "Este es un nuevo párrafo al principio.";
    //añadir el párrafo al contenedor .prepend(parrafo)
    document.getElementById("contenedor").prepend(parrafo);
    //agregar estilos al párrafo texto azul
    parrafo.style.color = "blue";
});

//agregar párrafo en una posición concreta
document.getElementById("agregarPosicion").addEventListener("click", function(){
    // Crear un nuevo párrafo
    const parrafo = document.createElement("p");
    //añadir texto al párrafo
    parrafo.textContent = "Este es un nuevo párrafo en una posición concreta.";
    //añadir el párrafo al contenedor inserBefore
    const contenedor = document.getElementById("contenedor");
    const referencia = contenedor.children[1]; // Cambiar el índice según la posición deseada
    contenedor.insertBefore(parrafo, referencia);
    //agregar estilos color del texto verde
    parrafo.style.color = "green";
});

//eliminar el primer párrafo
document.getElementById("eliminar").addEventListener("click", function(){
    //eliminar el primer párrafo
    const contenedor = document.getElementById("contenedor");
    if (contenedor.firstChild) {
        contenedor.removeChild(contenedor.firstChild);
    }
});

//eliminar todos los párrafos
document.getElementById("eliminarTodos").addEventListener("click", function(){
    //eliminar todos los párrafos
    const contenedor = document.getElementById("contenedor");
    while (contenedor.firstChild) {
        contenedor.removeChild(contenedor.firstChild);
    }
});