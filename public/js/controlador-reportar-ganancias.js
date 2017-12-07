llenarTablaReporte();

function llenarTablaReporte() {
    let cuerpoTabla = document.querySelector('#tblArticulos tbody');
    cuerpoTabla.innerHTML = '';
    let reporteGanancias = obtenerReporteGanancias();
    console.log(reporteGanancias);
    for(let i = 0; i < reporteGanancias.length; i++) {
        let fila = cuerpoTabla.insertRow(i);
        let columnaCodigo = fila.insertCell();
        let columnaTotal = fila.insertCell();
        

        columnaCodigo.innerHTML = reporteGanancias[i]['codigo'];
        columnaTotal.innerHTML = reporteGanancias[i]['total'];
    }
}

function obtenerArticulos() {
    
}