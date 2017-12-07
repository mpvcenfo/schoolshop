/********************************************************************************************JS Registro Institucion */
let txtNombre = document.querySelector('#txtNombre');
let txtNombre2 = document.querySelector('#txtNombre2');
let txtApellido = document.querySelector('#txtApellido');
let txtApellido2 = document.querySelector('#txtApellido2');
let txtDireccion = document.querySelector('#txtDireccion');
let txtLat = document.querySelector('#txtLat');
let txtLon = document.querySelector('#txtLon');
let txtNombreContacto = document.querySelector('#txtNombreContacto');
let nTelefonoContacto = document.querySelector('#nTelefonoContacto');
let nNiveles = document.querySelector('#nNiveles');
let nSecciones = document.querySelector('#nSecciones');
let txtCorreo = document.querySelector('#txtCorreo');
let fImg = document.querySelector('#fImg');
let btnRegistrar = document.querySelector('#btnRegistrar');
let btnCancelar = document.querySelector('#btnCancelar');

let formInstitucion =document.querySelector('#formInstitucion');

btnRegistrar.addEventListener('click',registrarInstitucion);

//junta los datos de input en un array y los devuelve como variable
function juntarDatos(){
    let datos=[];
    let sNombre=txtNombre.value;
    let sNombre2=txtNombre2.value;
    let sApellido=txtApellido.value;
    let sApellido2=txtApellido2.value;
    let sDireccion=txtDireccion.value;
    let sLat=txtLat.value;
    let sLon=txtLon.value;
    let sNombreContacto=txtNombreContacto.value;
    let numTelefonoContacto=nTelefonoContacto.value;
    let numNiveles=nNiveles.value;
    let numSecciones=nSecciones.value;
    let imagen=fImg.value;
    datos.push(sNombre,sNombre2,sApellido,sApellido2,sDireccion,sLat,sLon,sNombreContacto,numTelefonoContacto,numNiveles,numSecciones,imagen,true);
    return datos;
}


//Guarda los datos ingresados al localS, limpia los campos al final
function guardarInstitucion(){
    //validar datos
    let datosInstitucion=juntarDatos();

    registrarInstitucion(datosInstitucion);
    limpiar();

}






function limpiar(){
    formInstitucion.reset();
  }


/******************************************************************************************** Fin JS Registro Institucion */

// let inputCodigo = document.querySelector('#txtCodigo');
// let inputNombre = document.querySelector('#txtNombre');
// let inputPrecio = document.querySelector('#txtPrecio');
// let inputFlitro = document.querySelector('#txtFiltro');
// let btnRegistrar=document.querySelector('#btnRegistrar');
// let btnActualizar=document.querySelector('#btnActualizar');

// btnActualizar.classList.add('ocultar');

// btnRegistrar.addEventListener('click',obtenerDatosRegistro);
// btnActualizar.addEventListener('click',btnActualizarDatos);

// inputFlitro.addEventListener('keyup',filtrar);






// function obtenerDatosRegistro(){
//   //si la validacion es correcta lee los datos
//   let aNuevoArticulo=[];
//   let sCodigo=inputCodigo.value;
//   let sNombre=inputNombre.value;
//   let nPrecio=Number(inputPrecio.value);
  
//   aNuevoArticulo.push(sCodigo,sNombre,nPrecio);
//   registrarArticulo(aNuevoArticulo);
//   llenarTablaArticulos('');
//   limpiar();
// }


// function llenarTablaArticulos(psFiltro){

//   let cuerpoTabla=document.querySelector('#tblArticulos tbody')
  
//   cuerpoTabla.innerHTML='';
//    let listaArticulos=[];
//   if(psFiltro==''){
// 	  listaArticulos=obtenerListaArticulos();
//   }
//   else{
// 	  listaArticulos=obtenerListaArticulosFiltrada(psFiltro);
//   }
	
	
//   for(let i=0;i<listaArticulos.length;i++){
// 		let fila=cuerpoTabla.insertRow(i);
		
// 		let columnaConfiguracion=fila.insertCell();
// 		let columnaCodigo=fila.insertCell();
// 		let columnaNombre=fila.insertCell();
// 		let columnaPrecio=fila.insertCell();
		
// 		//Creacion de los botones de editar y deshabilitar//
		
// 		let btnEditar=document.createElement('a');
// 		btnEditar.dataset.CodArt=listaArticulos[i][0];
// 		btnEditar.classList.add('fa');
// 		btnEditar.classList.add('fa-pencil');
// 		btnEditar.classList.add('botonEditar');
// 		btnEditar.addEventListener('click', btnEditarDatos);
		
// 		columnaConfiguracion.appendChild(btnEditar);
// 		let btnDeshabilitar = document.createElement('a');
		
// 		btnDeshabilitar.dataset.CodArt=listaArticulos[i][0];
// 		btnDeshabilitar.classList.add('fa');
// 		btnDeshabilitar.classList.add('fa-trash');
// 		btnDeshabilitar.classList.add('botonDeshabilitar');
// 		columnaConfiguracion.appendChild(btnDeshabilitar);


		
// 		columnaCodigo.innerHTML=listaArticulos[i][0];
// 		columnaNombre.innerHTML=listaArticulos[i][1];
// 		columnaPrecio.innerHTML=listaArticulos[i][2];
		
//   }
  
// }
// function filtrar(){
// 	let sFiltro=inputFlitro.value;
// 	llenarTablaArticulos(sFiltro);
// }

// function btnEditarDatos() {
// 	let CodArt=this.dataset.CodArt
// 	let articuloEncontrado= buscarDatosPorCod(CodArt);
// 	btnRegistrar.classList.add('ocultar');
// 	btnActualizar.classList.remove('ocultar');
// 	colocarDatos(articuloEncontrado);
// 	inputCodigo.disabled=true;
	

// }

// function buscarDatosPorCod(pCod){
// 	let articuloEncontrado=[];
// 	let listaArticulos=obtenerListaArticulos();
// 	for(let i=0;i<listaArticulos.length;i++){
// 		if(pCod==listaArticulos[i][0]){
// 			articuloEncontrado=listaArticulos[i];
// 		}
// 	}
// 	return articuloEncontrado;

// }

// function colocarDatos(pDatos){
// 	inputCodigo.value=pDatos[0];
// 	inputNombre.value=pDatos[1];
// 	inputPrecio.value=pDatos[2];
// }


// function btnActualizarDatos(){
// 	let DatoOriginal= buscarDatosPorCod(inputCodigo.value);
// 	DatoOriginal[1]=inputNombre.value;
// 	DatoOriginal[2]=inputPrecio.value;
// 	actualizarListaArticulosPorCod(DatoOriginal);
// 	btnRegistrar.classList.remove('ocultar');
// 	btnActualizar.classList.add('ocultar');
// 	inputCodigo.disabled=false;
// 	llenarTablaArticulos('');
// 	limpiar();

// }

// function EliminarArticulo(){


// 	EliminarRegistro
// }

// function limpiar(){
//   inputCodigo.value='';
//   inputNombre.value='';
//   inputPrecio.value=0;
// }
