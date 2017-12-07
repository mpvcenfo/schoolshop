let txtNumTarjeta = document.querySelector('#txtNumTarjeta');
let dateExpiracion = document.querySelector('#dateExpiracion');
let txtCodTarjeta = document.querySelector('#txtCodTarjeta');
let txtMontoParcial = document.querySelector('#txtMontoParcial');
let btnContinuar = document.querySelector('#btnContinuar');

btnContinuar.addEventListener('click', validarFormulario);

function validarFormulario() {
    let sNumTarjeta = txtNumTarjeta.value;
    let sFechaExpiracion = dateExpiracion.value;
    let sCodTarjeta = txtCodTarjeta.value;
    let sMontoParcial = txtMontoParcial.value;

    if (sNumTarjeta === null || sFechaExpiracion === ''
        || sCodTarjeta === null || sMontoParcial === null) {
        mostrarMensaje('Campos incompletos');
    }
    else if (!validarFecha(sFechaExpiracion)) {
        mostrarMensaje('Fecha de expiración inválida');
    }
    else if (!validarMonto(sMontoParcial)){
        mostrarMensaje('Monto parcial inválido');
    }
    else if (!validarTarjeta(sNumTarjeta, sCodTarjeta)) {
        mostrarMensaje('Datos incorrectos de tarjeta');
    }
    else {
        guardarTarjeta(sNumTarjeta, sFechaExpiracion, sCodTarjeta);
        window.location.href = 'factura.html';
    }
}

function validarTarjeta(psNumTarjeta, psCodTarjeta) {
    let bValidez = false;

    // Visa o MasterCard
    let regexpNumVisa = new RegExp('\d{16}');
    let regexpCodVisa = new RegExp('\d{3}');

    // American Express
    let regexpNumAmex = new RegExp('\d{15}');
    let regexpCodAmex = new RegExp('\d{4}')

    if ((regexpNumVisa.test(psNumTarjeta) && regexpCodVisa.test(psCodTarjeta)) ||
        (regexpNumAmex.test(psNumTarjeta) && regexpCodAmex.test(psCodTarjeta))) {
        bValidez = true;
    }

    return bValidez;
}

function validarFecha(psFechaExp) {
    let bValidez = false;
    let fechaExp = new Date(psFechaExp);
    let fechaActual = new Date();

    if (fechaExp > fechaActual) {
        bValidez = true;
    }

    return bValidez;
}

function validarMonto(psMontoParcial) {
    let bValidez = false;
    
    if(Number(sMontoParcial) > 0) {
        bValidez = true;
    }

    return bValidez;
}

function mostrarMensaje(sMsj) {
    divMensaje.innerHTML = '';
    let spanMensaje = document.createElement('span');
    spanMensaje.id = 'spanMensaje';
    let nodoTexto;

    divMensaje.classList.remove('ocultar');

    divMensaje.classList.add('divError');
    divMensaje.classList.remove('divCorrecto');

    nodoTexto = document.createTextNode(sMsj);
    spanMensaje.appendChild(nodoTexto);
    divMensaje.appendChild(spanMensaje);
}