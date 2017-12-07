let btnAgregar=document.querySelector('#btnAbrirModal');
let btnOK=document.querySelector('#OK');
let btnConfirmar=document.querySelector('.OK');
let btnNO=document.querySelector('.NO');
let txtfiltro = document.querySelector('#filtro');


llenarTabla();
btnConfirmar.addEventListener('click',deshabilitarLista);
btnOK.addEventListener('click',cerrarModal);
btnNO.addEventListener('click',cerrarModal);
txtfiltro.addEventListener('keyup',filtrar);



/********************************************************************************************JS LLENAR TABLA lista */
function llenarTabla(){
    let tablaEncabezados = obtenerListaArticulosCabeza();

    let cuerpoTabla=document.querySelector('#tablaEncabezados tbody');

    cuerpoTabla.innerHTML='';
    if(obtenerRol()==0){

        for(let i=0;i<tablaEncabezados.length;i++){

            if(tablaEncabezados[i][3]){
                let fila=cuerpoTabla.insertRow()
                let columnaConfiguracion=fila.insertCell();
                let columnaCodigo=fila.insertCell();
                let columnaNombre=fila.insertCell();
                let columnaDescrip=fila.insertCell();
                let columnaLista=fila.insertCell();

                let btnEditar=document.createElement('a');
                btnEditar.id=tablaEncabezados[i][0];
                btnEditar.classList.add('fa');
                btnEditar.classList.add('fa-pencil');
                btnEditar.classList.add('botonEditar');
                
                btnEditar.addEventListener('click',modificarLista);
                columnaConfiguracion.appendChild(btnEditar);
                let btnDeshabilitar = document.createElement('a');
                
                btnDeshabilitar.id=tablaEncabezados[i][0];
                btnDeshabilitar.classList.add('fa');
                btnDeshabilitar.classList.add('fa-trash');
                btnDeshabilitar.classList.add('botonDeshabilitar');
                

                btnDeshabilitar.addEventListener('click',verDeshabilitar);
                columnaConfiguracion.appendChild(btnDeshabilitar);

                
                
                columnaCodigo.innerHTML=tablaEncabezados[i][0];
                columnaNombre.innerHTML=tablaEncabezados[i][1];
                columnaDescrip.innerHTML=tablaEncabezados[i][2];
                if(true){
                    columnaLista.innerHTML="<a href='#'>Asignar...</a>";
                }
                else{
                    columnaLista.innerHTML=tablaEncabezados[i][3];
                }
            }
        }
    }
    else{
        for(let i=0;i<tablaEncabezados.length;i++){

            if(tablaEncabezados[i]['estado']==1 && indicarCodColegio()==tablaEncabezados[i]['institucion']){
                let fila=cuerpoTabla.insertRow()
                let columnaConfiguracion=fila.insertCell();
                let columnaCodigo=fila.insertCell();
                let columnaNombre=fila.insertCell();
                let columnaDescrip=fila.insertCell();
                let columnaLista=fila.insertCell();

                columnaConfiguracion.classList.add('colEdit');
                columnaCodigo.classList.add('colEdit');
                columnaNombre.classList.add('colNombre');
                columnaDescrip.classList.add('colDescri');
                columnaLista.classList.add('colLista');

                let btnEditar=document.createElement('a');
                btnEditar.id=tablaEncabezados[i]['id_Lista'];
                btnEditar.classList.add('fa');
                btnEditar.classList.add('fa-pencil');
                btnEditar.classList.add('botonEditar');
                
                btnEditar.addEventListener('click',guardarListaLS);
                columnaConfiguracion.appendChild(btnEditar);
                let btnDeshabilitar = document.createElement('a');
                
                btnDeshabilitar.id=tablaEncabezados[i]['id_Lista'];
                btnDeshabilitar.classList.add('fa');
                btnDeshabilitar.classList.add('fa-info-circle');
                btnDeshabilitar.classList.add('fa-trash');
                btnDeshabilitar.classList.add('botonDeshabilitar');
                

                btnDeshabilitar.addEventListener('click',verDeshabilitar);
                columnaConfiguracion.appendChild(btnDeshabilitar);

                
                
                columnaCodigo.innerHTML=tablaEncabezados[i]['id_Lista'];
                columnaNombre.innerHTML=tablaEncabezados[i]['nombre'];
                columnaDescrip.innerHTML=tablaEncabezados[i]['descripcion'];
                let btnDetalle = document.createElement('a');
                btnDetalle.id=tablaEncabezados[i]['id_Lista'];
                btnDetalle.classList.add('fa');
                btnDetalle.classList.add('fa-info-circle');
                btnDetalle.classList.add('btndetalle');
                btnDetalle.addEventListener('click',verDetalle);
                btnDetalle.innerHTML=" Detalle";
                columnaLista.appendChild(btnDetalle);
                
 
            }
        }
    }
}


function llenarTablaDetalle() {  
    
}


//funcion que abre el modal y vemos el detalle
function verDetalle() {
    let detalle=obtenerListaArticulosDetalle(this.id);
    let cuerpoTabla=document.querySelector('#tablaDetalle tbody');
    cuerpoTabla.innerHTML='';
    for(let i=0;i<detalle.length;i++){
        let fila=cuerpoTabla.insertRow()
        let columnaCodigo=fila.insertCell();
        let columnaNombre=fila.insertCell();

        columnaCodigo.classList.add('colEdit');
        columnaNombre.classList.add('colNombre');

        columnaCodigo.innerHTML=detalle[i]['codigoArticulo'];
        columnaNombre.innerHTML=detalle[i]['nombre'];
    }
    let caption=document.querySelector('#tablaDetalle caption');
    caption.innerHTML=this.id;

}

function verDeshabilitar(){
    let modal=document.querySelector('#msj');
    modal.classList.remove('ocultar');
    btnConfirmar.id=this.id;

}


function deshabilitarLista() {
    deshabilitarListaArticulo(this.id);
    let modal=document.querySelector('#msj1');
    modal.classList.remove('ocultar');
    let cuerpoTabla=document.querySelector('#tablaDetalle tbody');
    cuerpoTabla.innerHTML='';
    let caption=document.querySelector('#tablaDetalle caption');
    caption.innerHTML='';
}

function cerrarModal() {
    let modal=document.querySelector('#msj');
    modal.classList.add('ocultar');
    let modal1=document.querySelector('#msj1');
    modal1.classList.add('ocultar');
    llenarTabla();
}

function guardarListaLS() {
    let listas=obtenerListaArticulosCabeza();
    let miLista=[];
    for (let i = 0; i < listas.length; i++) {
        if (this.id==listas[i]['id_Lista']) {
            miLista= listas[i];
        }
        guardarListaTemporal(miLista);
        window.location.href='modificar-listaArticulos.html';
    }
}


function filtrar(){
    let filtro=document.querySelector('#filtro').value;
    let body=document.querySelector('#tablaEncabezados tbody');
    let filas=body.getElementsByTagName('tr');

    for(let i=0;i<filas.length;i++){
        let td=filas[i].getElementsByTagName("td")[2];
        if(td.innerHTML.toLowerCase().indexOf(filtro.toLowerCase()) > -1){
            filas[i].classList.remove('ocultar');
        }
        else{
            filas[i].classList.add('ocultar');
        }
    }


}

