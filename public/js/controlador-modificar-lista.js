
let txtcodigo = document.querySelector('#inputpCodigo');
let txtnombre = document.querySelector('#inputpNombre');
let txtDescripcion = document.querySelector('#atxtDescripcion');
let txtseccion = document.querySelector('#seccion');
let txtnivel = document.querySelector('#nivel');
let btnRegistrar = document.querySelector('#btnRegistrarLista');
let btnCancelar = document.querySelector('#btnCancelar');
let txtfiltro = document.querySelector('#filtro');
let datos=[];
datos.push(txtcodigo,txtnombre,txtDescripcion,txtseccion,txtnivel);








btnRegistrar.addEventListener('click',guardarLista);
btnCancelar.addEventListener('click',limpiar);
txtfiltro.addEventListener('keyup',filtrar);
crear();
llenarSelectNivel();
llenarSelectSeccion();
llenarForm();

function validarDatos(){
    let llenos=true;
    for(let i=0;i<datos.length;i++){
        if(datos[i].value==""){
            llenos=false;
            datos[i].classList.add('warning');
        }
        else{
            datos[i].classList.remove('warning');
        }
    }
    if(document.querySelector('input[type=checkbox]:checked')==null){
        llenos=false
        // document.querySelector('.fa fa-check-square').classList.add('warning');
    }
    return llenos;
}

function guardarLista(){
    if(validarDatos()){
        let ListaMod=[];
        ListaMod.push(datos[0].value,datos[1].value,datos[2].value,datos[3].value,datos[4].value);
        modificarListaCabeza(ListaMod);
        let checked=document.querySelectorAll('input[type=checkbox]:checked');
        
        for(let i=0;i<checked.length;i++){
            let lista=txtcodigo.value;
            let ListaModDetalle=[];
            ListaModDetalle.push(lista,checked[i].id);
            if(i==0){
            modificarListaDetalle(ListaModDetalle);
            }
            registrarListaDetalle(ListaModDetalle)
        }
        limpiar();
        mostrarMensaje();   
    }
}


function limpiar(){
    let form=document.querySelector('#formulariLista');
    form.reset();
     
    txtfiltro.value='';
    filtrar();

    let checked=document.querySelectorAll('input[type=checkbox]:checked');
    for(let i=0;i<checked.length;i++){
        checked[i].checked=false;
    }
}





function filtrar(){
    let filtro=document.querySelector('#filtro').value;
    let body=document.querySelector('#inventario tbody');
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

function mostrarMensaje(){
    let msj=document.querySelector('#msj');
    msj.classList.remove('ocultar');
    let btn=document.querySelector('#OK');
    btn.addEventListener('click',ocultarMsj);
}

function ocultarMsj(){

    window.location.href='home-profesor.html';
}



function llenarForm() {
    let miLista=obtenerListaTemporal();
    txtcodigo.value =miLista['id_Lista'];
    txtnombre.value =miLista['nombre'];
    txtDescripcion.value =miLista['descripcion'];
    txtseccion.value =miLista['seccion'];
    txtnivel.value = miLista['nivel'];
    llenarDetalle(miLista['id_Lista']);
}

function llenarDetalle(pid) {
    let detalle=obtenerListaArticulosDetalle(pid);
    let tabla=document.querySelector('#inventario tbody');
    let filas=tabla.getElementsByTagName('tr');
    for (let j = 0; j < detalle.length; j++) {
        for(let i=0;i<filas.length;i++){
            let codigo=filas[i].getElementsByClassName('colCodigo')[0];
            if(codigo.innerHTML==detalle[j]['codigoArticulo']){
                let check=filas[i].getElementsByTagName('input')[0];
                check.checked=true;
            }
        }    
                
    }
}

function crear(){
    let  inventario=document.querySelector('#inventario tbody');
    inventario.innerHTML="";
    let tablaArticulos=obtenerTablaArticulos();
  
           
       
  
    for(let i=0;i< tablaArticulos.length;i++){
        if(indicarCodColegio()==tablaArticulos[i]['institucion']){
            let fila=inventario.insertRow();
            let columanaSelect=fila.insertCell();
            let columnaCodigo=fila.insertCell();
            let columnaNombre=fila.insertCell();
            let columnaDesc=fila.insertCell();

            columanaSelect.classList.add('colSec');
            columnaCodigo.classList.add('colCodigo');
            columnaNombre.classList.add('colNombre');
            columnaDesc.classList.add('colDesc');
            
        
        
            let  input =document.createElement("input");
            input.setAttribute("type","checkbox");
                
            input.id=tablaArticulos[i]['id_articulo'];
            columanaSelect.appendChild(input);
    
    
            columnaCodigo.innerHTML=tablaArticulos[i]['id_articulo'];
            columnaNombre.innerHTML=tablaArticulos[i]['nombre'];
            columnaDesc.innerHTML=tablaArticulos[i]['descripcion'].toLowerCase();
    
            
        } 
                 
              
    }
  
}