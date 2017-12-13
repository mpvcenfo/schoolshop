function almacenarProveedor(pdatosproveedor) {
    let peticion = $.ajax({
        url: '../api/registrar_proveedor.php',
        type: 'post',
        contentType: 'application/x-www-form-urlencoded;charset=UTF-8',
        dataType: 'json',
        async: false,
        data: {
            pproveedor: pdatosproveedor
        }
    });
    peticion.done(function () {
        console.log('Se registró el proveedor.');
    });
    peticion.fail(function () {
        console.log('No se registró el proveedor.');
    });
}