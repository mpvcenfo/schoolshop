function guardarFormaPago(nFormaPago) {
    let formapago = [obtenerIDPedido(), obtenerIDUsuarioLogin(), nFormaPago]
    localStorage.setItem('pagoLS', JSON.stringify(formapago))
}

function obtenerIDUsuarioLogin() {
    return JSON.parse(localStorage.getItem('sesionLS'))[0];
}

function obtenerIDPedido() {
    
}