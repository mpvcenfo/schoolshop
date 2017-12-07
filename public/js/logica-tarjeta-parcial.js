function guardarTarjeta(sNumTarjeta, dExpiracion, sCodSeguridad) {
    let datosTarjeta = [obtenerIDUsuarioLogin(), sNumTarjeta, 
        dExpiracion, sCodSeguridad]
    localStorage.setItem('tarjetaLS', JSON.stringify(datosTarjeta))
}

function obtenerIDUsuarioLogin() {
    return JSON.parse(localStorage.getItem('sesionLS'))[0];
}