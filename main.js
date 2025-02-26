function cuestionario() {
    let X = document.getElementById("X").value;
    let Op = document.getElementById("Op").value;
    let nickname = document.getElementById("nickname").value;
    let fecha = new Date();
    let fechaHora = fecha.toLocaleString();
    if(X && Op && nickname){
        let resumendiv = document.getElementById("resumen");
        resumendiv.innerHTML = "<br> Su opinión fue resgistrada:  " + fechaHora+"<br>Título: "+X+"<br>El usuario "+nickname+" opina '"+Op;;
        alert("Gracias, tu opinión es muy valiosa");
        document.getElementById("nickname").value = "";
        document.getElementById("X").value = "";
        document.getElementById("Op").value = "";
    }else{
        alert("Verifica que no haya campos vacíos");
    }
}







