function validar() {
	// body...
	var correo, telefono, expresion;
	correo= document.getElementById('txtEmail').value;
	telefono= document.getElementById('txtTelefono').value;
	expresion= /^[a-z][\w.-]+@\w[\w.-]+\.[\w.-]*[a-z][a-z]$/i;
	if(!expresion.test(correo)){
		alert("El correo no es válido");
		return false;
	}
	/*EJERCICIO 7*/
	else if(telefono.length!=10){
		alert("El telefono ingresado es incorrecto");
		return false;
	}
	else if(isNaN(telefono)){
		alert("El telefono ingresado no es un número");
		return false;
	}
	
}
/*function checkSubmit() {
    document.getElementById("btnEnviar").value = "Enviando...";
    document.getElementById("btnEnviar").disabled = true;
    /*EJERCICIO 8
    var pagina="../index.html";
	window.location.href=pagina;
    window.alert("DATOS ENVIADOS CORRECTAMENTE");
    return true;
}
/*function redireccionamiento() {
	var pagina="../index.html";
	window.location.href=pagina;
	
}
function redic(num) {
	setTimeout(redireccionamiento(), num);
}*/
function checkSubmit() {
    if(validar()){
    	document.getElementById("btnEnviar").value = "Enviando..."; 
    	document.getElementById("btnEnviar").disabled = true;
    	alert("DATOS ENVIADOS CORRECTAMENTE");
	    window.location="../index.html";
    }
    return true;
}