

let inputNombre = document.querySelector('#txtNombre');
let inputSegundoNombre=document.querySelector('#txtSegundoNombre');
let inputApellido = document.querySelector('#txtApellido');
let inputSegundoApellido=document.querySelector('#txtSegundoApellido');
let inputIdentificacion= document.querySelector('#txtIdentificacion');
let inputFechaNacimiento = document.querySelector('#txtFechaNacimiento');
let inputGenero = document.querySelector('input[name= genero]:checked');
let inputTelefono = document.querySelector('#txtTelefono');
let inputCorreo = document.querySelector('#txtCorreo');
let btnok=document.querySelector('#ok');
//let inputFoto = document.querySelector('#txtFoto');
let botonRegistar = document.querySelector('#btnRegistrar');


//inputFoto.addEventListener('change',guardarImagen);

botonRegistar.addEventListener('click', obtenerDatosRegistro);
//modal para el feedback y warning
document.querySelector('#modal').classList.add('ocultar');
btnAceptar.addEventListener('click',cerrarModal);
//btnCerrar.addEventListener('click',irPagina)
document.querySelector('#feedback').classList.add('ocultar');
btnok.addEventListener('click',irPagina);



//funcion que envia al usuario a otra pagina 
function irPagina(){
	window.location.href = "listar-asistente.html";    
	
  }

// esta es la función para registrar un estudiante

function obtenerDatosRegistro(){
	let anuevoUsuario=[];
     let datosInstitucion=obtenerinstitucion();
	let aNuevoAsistente= [];
	
	let sNombre = inputNombre.value;
	let ncodigo=Number(inputIdentificacion.value);
	let nRol=3;
	let pEstado=1;
	let sinstitucion;
    let scontraseña=Number(inputIdentificacion.value);
	let sSegundoNombre= inputSegundoNombre.value;
	let sApellido = inputApellido.value;
	let sSegundoApellido= inputSegundoApellido.value;
	let nIdentificacion = Number(inputIdentificacion.value);
	let dFechaNacimiento = inputFechaNacimiento.value;
	let sGenero = document.querySelector('input[name= genero]:checked').value;
	let nTelefono = inputTelefono.value;
	let sCorreo= inputCorreo.value;
	 let imagen=enviarURL();
	 for(let i=0;i<datosInstitucion.length;i++){
       sinstitucion=datosInstitucion[i]['codigo'];
	 }


if(validarCampo()){
		
	//aNuevoAsistente.push(	codigo,institucion,sNombre,sSegundoNombre, sApellido,sSegundoApellido, nIdentificacion, dFechaNacimiento, 
//sGenero, nTelefono, sCorreo,imagen);
	aNuevoAsistente.push(sinstitucion,sNombre,sSegundoNombre, sApellido,  sSegundoApellido,nIdentificacion, dFechaNacimiento, 
	 sGenero, nTelefono, sCorreo, imagen);
	  
	 anuevoUsuario.push(nIdentificacion,sCorreo,scontraseña,nRol,pEstado);
	registrarAsistente(aNuevoAsistente); 
	registrarUsuario(anuevoUsuario);
	limpiar();
}
}

//esta es la funcion que me permite validar campos vacios//

function cerrarModal(){
	document.querySelector('#modal').classList.add('ocultar');
	document.querySelector('#feedback').classList.add('ocultar');
  }



  function validarCampo(){
         let lleno=true;
	    inputNombre = document.querySelector('#txtNombre');
         inputSegundoNombre=document.querySelector('#txtSegundoNombre');
        inputApellido = document.querySelector('#txtApellido');
	    inputSegundoApellido=document.querySelector('#txtSegundoApellido');
	    inputIdentificacion= document.querySelector('#txtIdentificacion');
	    inputFechaNacimiento = document.querySelector('#txtFechaNacimiento');
        inputGenero = document.querySelector('input[name= genero]:checked');
        inputTelefono = document.querySelector('#txtTelefono');
	     inputCorreo = document.querySelector('#txtCorreo');

	let formulario=[];
	        formulario=[inputNombre,inputSegundoNombre,inputApellido,inputSegundoApellido,inputIdentificacion,inputFechaNacimiento,inputGenero,inputTelefono,inputCorreo];

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


	

	/*if(inputFoto.value=='') {

		inputFoto.classList.add('bordeError');
		bError=true;

	}*/
	//else{ 
	//	inputFoto.classList.remove('bordeError');
//}

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
 	

 	
}


function llenar(){

	inputNombre.value='sofia';
	inputApellido.value="arias";
	inputIdentificacion.value="145612384";
 	inputFechaNacimiento.value="2000-03-03";
 	inputTelefono.value='45632136';
 	inputCorreo.value='nariz@gmail.com';	
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



