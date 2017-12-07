

let  inputNombre = document.querySelector('#txtNombre');
let inputSegundoNombre=document.querySelector('#txtSegundoNombre');
let inputApellido = document.querySelector('#txtApellido');
let inputSegundoApellido=document.querySelector('#txtSegundoApellido');
let inputIdentificacion= document.querySelector('#txtIdentificacion');
let inputFechaNacimiento = document.querySelector('#txtFechaNacimiento');
let inputGenero = document.querySelector('input[name= genero]:checked');
let inputTelefono = document.querySelector('#txtTelefono');
let inputCorreo = document.querySelector('#txtCorreo');
let inputFoto = document.querySelector('#txtFoto');
let btnok=document.querySelector('#ok');
let inputInstitucion =  document.querySelector('#txtInstitucion');

let imagen=document.querySelector('#mostrar');
//let inputNivel = document.querySelector('#txtNivel');
//let inputSeccion =  document.querySelector('#txtSeccion');
let botonRegistar = document.querySelector('#btnRegistrar');

//modal para el feedback y warning
document.querySelector('#modal').classList.add('ocultar');
btnAceptar.addEventListener('click',cerrarModal);
//btnCerrar.addEventListener('click',irPagina)
document.querySelector('#feedback').classList.add('ocultar');
//btnok.addEventListener('click',irPagina);

//imagen
imagen.addEventListener('change',guardarImagen);


function irPagina(){
	window.location.href = "agregar-articulo.html"    
	
  }

botonRegistar.addEventListener('click', obtenerDatosRegistro);
agregarInstitucion();
//llenarColes();
 



//función para validar el campo y mostrar un modal
function validarcampo2(){
	let formulario=[];
	     inputNombre = document.querySelector('#txtNombre');
	    inputSegundoNombre=document.querySelector('#txtSegundoNombre');
       inputApellido = document.querySelector('#txtApellido');
	     inputSegundoApellido=document.querySelector('#txtSegundoApellido');
	    inputIdentificacion= document.querySelector('#txtIdentificacion');
	     inputFechaNacimiento = document.querySelector('#txtFechaNacimiento');
	    inputGenero = document.querySelector('input[name= genero]:checked');
	    inputTelefono = document.querySelector('#txtTelefono');
	     inputCorreo = document.querySelector('#txtCorreo');
	     inputInstitucion =  document.querySelector('#txtInstitucion');
	    formulario=[inputNombre,inputSegundoNombre,inputApellido,inputSegundoApellido,inputIdentificacion,
		inputFechaNacimiento,inputGenero,inputTelefono,inputCorreo,inputInstitucion];
	let lleno=true;
	
	
	 for ( vacio= 0; vacio <formulario.length; vacio++) {
		  if (formulario[vacio].value==""){
			   
		   formulario[vacio].classList.add('error'); 
				 lleno=false;
				 document.querySelector('#modal').classList.remove('ocultar');
				 
	  }else{
	   formulario[vacio].classList.remove('error');
	   formulario.length==lleno;
		 
		  }
	
		}
		
	
		  return lleno;
	} 

// esta es la función para registrar un estudiante

function obtenerDatosRegistro(){
	let anuevoUsuario=[];
	let scontraseña=Number(inputIdentificacion.value);
	let nRol=4;
	let pEstado=1;	
	let aNuevoDirector= [];

	let sNombre = inputNombre.value;
	let sSegundoNombre=inputSegundoNombre.value;
	let sApellido = inputApellido.value;
	let sSegundoApellido=inputSegundoApellido.value;
	let nIdentificacion = Number(inputIdentificacion.value);
	let dFechaNacimiento = inputFechaNacimiento.value;
	let sGenero = document.querySelector('input[name= genero]:checked').value;
	let nTelefono = inputTelefono.value;
	let sCorreo= inputCorreo.value;
	let scodigo=Number(inputIdentificacion.value);
	let  imagen=enviarURL();
	let sInstitucion = inputInstitucion.options[inputInstitucion.selectedIndex].value;
	//let sNivel = inputNivel.value;
	//let sSeccion = inputSeccion.value;



	if(validarcampo2()){


	aNuevoDirector.push(scodigo,sNombre,sSegundoNombre,sApellido,sSegundoApellido, nIdentificacion, dFechaNacimiento, 
	 sGenero, nTelefono, sCorreo, imagen, sInstitucion);
	registrarDirector(aNuevoDirector);
	anuevoUsuario.push(nIdentificacion,sCorreo,scontraseña,nRol,pEstado);
	registrarUsuario(anuevoUsuario);
	
	limpiar();
}
} 
//función cerrarmodal
function cerrarModal(){
	document.querySelector('#modal').classList.add('ocultar');
	document.querySelector('#feedback').classList.add('ocultar');
  }


//esta es la funcion que me permite validar campos vacios//

function validadarFormulario(){

	let errorMsg=''; 
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



	if(inputTelefono.value=='') {

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

	

	if(inputFoto.value=='') {

		inputFoto.classList.add('bordeError');
		bError=true;
}
	//else{ 
	//	inputFoto.classList.remove('bordeError');
//}

	

	if(inputInstitucion.value=='') {

		inputInstitucion.classList.add('bordeError');
		bError=true;

	}else{ 
		inputInstitucion.classList.remove('bordeError');
}



		/*if(inputNivel.value=='') {

		inputNivel.classList.add('bordeError');
		bError=true;

	}else{ 
		inputNivel.classList.remove('bordeError');
}

	
	if(inputSeccion.value=='') {

		inputSeccion.classList.add('bordeError');
		bError=true;

	}else{ 
		inputSeccion.classList.remove('bordeError');
}

	return bError;*/

}


function limpiar(){

	inputNombre.value='';
	inputSegundoNombre.value='';
	inputApellido.value="";
	inputSegundoApellido.value='';
	inputIdentificacion.value="";
 	inputFechaNacimiento.value="";
 	inputTelefono.value='';
 	inputCorreo.value='';
 	inputInstitucion.value='';
 	//inputNivel.value='';
 	//inputSeccion.value='';


}

function llenar(){
	inputNombre.value='susana';
	inputApellido.value="mora";
	inputIdentificacion.value="322565241";
 	inputFechaNacimiento.value="2000-02-02";
 	inputTelefono.value='45693214';
 	inputCorreo.value='isa@gmailcom';
 	inputFoto.value="";
 	inputInstitucion.value='escuela2';
 	//inputNivel.value='Primero';
 	//inputSeccion.value='B';

}

function guardarImagen() {
    let imagen = document.querySelector("#txtFoto").files[0];
    if(document.querySelector("#txtFoto").files[0].size<1000000){
        let reader = new FileReader();
        reader.addEventListener("load", function () 
            {
                inputFoto=reader.result;

                // preview.value=preview.src;
            }
        );
        if(imagen){
            reader.readAsDataURL(imagen);    
        }
    // fImg=document.querySelector('#fImg');
   // }
}



}
//funcion para obtener las instituciones y 
function agregarInstitucion(){
	let institucion=[];
	let  txtInstitucion =document.querySelector('#txtInstitucion');
	txtInstitucion.innerHTML="";
	 institucion=obtenerinstitucion();
	
		for(let i=0;i<institucion.length;i++){
		  let option=document.createElement('option');
		  option.innerText=institucion[i]['nombre'];
		  txtInstitucion.add(option);
		}
	   
	}
/*******************************Arturo **********************************/

/*function llenarColes() {
	let coles=obtenerListaInstituciones();
	for(let i=0;i<coles.length;i++){
		if(coles[i][11] && validarPuesto(coles[i][0]) ){
			let coleX=document.createElement('option');
			coleX.value=coles[i][0];
			coleX.innerHTML=coles[i][1];

			inputInstitucion.appendChild(coleX);

		}
	}	
}*/

/*function validarPuesto(pcole) {
	let directores=obtenerListaDirectores();
	let libre=true;
	for(let i=0;i<directores.length;i++){
		if(pcole==directores[i][8])
		libre=false;
	}

	return libre;
}*/
