
llenarTablaSListas();
 let modal=document.querySelector('#modal');
let btnAgregar=document.querySelector('#btnAgregar');
let btncerrar =document.querySelector('#btnCerrar');
let btnanadir=document.querySelector('#btnRegistrarLista');
let inputFiltro=document.querySelector('#txtFiltro');
/**/
/*las siguientes variables son para extrar el valor de los inputs*/


inputpCodigo=document.querySelector('#inputpCodigo');
inputpNombre=document.querySelector('#inputpNombre');
seccion=document.querySelector('#seccion');
nivel=document.querySelector('#nivel');
atxtDescripcion=document.querySelector('#atxtDescripcion');
let form=document.querySelector('#formulariLista');
let divmodificar=document.querySelector('#btnModDes');

let formulario=[inputpCodigo,inputpNombre,atxtDescripcion,seccion,nivel];

/*evento para filtrar*/

inputFiltro.addEventListener('keyup',filtrar);
/*evento para filtrar*/
llenarTablaSListas();

function abrir(){
limpiar();
modal.style.display = "block";
 
document.querySelector('#btnRegistrarLista').addEventListener('click',agregarLista);
document.querySelector('#btnRegistrarLista').removeEventListener('click',verlista);
 

 for ( vacio= 0; vacio <formulario.length; vacio++) {
  if (formulario[vacio].value==""){
       formulario[vacio].classList.remove('error'); 
   
    }

  }

}
function cerrar(){

 modal.style.display = "none";

}

function veropciones(){
   let titulo=document.querySelector('#Titulo');
    titulo.innerHTML="";
    titulo.appendChild(document.createTextNode(" ModificarLista"));
    divmodificar.classList.remove('ocultarAgregar');
    btnanadir.value="Guardar";
    btnanadir.classList.add('ocultarAgregar');
    btncerrar.value="Cerrar";
  deshabilitarInput();
}

function validarcampo(){

let lleno=true;
 for ( vacio= 0; vacio <formulario.length; vacio++) {
      if (formulario[vacio].value==""){
           
       formulario[vacio].classList.add('error'); 
             lleno=false;
  }else{
   formulario[vacio].classList.remove('error');
 

      }

    }
      return lleno;
}  


function limpiar(){
form.reset();  

}


/*Aqui guardo la lista que esta  en localStorage*/

function obtenerDatosLista(){ 
     let  nuevosArticulosSeleccionados=[];  
      let articulos=[];
       let numberCodigo=inputpCodigo.value;
        let  oseccion = seccion.options[seccion.selectedIndex].text;
        let   onivel = nivel.options[nivel.selectedIndex].text;    
        let  sDescripcion=atxtDescripcion.value;
        let  sNombreArticulo=inputpNombre.value;
   
      articulos.push(numberCodigo,sNombreArticulo,sDescripcion,oseccion,onivel,nuevosArticulosSeleccionados,true);

      return articulos;

}

function agregarLista(){
   let datoslista=obtenerDatosLista();
 if(validarcampo()){
       registraLista(datoslista);
        llenarTablaSListas();
        limpiar();
        cerrar();  
  }
}
function llenarTablaSListas(pFiltro){

  let cuerpoTablaListaArticulo=document.querySelector('#tblLista tbody');
  cuerpoTablaListaArticulo.innerHTML="";
let listas;
        if(pFiltro==undefined ){
         listas=obtenerLista();
      }else{
        listas=obtenerlistaArticulosPorSeccionFiltrada(pFiltro);
      }

        for(let i=0; i <listas.length; i++){
          if(listas[i][6]){
    let fila=cuerpoTablaListaArticulo.insertRow();
         fila.id=listas[i][0];

        let columnaCodigo=fila.insertCell();
        let columnaNombre=fila.insertCell();
       let columnaDescripcion=fila.insertCell();
       let columnaSeccion=fila.insertCell();
        let columnaNivel=fila.insertCell();
        let columnaConfiguracion=fila.insertCell(); 
         
          //creacion de botones
        let btnEditar=document.createElement('a');
              btnEditar.id=listas[i][0];
                btnEditar.classList.add('fa');
                btnEditar.classList.add('fa-pencil');
                btnEditar.classList.add('botonEditar');
               btnEditar.addEventListener('click',verlista);
                columnaConfiguracion.appendChild(btnEditar);

     

            columnaCodigo.innerHTML=listas[i][0];
         columnaNombre.innerHTML=listas[i][1];
        columnaDescripcion.innerHTML=listas[i][2];
        columnaSeccion.innerHTML=listas[i][3];
         columnaNivel.innerHTML=listas[i][4];
          }

    }

   }



  


   function filtrar(){

    let sFiltro=inputFiltro.value.toLowerCase();
    llenarTablaSListas(sFiltro);
} 

function verlista(){
  guardartemporal(this.id);

  window.location.href = "modificar-lista.html";

  //document.querySelector('#btnRegistrarProveedor').addEventListener('click',guardarProveedor);
}

  function llenarModal(pid){

  let lista=buscarListaPorCodigo(pid);
    for(let i=0;i<lista.length;i++){
        if(pid==lista[0]){
 

  document.querySelector('#inputpCodigo').value=lista[0];
   document.querySelector('#inputpNombre').value=lista[1];
   document.querySelector('#atxtDescripcion').value=lista[2];
   document.querySelector('#seccion').value=lista[3]; 
 document.querySelector('#nivel').value=lista[4]; 
   }
  } 
}


function irArticulos(){
   window.location.href='seleccionarArticulos.html';
}

function deshabilitarInput(){
        inputpCodigo.disabled=true;
       inputpNombre.disabled =true;
       seccion.disabled=true;
       nivel.disabled=true;
       atxtDescripcion.disabled=true;
     
 }

 function habilitar(){
       
       inputpNombre.disabled=false;
       seccion.disabled=false;
       nivel.disabled=false;
       atxtDescripcion.disabled=false;
 }