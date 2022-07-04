document.getElementById("guardar").addEventListener("click", function(){
    let registroNombre = document.getElementById("registroNombre").value;
    let registroContraseña = document.getElementById("registroContraseña").value;

    if(registroNombre !==""){
        if(localStorage.getItem(registroNombre)){
            document.getElementById("mensaje").innerHTML = "<p>Registro editado</p>";
        }else{
            document.getElementById("mensaje").innerHTML = "<p>Nuevo registro agregado</p>";
        }

        localStorage.setItem(registroNombre, registroContraseña);
        reseteoRegistro();
    }else{
        document.getElementById("mensaje").innerHTML = "<p>Debes crear una contraseña</p>";
        reseteoRegistro();
    }
})
