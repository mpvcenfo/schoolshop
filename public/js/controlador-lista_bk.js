
crear();
 let modal=document.querySelector('#modal');
let btnAgregar=document.querySelector('#btnAgregar');
let btncerrar =document.querySelector('#btnCerrar');
let btnanadir=document.querySelector('#btnRegistrarLista');
let inputFiltro=document.querySelector('#txtFiltro');
let btnAceptar=document.querySelector('#btnAceptar');
let btnCancelar=document.querySelector('#btnCancelar')


/**/
/*las siguientes variables son para extrar el valor de los inputs*/


inputpCodigo=document.querySelector('#inputpCodigo');
inputpNombre=document.querySelector('#inputpNombre');
seccion=document.querySelector('#seccion');
nivel=document.querySelector('#nivel');
atxtDescripcion=document.querySelector('#atxtDescripcion');
let form=document.querySelector('#formulariLista');
let divmodificar=document.querySelector('#btnModDes');
btnanadir.addEventListener('click',agregarLista);
btnAceptar.addEventListener('click',cerrarModal);

let formulario=[inputpCodigo,inputpNombre,atxtDescripcion,seccion,nivel];
document.querySelector('#modal').classList.add('ocultar');
btnCancelar.addEventListener('click,',irPagina);
/*evento para filtrar*/

//inputFiltro.addEventListener('keyup',filtrar);
/*evento para filtrar*/

function cerrarModal(){
  document.querySelector('#modal').classList.add('ocultar');
}

function irPagina(){
  window.location.href = "lista.html";  
  
}
function obtenerDatosLista(){ 
  let  nuevosArticulosSeleccionados=[];  
   let articulos=[];
    let numberCodigo=inputpCodigo.value;
     let  oseccion = seccion.options[seccion.selectedIndex].text;
     let   onivel = nivel.options[nivel.selectedIndex].text;    
     let  sDescripcion=atxtDescripcion.value;
     let  sNombreArticulo=inputpNombre.value;
     let checkeados=document.querySelectorAll('input[type=checkbox]:checked');
     
   for (let i = 0; i < checkeados.length; i++) {
    nuevosArticulosSeleccionados.push(checkeados[i].id);
 }

   articulos.push(numberCodigo,sNombreArticulo,sDescripcion,oseccion,onivel,nuevosArticulosSeleccionados,true);

   return articulos;

} 


function agregarLista(){
  let datoslista=obtenerDatosLista();
if(validarcampo()){
      registraLista(datoslista);
     //  llenarTablaSListas();
       limpiar();
       window.location.href = "lista.html";  
       
 }
}


/*function llenartextarea(){
 
aNuevoProveedor.push(sCedula,sNombre,sTelefono,sCorreo,sEncargado,checkeados,true);  


return aNuevoProveedor;
document.querySelector('#seleccionados').value=elementoscheckeados;


}*/
  

/*function validarcampo(){

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
}  */
function validarcampo(){
      let vacio;
        let x=true;
      let lleno=true;
      let nochecked;
    for ( vacio= 0; vacio <formulario.length; vacio++) {
        if (formulario[vacio].value==""){
            formulario[vacio].classList.add('error'); 
              lleno=false;
            
        }else{
            formulario[vacio].classList.remove('error'); 
              
              } 
      }
    if(document.querySelector('input[type=checkbox]:checked')==null){
      lleno=false;  
      nochecked=document.querySelectorAll('input[type=checkbox]');
    for(let i=0;i <nochecked.length;i++){
            if(nochecked[i].checked==false ){
          
              document.querySelector('#modal').classList.remove('ocultar');
            }   
      }
    }

    return lleno;
}
function limpiar(){
form.reset();  

}


function crear(){
  let  inventario=document.querySelector('#inventario tbody');
  inventario.innerHTML="";
let tablaArticulos=obtenerTablaArticulos();

         
     

 for(let i=0;i< tablaArticulos.length;i++){
      
      let fila=inventario.insertRow();
      let columanaSelect=fila.insertCell();
      let columnaCodigo=fila.insertCell();
      let columnaNombre=fila.insertCell();
      let columnaDesc=fila.insertCell();
      
     
     
      let  input =document.createElement("input");
      input.setAttribute("type","checkbox");
     // input.setAttribute("id",+ tablaArticulos[i][3]);
            
        input.id=tablaArticulos[i]['id_articulo'];
        columanaSelect.appendChild(input);
        
 // let nuevoHeaderArticulo=document.createElement("h3");

     // let header=document.createTextNode(tablaArticulos[i][7]);

      //nuevoHeaderArticulo.appendChild(header);


      columnaCodigo.innerHTML=tablaArticulos[i]['id_articulo'];
      columnaNombre.innerHTML=tablaArticulos[i]['nombre'];
      columnaDesc.innerHTML=tablaArticulos[i]['descripcion'].toLowerCase();

        
         
               
            
     }

} 

    
       
 

   function filtrar(){

    let sFiltro=inputFiltro.value.toLowerCase();
    llenarTablaSListas(sFiltro);
} 

 
 function verlista() {
       veropciones();
      llenarModal(this.id);
      habilitar();
         abrir();

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