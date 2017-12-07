/*Estas variables son para el modal*/
validarhtml();



let rProveedor=document.querySelector('#rProveedor');
let btnAgregar=document.querySelector('#btnAgregar');
let btncerrar =document.querySelector('#btnCerrar');
let btnRegistrarProveedor=document.querySelector('#btnRegistrarProveedor');
let inputFiltro=document.querySelector('#txtFiltro');
let btnAceptar=document.querySelector('#btnAceptar');
let btnbasurero=document.querySelector('#btnbasurero');
let btnCancelar=document.querySelector('#btnCancelar')
/**/
/*las siguientes variables son para extrar el valor de los inputs*/

inputpCedula=document.querySelector('#inputpCedula');
inputpNombre=document.querySelector('#inputpNombre');
inputpTelefono=document.querySelector('#inputpTelefono');
inputpCorreo=document.querySelector('#inputpCorreo');
inputpEncargodo=document.querySelector('#inputpEncargodo');
let form=document.querySelector('#formularioProveedor');
let aCategorias =['Bolsos','Libros','Uniformes', 'Arte','Cuaderno','Uniformes Formales','Herramientas'];

let formulario=[inputpCedula,inputpNombre,inputpTelefono,inputpCorreo,inputpEncargodo];


let cuerpoTablaProveedor=document.querySelector('#tblProveedores tbody');
//btnAgregar.addEventListener('click',paginaAgregar);
btnCerrar.addEventListener('click',irPagina)
btnAceptar.addEventListener('click',cerrarModal);
btnbasurero.addEventListener('click',deshabilitar);
document.querySelector('#btnRegistrarProveedor').addEventListener('click',guardarProveedor);
document.querySelector('#modalwarning').classList.add('ocultar');

inputFiltro.addEventListener('keyup',filtrar);
llenarTablaProveedores();

function irPagina(){
  window.location.href = "registrarProveedor.html"    
  
}

function cerrarModal(){
  document.querySelector('#modal').classList.add('ocultar');
  document.querySelector('#modalwarning').classList.add('ocultar');
}

function filtrar(){
let sFiltro=inputFiltro.value.toLowerCase();
llenarTablaProveedores(sFiltro);

}
 

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
   
 

function validarCampoCategorias(){
   let checkeados=document.querySelectorAll('input[type=checkbox]:checked');
   

}

 function obtenerDatosRegistroProveedor(){

 	 let aNuevoProveedor=[] ;
  
let sCedula=inputpCedula.value;
let sNombre=inputpNombre.value;
let sTelefono=inputpTelefono.value;
let sCorreo=inputpCorreo.value;
let sEncargado=inputpEncargodo.value;
 let elementosCheckeados=document.querySelectorAll('input[type=checkbox]:checked');
let checkeados = [];

 for (let i = 0; i < elementosCheckeados.length; i++) {
          checkeados.push(elementosCheckeados[i].name);
}
aNuevoProveedor.push(sCedula,sNombre,sTelefono,sCorreo,sEncargado,checkeados,true);  
  
return aNuevoProveedor;

 }
function agregarproeveedor(){
  let datosproveedor=obtenerDatosRegistroProveedor();

  if (validarcampo()){
     registrarProveedores(datosproveedor);

      llenarTablaProveedores();
      cerrar();
  }
}
     
function llenarTablaProveedores(pFiltro){
 let cuerpoTablaProveedor=document.querySelector('#tblProveedores tbody');
	  cuerpoTablaProveedor.innerHTML="";
 let listaProveedores;
            if(pFiltro==undefined ){
         listaProveedores=obtenerListaProveedores();
      }else{
        listaProveedores=obtenerListaProveedoresFiltrada(pFiltro);
      }


        for(let i=0; i <listaProveedores.length; i++){
          if(listaProveedores[i][6]){
   	let fila=cuerpoTablaProveedor.insertRow();
    

        let columnaCedula=fila.insertCell();
        let columnaNombre=fila.insertCell();
       let columnaTelefono=fila.insertCell();
       let columnaCorreo=fila.insertCell();
        let columnaEncargado=fila.insertCell();
       let columnaCatagoria=fila.insertCell();
   	  let columnaConfiguracion=fila.insertCell();

          //creacion de botones
   	    let btnEditar=document.createElement('a');
                btnEditar.id=listaProveedores[i][0];
                btnEditar.classList.add('fa');
                btnEditar.classList.add('fa-pencil');
                btnEditar.classList.add('botonEditar');
               btnEditar.addEventListener('click',verDatos);
                columnaConfiguracion.appendChild(btnEditar);

    
            
               

            columnaCedula.innerHTML=listaProveedores[i][0];
         columnaNombre.innerHTML=listaProveedores[i][1];
        columnaTelefono.innerHTML=listaProveedores[i][2];
        columnaCorreo.innerHTML=listaProveedores[i][3];
         columnaEncargado.innerHTML=listaProveedores[i][4];
            let checkeados=listaProveedores[i][5];
         for (let i = 0; i < checkeados.length; i++) {
          
          columnaCatagoria.innerHTML+=" "+checkeados[i];
             
         }
            //   columnaCatagoria.innerHTML=listaProveedores[i][5];
        }  
   
     }  
 }  

function verDatos(){
  guardartemporal(this.id);

  window.location.href = "proveedor.html";

  //document.querySelector('#btnRegistrarProveedor').addEventListener('click',guardarProveedor);
}


function validarhtml(){
  if((window.location.href).includes('proveedor')){
    llenarModal();
    document.querySelector('#modal').classList.add('ocultar');
  }
 if((window.location.href).includes('registrar')){
      llenarTablaProveedores();
 } 
}
/*function validarpagina(){
  //if((window.location.href).includes('proveedor')){
        let temporal=obtenertemporal();
        //if(temporal!==""||temporal!==undefined){
          llenarModal();
        //}
   //}
}*/
function llenarModal(){
  let lista=obtenertemporal();
  
     

            document.querySelector('#inputpCedula').value=lista[0];
            document.querySelector('#inputpNombre').value=lista[1];
            document.querySelector('#inputpTelefono').value=lista[2];
            document.querySelector('#inputpCorreo').value=lista[3];
            document.querySelector('#inputpEncargodo').value=lista[4];


    //  for(let i=0;i<arraycheckeados.length;i++){
         /* for(let j=0;j<checkbox.length;j++){
            arraycheckeados[i]=checkbox[j].name;
            
            
          }*/ 
         // console.log('listo');
      // }
 
         
}



function guardarProveedor(){
    let datosactualizados=obtenerDatosRegistroProveedor();
    
  if (validarcampo()){
     actualizarListaProveedoresPorCod(datosactualizados);
       window.location.href='registrarProveedor.html';
  }

}


function  modificar(){
let titulo=document.querySelector('#Titulo');
titulo.innerHTML="";
titulo.appendChild(document.createTextNode("Modifcar Proveedor"));
btnRegistrarProveedor.classList.remove('error');
btncerrar.value="Cancelar";
btnRegistrarProveedor.value="Guardar"

       
   }
 function deshabilitar(){
   
  
        document.querySelector('#modalwarning').classList.remove('ocultar');
        btnCancelar.addEventListener('click',cerrarModal)
        btndeshabilitar.addEventListener('click',eliminar);
   
}
// realiza la deshabilitacion.
function eliminar() {
    let proveedor=obtenerDatosRegistroProveedor();
    proveedor[0]=document.querySelector('#inputpCedula').value;
    proveedor[6]=false;
    actualizarListaProveedoresPorCod(proveedor);
   limpiar();
   cerrarModal();
     window.location.href = "registrarProveedor.html";
     
}

/*la siguiente funcion es para dejar en limpio el formulario*/
function limpiar(){
form.reset();  

}

function deshabilitarInput() {
    document.querySelector('#inputpCedula').disabled=true;
    document.querySelector('#inputpNombre').disabled=true;
     document.querySelector('#inputpTelefono').disabled=true;
   document.querySelector('#inputpCorreo').disabled=true;
  document.querySelector('#inputpEncargodo').disabled=true;

 document.querySelector('#Bolsos').disabled=true;
 document.querySelector('#Libros').disabled=true;
  document.querySelector('#Uniformesdefisica').disabled=true;
document.querySelector('#Arte').disabled=true;
document.querySelector('#cuadernos').disabled=true;
 document.querySelector('#UniformesFormales').disabled=true;
document.querySelector('#Herramientas').disabled=true;


}   

//habilita los input del formulario
function habilitarInput() {
      
    document.querySelector('#inputpNombre').disabled=true;
     document.querySelector('#inputpTelefono').disabled=true;
   document.querySelector('#inputpCorreo').disabled=true;
  document.querySelector('#inputpEncargodo').disabled=true;

 document.querySelector('#Bolsos').disabled=false;
 document.querySelector('#Libros').disabled=false;
  document.querySelector('#Uniformesdefisica').disabled=false;
document.querySelector('#Arte').disabled=false;
document.querySelector('#cuadernos').disabled=false;
 document.querySelector('#UniformesFormales').disabled=false;
document.querySelector('#Herramientas').disabled=false;

    
}  


