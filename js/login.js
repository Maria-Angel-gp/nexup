function validarLogin(){
    var usuario = document.getElementById("usuario").value;
    var password = document.getElementById("password").value;

    //Comprobar si esta vacio
    if (usuario === "" || password === "") {
        alert("Complete todos los campos.");
        return false;
    }

    //Validar si son correctos
    if (usuario === "admin" && password === "1234") {
        alert("¡Bienvenido!")
        //window.location.href = "../eventos.html"
        return false;
    } else {
        alert("Usuario o contraseña incorrectos.");
        return false;
    }
}