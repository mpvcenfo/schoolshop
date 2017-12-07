function obtenerReporteGanancias() {
    let reporte = [];
    
    let peticion = $.ajax({
        url: '../api/reportar_ganancias.php',
        type: 'post',
        contentType: 'application/x-www-form-urlencoded;charset=UTF-8',
        dataType: 'json',
        async: false,
        data: {
        }
    });
    peticion.done(function (datos) {
        reporte = datos;
        console.log('Se obtuvo el reporte con éxito.');
    });
    peticion.fail(function () {
        console.log('No se obtuvo el reporte.');
    });

    return reporte;
}