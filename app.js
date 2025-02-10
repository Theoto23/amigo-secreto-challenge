// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
let lista = document.getElementById("listaAmigos");

function llamarAmigos (){
    lista.innerHTML = "";
for (let i = 0 ; i < amigos.length; i++ ){
    let item = document.createElement ("li");
    item.textContent = amigos[i];
    lista.appendChild(item);
};


}
