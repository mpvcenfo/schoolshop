let btnContinuar = document.querySelector('#btnContinuar');

btnContinuar.addEventListener('click', validarFormaPago);

function validarFormaPago() {
    let urlContinuar;
    let radioFormaPago = document.querySelector('input[name="formapago"]:checked');
    
    switch (radioFormaPago.value) {
        case 'total':
            urlContinuar = 'tarjeta-total.html';
            break;
        case 'parcial':
            urlContinuar = 'tarjeta-parcial.html';
            break;
        case 'reserva':
            urlContinuar = 'factura.html';
            break;
        case 'matricula':
            urlContinuar = 'factura.html';
            break;
        default:
            urlContinuar = '#';
            break;
    }

    window.location.href = urlContinuar;
}