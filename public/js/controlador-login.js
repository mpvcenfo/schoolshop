cerrarSesion()

let txtEmail = document.querySelector('#txtEmail');
let txtPassword = document.querySelector('#txtPassword');
let btnLogin = document.querySelector('#btnLogin');
let divMensaje = document.querySelector('#divMensaje');

btnLogin.addEventListener('click', validarFormulario);

function validarFormulario() {
    
    let sEmail = txtEmail.value;
    let sPassword = txtPassword.value;
    let bError = true;
    let urlRol;
    let datos=[];
    datos.push(sEmail,sPassword);
    let miUsuario=validarUsuario(datos);

    if(miUsuario.length!=undefined){
        console.log("No existe");
        mostrarMensaje(bError,'Usuario o clave invalida');
    }
    else{
        if (miUsuario['estado']==1){
            bError = false;
            urlRol = 'home-' + obtenerNombreRol(Number(miUsuario['rol'])) + '.html';
            guardarSesion(miUsuario['cedula'], Number(miUsuario['rol']))
            window.location.href = urlRol;
        }
        else{
            mostrarMensaje(bError,'Usuario deshabilitado');
        }
    }

}

function mostrarMensaje(pbError,msj) {
    divMensaje.innerHTML = '';
    let spanMensaje = document.createElement('span');
    spanMensaje.id = 'spanMensaje';
    let nodoTexto;
    let sMsj;

    divMensaje.classList.remove('ocultar');

    if (pbError === true) {
        divMensaje.classList.add('divError');
        divMensaje.classList.remove('divCorrecto');
        sMsj = msj;
    }

    nodoTexto = document.createTextNode(sMsj);
    spanMensaje.appendChild(nodoTexto);
    divMensaje.appendChild(spanMensaje);
}


function obtenerNombreRol(nRol) {
    let sNombreRol;

    switch (nRol) {
        case 0:
            sNombreRol = 'administrador';
            break;
        case 1:
            sNombreRol = 'director';
            break;
        case 2:
            sNombreRol = 'profesor';
            break;
        case 3:
            sNombreRol = 'encargado';
            break;
        case 4:
            sNombreRol = 'asistente';
            break;
        default:
            sNombreRol = '';
            break;
    }

    return sNombreRol;
}
