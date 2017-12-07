function obtenerDetalleFactura() {
    let detalle = JSON.parse(localStorage.getItem('listaDetallePedidoLS'));

    if(detalle === null) {
        detalle = [
            ['ID001', 'Tajador', 500],
            ['ID002', 'Borrador', 200],
            ['ID003', 'Lápiz', 150],
        ]
    }

    return detalle;
}

function obtenerEncabezadoFactura() {
    let encabezado = JSON.parse(localStorage.getItem('listaEncargadoPedidoLS'));

    if(encabezado === null) {
        encabezado = [
            ['20171120121209', '2017-11-20', '4-4444-4444', '30000', '20000', false],
            ['20170403091201', '2017-04-03', '1-4653-0024', '55000', '0', false],
            ['20170630141959', '2017-06-30', '3-0352-5424', '46200', '15000', false],
            ['20170821220134', '2017-08-21', '6-0035-1142', '33200', '20400', false],
        ]
    }

    return encabezado;
}

function obtenerIDUsuarioLogin() {
    return JSON.parse(localStorage.getItem('sesionLS'))[0];
}