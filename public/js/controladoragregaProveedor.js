/*Estas variables son para el modal*/

let rProveedor=document.querySelector('#rProveedor');
let btnAgregar=document.querySelector('#btnAgregar');
let btncerrar =document.querySelector('#btnCerrar');
let btnRegistrarProveedor=document.querySelector('#btnRegistrarProveedor');
let inputFiltro=document.querySelector('#txtFiltro');
let btnAceptar=document.querySelector('#btnAceptar');
/**/
/*las siguientes variables son para extrar el valor de los inputs*/

inputpCedula=document.querySelector('#inputpCedula');
inputpNombre=document.querySelector('#inputpNombre');
inputpTelefono=document.querySelector('#inputpTelefono');
inputpCorreo=document.querySelector('#inputpCorreo');
inputpEncargodo=document.querySelector('#inputpEncargodo');
let form=document.querySelector('#formularioProveedor')

let aCategorias =['Bolsos','Libros','Uniformes', 'Arte','Cuaderno','Uniformes Formales','Herramientas'];

let formulario=[inputpCedula,inputpNombre,inputpTelefono,inputpCorreo,inputpEncargodo];

inputBolsos=document.querySelector('#Bolsos').checked;
inputLibros=document.querySelector('#Libros').checked;
inputUniformes=document.querySelector('#Uniformesdefisica').checked;
inputArte=document.querySelector('#Arte').checked;
inputCuaderno=document.querySelector('#Cuadernos');
inputUniformesFormales=document.querySelector('#UniformesFormales').checked;
inputHerramientas=document.querySelector('#Herramientas').checked;
let cuerpoTablaProveedor=document.querySelector('#tblProveedores tbody');
let inputsCategorias=[inputBolsos,inputLibros,inputUniformes, inputArte,inputCuaderno,inputUniformesFormales,inputHerramientas];
let divcasillas=document.querySelector('#casillas');
/**/
document.querySelector('#btnRegistrarProveedor').addEventListener('click',agregarproeveedor);
document.querySelector('#btnCerrar').addEventListener('click',cerrar);
btnAceptar.addEventListener('click',cerrarModal);
document.querySelector('#modal').classList.add('ocultar');

/*function Abrir(){

document.querySelector('#btnRegistrarProveedor').removeEventListener('click',eliminar);
 document.querySelector('#btnRegistrarProveedor').addEventListener('click',agregarproeveedor);
rProveedor.style.display = "block";
 
let formulario=[inputpCedula,inputpNombre,inputpTelefono,inputpCorreo,inputpEncargodo];


 for ( vacio= 0; vacio <formulario.length; vacio++) {
  if (formulario[vacio].value==""){
       formulario[vacio].classList.remove('error'); 
   
    }

  }

}*/
function cerrar(){
  limpiar();
 rProveedor.style.display = "none";
 let titulo=document.querySelector('#Titulo');
titulo.innerHTML="";
titulo.appendChild(document.createTextNode("Agregar Proveedor"));
btnRegistrarProveedor.classList.remove('ocultarAgregar');
btncerrar.value="Cancelar";
btnRegistrarProveedor.value="Agregar";

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
function cerrarModal(){
  document.querySelector('#modal').classList.add('ocultar');
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
     limpiar();
      llenarTablaProveedores();
   
      cerrar();
  }
}
     
function llenarTablaProveedores(){
 let cuerpoTablaProveedor=document.querySelector('#tblProveedores tbody');
	  cuerpoTablaProveedor.innerHTML="";
 let listaProveedores=obtenerListaProveedores();


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

      let btnDeshabilitar=document.createElement('a');
                btnDeshabilitar.id=listaProveedores[i][0];
                btnDeshabilitar.classList.add('fa');
                btnDeshabilitar.classList.add('fa-trash');
                 btnDeshabilitar.classList.add('botonDeshabilitar');
                btnDeshabilitar.addEventListener('click',deshabilitar);
               columnaConfiguracion.appendChild(btnDeshabilitar);
               

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
  window.location.href = "proveedor.html"    
  guardartemporal(this.id);
      modificar();
      
   llenarModal(this.id);
   document.querySelector('#btnRegistrarProveedor').removeEventListener('click',agregarproeveedor);
document.querySelector('#btnRegistrarProveedor').addEventListener('click',guardarProveedor);

}

function guardarProveedor(){
    let datosactualizados=obtenerDatosRegistroProveedor();
    
  if (validarcampo()){
     actualizarListaProveedoresPorCod(datosactualizados);
     llenarTablaProveedores();
      limpiar();
      cerrar();
  }

}

function llenarModal(pid){
   let lista=obtenerListaProveedoresCodigo(pid);
    for(let i=0;i<lista.length;i++){
        if(pid==lista[0]){

         document.querySelector('#inputpCedula').value=lista[0];
    document.querySelector('#inputpNombre').value=lista[1];
     document.querySelector('#inputpTelefono').value=lista[2];
   document.querySelector('#inputpCorreo').value=lista[3];
  document.querySelector('#inputpEncargodo').value=lista[4];



   
        }
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
    Abrir();
    llenarModal(this.id);
  
    let titulo=document.querySelector('#Titulo');
    titulo.innerHTML="";
    titulo.appendChild(document.createTextNode("Deshabilitar Proveedor"));
    btnRegistrarProveedor.classList.remove('ocultarAgregar');
    btnRegistrarProveedor.value="Deshabilitar";
    btnRegistrarProveedor.classList.add('error');
    btncerrar.value="Cancelar";
  

     document.querySelector('#btnRegistrarProveedor').removeEventListener('click',guardarProveedor);
    btnRegistrarProveedor.addEventListener('click',eliminar);
   
}
// realiza la deshabilitacion.
function eliminar() {
    let proveedor=obtenerDatosRegistroProveedor();
    proveedor[0]=document.querySelector('#inputpCedula').value;
    proveedor[6]=false;
    actualizarListaProveedoresPorCod(proveedor);
    llenarTablaProveedores();
      limpiar();
      cerrar();
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


