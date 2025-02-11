// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = []; // Array donde se almacenarán los nombres de los amigos
let lista = document.getElementById("listaAmigos"); // Referencia al elemento donde se muestran los amigos

// Función para agregar un amigo a la lista
function agregarAmigo() {
    let nombre = document.getElementById("amigo").value; // Obtener el valor del campo de texto

    // Validar si el campo está vacío
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    // Agregar el nombre al array
    amigos.push(nombre);

    // Llamar a la función que actualiza la lista en la página
    llamarAmigos();

    // Limpiar el campo de texto
    document.getElementById("amigo").value = "";
}

// Función para actualizar la lista visualmente
function llamarAmigos() {
    // Limpiar la lista actual
    lista.innerHTML = "";

    // Crear y agregar los elementos de la lista
    amigos.forEach(function(amigo) {
        let item = document.createElement("li");
        item.textContent = amigo;
        lista.appendChild(item);
    });
}

// Función para realizar el sorteo
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos disponibles para sortear.");
        return;
    }

    // Generar un índice aleatorio
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obtener el nombre sorteado
    let nombreSorteado = amigos[indiceAleatorio];

    // Mostrar el nombre sorteado en la página
    document.getElementById("resultado").innerHTML = "El amigo sorteado es: " + nombreSorteado;
}
