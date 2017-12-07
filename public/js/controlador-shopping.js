llenarTablaCompra();
let btnContinuar = document.querySelector('#btnContinuar');

btnContinuar.addEventListener('click', seleccionarFormaPago);

function seleccionarFormaPago() {
    window.location.href = 'forma-pago.html';
}

function llenarTablaCompra() {
    let cuerpoTablaCompra = document.querySelector('#tblCompra tbody');
    cuerpoTablaCompra.innerHTML = '';
    let listaCompra = obtenerListaCompra();

    for(let i = 0; i < listaCompra.length; i++) {
        let fila = cuerpoTablaCompra.insertRow(i);

        let columnaSeleccion = fila.insertCell();
        let columnaCodigo = fila.insertCell();
        let columnaNombre = fila.insertCell();
        let columnaPrecio = fila.insertCell();

        let btnComprar = document.createElement('a');
        btnComprar.dataset.codArticulo = listaCompra[i][0];
        btnComprar.classList.add('fa');
        btnComprar.classList.add('fa-square');
        btnComprar.classList.add('botonSeleccionar');

        btnComprar.addEventListener('click', seleccionarComprar);

        columnaSeleccion.appendChild(btnComprar);

        columnaCodigo.innerHTML = listaCompra[i][0];
        columnaNombre.innerHTML = listaCompra[i][1];
        columnaPrecio.innerHTML = listaCompra[i][2];
    }

}

function seleccionarComprar() {
    btnComprar = document.querySelector()

    btnComprar.classList.remove('fa-square');
    btnComprar.classList.add('fa-square-o');
}