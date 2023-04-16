var nombre = document.getElementById('nombre');
var password = document.getElementById('password');
var error = document.getElementById('error');
var edad = document.getElementById ('edad');
error.style.color = 'Green';

function enviarformulario(){
    console.log ('Enviando formulario...');

    var mensajeError =[];

    if (nombre.value === null || nombre.value === ''){
        mensajeError.push('Ingresa tu nombre...');
    }
    if (password.value === null || password.value === ''){
        mensajeError.push('Ingresa tu password...'); 
    }
    if  (edad.value < 18 || edad > 35) {
        mensajeError.push("La edad debe estar entre 18 y 35 años.");
        return false;
    }
    error.innerHTML = mensajeError.join(',');

    return false; 

}