var rut = document.getElementById('rut');
var apellidoPa = document.getElementById('apellidoPa');
var apellidoMa = document.getElementById('apellidoMa');
var nombre = document.getElementById('nombre');
var fechaNac = document.getElementById('fechaNac');
var edad = document.getElementById('edad');
var genero = document.getElementById('genero');
var email = document.getElementById('email');
var celular = document.getElementById('celular');
var motivacion = document.getElementById('motivacion');
var profesion = document.getElementById('profesion');


var error = document.getElementById('error');
error.style.color = 'red';


var form = document.getElementById('formulario');
    form.addEventListener('submit',function(evt){
        evt.preventDefault();
        
        var mensajesError = [];

    if(rut.value === null || rut.value === ''){
            mensajesError.push('Ingrese su rut')
    }

    if(apellidopa.value === null || apellidopa.value === ''){
        mensajesError.push('Apellido paterno')    
    }   

    if(apellidoma.value === null || apellidoma.value === ''){
        mensajesError.push('Apellido materno')    
    }


    if(nombre.value === null || nombre.value === ''){
        mensajesError.push('Ingresa tu nombre')
    }

    if(fechaNac.value === null || fechaNac.value === ''){
        mensajesError.push('Ingresa tu fecha de nacimiento')
    }

    if(edad.value === null || edad.value === ''){
        mensajesError.push('Ingresa tu edad')
    }

    if(genero.value === null || genero.value === ''){
        mensajesError.push('generom')
    }

    if(email.value === null || email.value === ''){
        mensajesError.push('Ingresa tu email')
    }

    if(celular.value === null || celular.value === ''){
        mensajesError.push('Ingresa tu celular')
    }

    if(motivacion.value === null || motivacion.value === ''){
        mensajesError.push('Ingrese su motivacion')
    }

    if(profesion.value === null || profesion.value === ''){
        mensajesError.push('Ingresa tu profesion')
    }

        error.innerHTML = mensajesError.join(', ');    


    
});