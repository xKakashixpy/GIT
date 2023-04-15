var nombre = document.getElementById('nombre');
var password = document.getElementById('password');
var error = document.getElementById('error');
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

    error.innerHTML = mensajeError.join(',');

    return false; 

}