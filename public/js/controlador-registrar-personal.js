

let inputNombre = document.querySelector('#txtNombre');
let inputSegundoNombre= document.querySelector('#txtSegundoNombre');
let inputApellido = document.querySelector('#txtApellido');
let inputSegundoApellido= document.querySelector('#txtSegundoApellido');
let inputIdentificacion= document.querySelector('#txtIdentificacion');
let inputFechaNacimiento = document.querySelector('#txtFechaNacimiento');
//let inputGenero = document.querySelector('input[name= genero]:checked');
let inputTelefono = document.querySelector('#txtTelefono');
let inputCorreo = document.querySelector('#txtCorreo');
let inputPuesto=document.querySelector('input[name= puesto]:checked');
let inputGradoAcademico=document.querySelector('#txtGradoAcademico');
let inputInstitucion =  document.querySelector('#txtInstitucion');
let inputNivel = document.querySelector('#txtNivel');
let inputSeccion =  document.querySelector('#txtSeccion');
let imagen =document.querySelector('#mostrar');
let botonRegistar = document.querySelector('#btnRegistrar');
//asignarCole();

document.querySelector('#modal').classList.add('ocultar');
btnAceptar.addEventListener('click',cerrarModal);

document.querySelector('#feedback').classList.add('ocultar');

//inputFoto.addEventListener('change',guardarImagen);

botonRegistar.addEventListener('click', obtenerDatosRegistro);
agregarInstitucion();

//function to close the modal 
function cerrarModal(){
	document.querySelector('#modal').classList.add('ocultar');
	document.querySelector('#feedback').classList.add('ocultar');
  }


// esta es la función para registrar un estudiante

function obtenerDatosRegistro(){
  let anuevoUsuario=[];
	let aNuevoPersonal= [];
	
	let sNombre = inputNombre.value;
	let sSegundoNombre= inputSegundoNombre.value;
	let sApellido = inputApellido.value;
	let sSegundoApellido=inputSegundoApellido.value;
	let nIdentificacion = Number(inputIdentificacion.value);
	let dFechaNacimiento = inputFechaNacimiento.value;
	let sGenero = document.querySelector('input[name= genero]:checked').value;
	let nTelefono = inputTelefono.value;
	let sCorreo= inputCorreo.value;
	let sGradoAcademico=inputGradoAcademico.value;
	let sFoto =enviarURL();
	let sInstitucion = inputInstitucion.options[inputInstitucion.selectedIndex].value;
	let sNivel = inputNivel.value;
	let sSeccion = inputSeccion.value;
	let scontraseña=Number(inputIdentificacion.value);
	let nRol=2;
	let pEstado=1;
	
if(validarCampo()){

	aNuevoPersonal.push(sNombre,sSegundoNombre ,sApellido,sSegundoApellido, nIdentificacion, dFechaNacimiento, 
	 sGenero, nTelefono, sCorreo, sGradoAcademico, sFoto, sInstitucion,sNivel, sSeccion);

	 anuevoUsuario.push(nIdentificacion,sCorreo,scontraseña,nRol,pEstado);
	 
	 registrarPersonal(aNuevoPersonal);

	 registrarUsuario(anuevoUsuario);

	limpiar();
 }
}

//esta es la funcion que me permite validar campos vacios//

function validarCampo(){
	let lleno=true;
        inputNombre = document.querySelector('#txtNombre');
	    inputSegundoNombre= document.querySelector('#txtSegundoNombre');
	      inputApellido = document.querySelector('#txtApellido');
         inputSegundoApellido= document.querySelector('#txtSegundoApellido');
	    inputIdentificacion= document.querySelector('#txtIdentificacion');
	     inputFechaNacimiento = document.querySelector('#txtFechaNacimiento');
		 inputGenero = document.querySelector('input[name= genero]:checked'); 
		  inputTelefono = document.querySelector('#txtTelefono');
	       inputCorreo = document.querySelector('#txtCorreo');
	    inputGradoAcademico=document.querySelector('#txtGradoAcademico');
	   inputInstitucion =  document.querySelector('#txtInstitucion');
	    inputNivel = document.querySelector('#txtNivel');
	   inputSeccion =  document.querySelector('#txtSeccion');
	

let formulario=[];
	   formulario=[inputNombre,inputApellido,inputSegundoApellido,inputIdentificacion,inputFechaNacimiento,
		inputGenero,inputTelefono,inputCorreo,inputGradoAcademico,inputInstitucion,inputNivel,inputSeccion];

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
	let	bError=false;


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


if (inputGradoAcademico.value=='') {
	inputGradoAcademico.classList.add('bordeError');
	bError=true;

}else{
	inputGradoAcademico.classList.remove('bordeError');

}



	

	/*if(inputInstitucion.value=='') {

		inputInstitucion.classList.add('bordeError');
		bError=true;

	}else{ 
		inputInstitucion.classList.remove('bordeError');
}*/

		if(inputNivel.value=='') {

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

	return bError;

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
 	inputGradoAcademico.value='';
	 inputInstitucion.value='';
 	inputNivel.value='';
 	inputSeccion.value='';
	 imagen.src="";

}


function llenar(){

	inputNombre.value='sofia';
	inputApellido.value="arias";
	inputSegundoApellido.value="Cabezas";
	inputIdentificacion.value="145612384";
 	inputFechaNacimiento.value="2000-03-03";
 	inputTelefono.value='45632136';
 	inputCorreo.value='nariz@gmail.com';
 	inputGradoAcademico.value='Maestria';
 	inputInstitucion.value='colegio1';
 	inputNivel.value=5;
 	inputSeccion.value='C';
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
		  option.value=institucion[i]['codigo'];
		  txtInstitucion.add(option);
		}
	   
	}


	
	

/*******************************Arturo **********************************/

function asignarCole() {
	let cod=indicarCodColegio();
	let nombre=colegioActual();
	let coleX=document.createElement('option');
	coleX.value=cod;
	coleX.innerHTML=nombre;
	inputInstitucion.innerHTML="";
	inputInstitucion.appendChild(coleX);

}
