/*Estas variables son para el modal*/
llenarTabblaEstudiantesBecados();
let rProveedor=document.querySelector('#rProveedor');
let btnAgregar=document.querySelector('#btnAgregar');
let btncerrar =document.querySelector('#btnCerrar');
let btnRegistrarProveedor=document.querySelector('#btnRegistrarProveedor');
let inputFiltro=document.querySelector('#txtFiltro');



     
function llenarTabblaEstudiantesBecados(sFiltro){
 let cuerporeporte=document.querySelector('#tblBecados tbody');
	  cuerporeporte.innerHTML="";
 let listaProveedores=[];
           if(pFiltro==undefined ){
         cuerporeporte=obtenerListaArticulos();
      }else{
        tablaArticulos=obtenerListaEstudianteFiltrada(pFiltro);
      }

        for(let i=0; i <cuerporeporte.length; i++){
          
    	let fila=cuerporeporte.insertRow(i);
    

        let columnaNombre=fila.insertCell();
       let columnaSeccion=fila.insertCell();
    
        let columnaEncargado=fila.insertCell();
        let columnaColegio=fila.insertCell();

               

            
         columnaNombre.innerHTML=listaProveedores[i][1];
        columnaSeccion.innerHTML=listaProveedores[i][2];
    
         columnaEncargado.innerHTML=listaProveedores[i][4];
         olumnaColegio=fila.innerHTML=listaProveedores[i][5];
         
           
   }  
   
     
 }  

function filtrar(){

    let sFiltro=inputFiltro.value.toLowerCase();
    llenarTabblaEstudiantesBecados(sFiltro);
} 






