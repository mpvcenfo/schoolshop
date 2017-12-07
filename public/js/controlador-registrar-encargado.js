

let inputNombre = document.querySelector('#txtNombre');
let inputSegundoNombre= document.querySelector('#txtSegundoNombre');
let inputApellido = document.querySelector('#txtApellido');
let inputSegundoApellido= document.querySelector('#txtSegundoApellido');
let inputIdentificacion= document.querySelector('#txtIdentificacion');
let inputFechaNacimiento = document.querySelector('#txtFechaNacimiento');
let inputEstadoCivil= document.querySelector('#txtEstadoCivil');
let inputGenero = document.querySelector('input[name= genero]:checked');
let inputTelefono = document.querySelector('#txtTelefono');
let inputCorreo = document.querySelector('#txtCorreo');
let inputDireccion= document.querySelector('#txtDireccion');
let inputParentesco = document.querySelector('#txtParentesco');

let botonRegistar = document.querySelector('#btnRegistrar');


botonRegistar.addEventListener('click', obtenerDatosRegistro);

document.querySelector('#modal').classList.add('ocultar');
btnAceptar.addEventListener('click',cerrarModal);

document.querySelector('#feedback').classList.add('ocultar');
// esta es la función para registrar un estudiante

function obtenerDatosRegistro(){
	let anuevoUsuario=[];
	let scontraseña=Number(inputIdentificacion.value);
	let aNuevoEncargado=[];
	 let nCodigo=1;
	let sNombre = inputNombre.value;
	let sSegundoNombre= inputSegundoNombre.value;
	let sApellido = inputApellido.value;
	let sSegundoApellido= inputSegundoApellido.value;
	let nIdentificacion = Number(inputIdentificacion.value);
	let dFechaNacimiento =inputFechaNacimiento.value;
	let sEstadoCivil = inputEstadoCivil.value;
	let sGenero = inputGenero.value;
	let nTelefono = inputTelefono.value;
	let sCorreo= inputCorreo.value;
	let sDireccion= inputDireccion.value;
	let sParentesco= inputParentesco.value;
	let nRol=4;
	let pEstado=1;
	if(validarCampo()){ 
		
//aNuevoEncargado.push(sNombre, sSegundoNombre,sApellido,sSegundoApellido, nIdentificacion, dFechaNacimiento, 
//sEstadoCivil, sGenero, nTelefono, sCorreo, sDireccion, sParentesco);

	
		aNuevoEncargado.push(sNombre, sSegundoNombre,sApellido,sSegundoApellido, nIdentificacion, dFechaNacimiento, 
		 sEstadoCivil, sGenero, nTelefono, sCorreo, sDireccion, sParentesco);

		 //para registrar al encargado en tusuarios
		anuevoUsuario.push(nIdentificacion,sCorreo,scontraseña,nRol,pEstado);
		 
		registrarEncargado(aNuevoEncargado);
		registrarUsuario(anuevoUsuario);
		limpiar();
	}


}
function cerrarModal(){
	document.querySelector('#modal').classList.add('ocultar');
	document.querySelector('#feedback').classList.add('ocultar');
  }

//esta es la funcion que me permite validar campos vacios//

//btnRegistrar.addEventListener('click', validadarFormulario);

function validarCampo(){
	let lleno=true;
        inputNombre = document.querySelector('#txtNombre');
	    inputSegundoNombre=document.querySelector('#txtSegundoNombre');
	     inputApellido = document.querySelector('#txtApellido');
	    inputSegundoApellido= document.querySelector('#txtSegundoApellido');
	     inputIdentificacion= document.querySelector('#txtIdentificacion');
	     inputFechaNacimiento = document.querySelector('#txtFechaNacimiento');
	    inputEstadoCivil= document.querySelector('#txtEstadoCivil');
	    inputGenero = document.querySelector('input[name= genero]:checked');
        inputTelefono = document.querySelector('#txtTelefono');
	     inputCorreo = document.querySelector('#txtCorreo');
	    inputDireccion= document.querySelector('#txtDireccion');
	    inputParentesco = document.querySelector('#txtParentesco');
	

let formulario=[];
	   formulario=[inputNombre,inputApellido,inputSegundoApellido,inputIdentificacion,inputFechaNacimiento,inputGenero,inputEstadoCivil,inputTelefono,inputCorreo,inputDireccion,inputParentesco];

for ( vacio= 0; vacio <formulario.length; vacio++) {
   if (formulario[vacio].value==""){
		
	formulario[vacio].classList.add('bordeError'); 
		  lleno=false;
		  document.querySelector('#modal').classList.remove('ocultar');
		  
}else{
formulario[vacio].classList.remove('bordeError');
formulario.length==lleno;
  
   }

 }
 

   return lleno;
} 



function validadarFormulario(){

	let errorMsg=''; 
	//texNode=
	let bError=false;


	if(inputNombre.value=='') {

		inputNombre.classList.add('bordeError');
		errorMsg='Debe escribir un nombre';
		bError=true;

	}else{ 
		inputNombre.classList.remove('bordeError');
	}




	if(inputApellido.value=='') {

		inputApellido.classList.add('bordeError');
		bError=true;

	}else{ 
		inputApellido.classList.remove('bordeError');
	}

	if (inputSegundoApellido.value=='') {
		inputSegundoApellido.classList.add('bordeError');
		bError=true;
	}else{
		inputSegundoApellido.classList.remove('bordeError');
	}
	


	if(inputIdentificacion.value==''){

		inputIdentificacion.classList.add('bordeError');
		bError=true;
	}else{

		inputIdentificacion.classList.remove('bordeError');

	}


	if(inputFechaNacimiento.value=='') {

		inputFechaNacimiento.classList.add('bordeError');
		bError=true;

	}else{ 
		inputFechaNacimiento.classList.remove('bordeError');
}





	if(inputEstadoCivil.value=='') {

		inputEstadoCivil.classList.add('bordeError');
		bError=true;

	}else{ 
		inputEstadoCivil.classList.remove('bordeError');
}


	if (inputTelefono.value=='') {

		inputTelefono.classList.add('bordeError');
		bError=true;
	}else{

		inputTelefono.classList.remove('bordeError');

	}



	if(inputCorreo.value=='') {

		inputCorreo.classList.add('bordeError');
		bError=true;

	}else{ 
		inputCorreo.classList.remove('bordeError');
	}


	if (inputDireccion.value=='') {
		inputDireccion.classList.add('bordeError');
		bError=true;

	}else{
		inputDireccion.classList.remove('bordeError');

	}

		
	if (inputParentesco.value=='') {

		inputParentesco.classList.add('bordeError');
		bError=true;
	}else{

		inputParentesco.classList.remove('bordeError');

	}

	return bError;
}

/*funcion para dejar los campos en blanco*/


function limpiar(){
 inputNombre.value="";
 inputSegundoNombre.value="";
 inputApellido.value="";
 inputSegundoApellido.value="";
 inputIdentificacion.value="";
 inputFechaNacimiento.value="";
 inputEstadoCivil.value="";
 inputTelefono.value="";
 inputCorreo.value="";
 inputDireccion.value="";
 inputParentesco.value="";



}

function llenar(){

	inputNombre.value="mario";
 inputApellido.value="vargas";
 inputIdentificacion.value="110480256";
 inputFechaNacimiento.value="2000-12-12";
 inputEstadoCivil.value="Soltero";
 inputTelefono.value="55441122";
 inputCorreo.value="casa@gmail.com";
 inputDireccion.value="mingo";
 inputParentesco.value="tio";




}

