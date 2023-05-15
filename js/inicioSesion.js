document.getElementById("valUsuario").style.display = "none";


function validarFormulario(){
    let txtUsuario = document.getElementById("txtUsuario").value;


    if (txtUsuario.length == 0) {
        document.getElementById("valUsuario").style.display = "inline";
        document.getElementById("txtUsuario").classList.add("is-invalid");
    }else{
        document.getElementById("txtUsuario").classList.remove("is-invalid");
        document.getElementById("txtUsuario").classList.add("is-valid");
        document.getElementById("valUsuario").style.display = "none";
    }
}


function password(){
    let input = document.getElementById("txtPassword");

    if (input.type == "password") {
        input.type = "text";
        document.getElementById("mostrar").style.display = "inline";
        document.getElementById("ocultar").style.display = "none";
    }else{
        input.type = "password";
        document.getElementById("mostrar").style.display = "none";
        document.getElementById("ocultar").style.display = "inline";
    }
}