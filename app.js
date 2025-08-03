//Declarando las variables
let amigos = [];
let amigo = "";
let lista = document.getElementById("listaAmigos");
let inputAmigo = document.getElementById("amigo");
let resultado = document.getElementById("resultado");

function agregarAmigo(){
    amigo = inputAmigo.value;
    if(amigo != ""){
        amigos.push(amigo);
        actualizarLista();
        inputAmigo.value = "";
    }
    else{
        alert("Por favor, inserte un nombre.");
    }
    
}

function actualizarLista(){
    lista.innerHTML = "";
    resultado .innerHTML = "";
    for(let i=0; i<amigos.length; i++){
        const li_ = document.createElement("li");
        li_.textContent = amigos[i];
        lista.appendChild(li_);
    }    
}

function sortearAmigo(){
    if(amigos.length > 1){
        lista.innerHTML="";
        resultado.innerHTML = "";
        const index = Math.floor(Math.random()*amigos.length);
        const li_ = document.createElement("li");
        li_.textContent = `El amigo secreto sorteado es:  ${amigos[index]}`;
        resultado.appendChild(li_);
    }
    else{
        alert("Aún no se ha ingresado amigos suficientes para el sorteo")
    }
}