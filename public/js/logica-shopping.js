function obtenerListaCompra() {
    let listaCompra = JSON.parse(localStorage.getItem('listaArticulosLS'));

    if(listaCompra === null) {
        listaCompra = [
            ['ID001', 'Tajador', 500],
            ['ID002', 'Borrador', 200],
            ['ID003', 'Lápiz', 150],
        ]
    }

    return listaCompra;
}