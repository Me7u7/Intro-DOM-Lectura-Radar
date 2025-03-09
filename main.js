function cuestionario() {
    let X = document.getElementById("X").value;
    let Op = document.getElementById("Op").value;
    let nickname = document.getElementById("nickname").value;
    let fecha = new Date();
    let fechaHora = fecha.toLocaleString();

    if (X && Op && nickname) {
//Creación de lista
        let listaComentarios = document.getElementById("listaComentarios");

//Opiniones
        let comentarioDiv = document.createElement("div");
        comentarioDiv.classList.add("comentario");

        comentarioDiv.innerHTML = "<p>"+fechaHora+"</p><strong> USUARIO: </strong> "+nickname+"<br><strong> TÍTULO: </strong>"+X+"<br><strong>OPINIÓN: </strong>"+Op+"<br><br>";

//Nuevo comentario
        listaComentarios.appendChild(comentarioDiv);

//Limpia las casillas de entrada
        document.getElementById("nickname").value = "";
        document.getElementById("X").value = "";
        document.getElementById("Op").value = "";

        alert("Gracias, tu opinión es muy valiosa");
    } else {
        alert("Verifica que no haya campos vacíos");
    }
}







