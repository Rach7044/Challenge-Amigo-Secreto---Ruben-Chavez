let amigos=[];

function agregarAmigo() {
    let nombreAmigo=document.getElementById("amigo").value;
    if (nombreAmigo=="") {
        alert("Por favor, inserte un nombre")
    } else {
        amigos.push(nombreAmigo);
        limpiarCaja();   
        mostrarAmigos();   
    }
    return;
}

function limpiarCaja(){
    document.querySelector("#amigo").value="";
}

function mostrarAmigos() {
    let lista=document.getElementById("listaAmigos");
    lista.innerHTML="";
    for (let pos=0;pos<amigos.length;pos++) {
        lista.innerHTML+=`<li>${amigos[pos]}</li>`;
    }
}
mostrarAmigos()

function sortearAmigo(){
    if (amigos.length==0) {
        alert("Debe de agregar un amigo.");
        return;
    }
    let indiceAleatorio=Math.floor(Math.random()*amigos.length);
    let amigoSorteado=amigos[indiceAleatorio]
    document.getElementById("resultado").innerHTML=`<li>Amigo sorteado: <b>${amigoSorteado}</b></li>`;
    }

