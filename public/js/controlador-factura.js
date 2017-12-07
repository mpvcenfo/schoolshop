llenarFactura();
let btnContinuar = document.querySelector('#btnContinuar');
let codFactura = document.querySelector('#codFactura');

let formaPago = document.querySelector('#formaPago');
let montoPago = document.querySelector('#montoPago');
let montoSaldo = document.querySelector('#montoSaldo');

btnContinuar.addEventListener('click', confirmarFactura);

function llenarFactura() {
    codFactura.innerHTML = obtenerDetalleFactura()[0];
    
    let cuerpoTablaFactura = document.querySelector('#tblFactura tbody');
    cuerpoTablaFactura.innerHTML = '';
    let listaFactura = obtenerFactura();

    for(let i = 0; i < listaFactura.length; i++) {
        let fila = cuerpoTablaFactura.insertRow(i);

        let columnaCodigo = fila.insertCell();
        let columnaNombre = fila.insertCell();
        let columnaPrecio = fila.insertCell();

        columnaCodigo.innerHTML = listaFactura[i][0];
        columnaNombre.innerHTML = listaFactura[i][1];
        columnaPrecio.innerHTML = listaFactura[i][2];
    }

}

function llenarPago() {
    let encabezadoFactura = obtenerEncabezadoFactura()

    encabezadoFactura[]
}

function obtenerFacturaUsuario() {
    return JSON.parse()
}

function obtenerUsuarioLogin() {
    return JSON.parse(localStorage.getItem('listaUsuariosLS'));
}