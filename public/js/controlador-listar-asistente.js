llenarCard();

let inputNombre = document.querySelector('#txtNombre');
let inputSegundoNombre= document.querySelector('#txtSegundoNombre');
let inputApellido = document.querySelector('#txtApellido');
let inputSegundoApellido= document.querySelector('#txtSegundoApellido');
let inputIdentificacion= document.querySelector('#txtIdentificacion');
let inputFechaNacimiento = document.querySelector('#txtFechaNacimiento');
let inputGenero = document.querySelector('input[name= genero]:checked');
let inputTelefono = document.querySelector('#txtTelefono');
let inputCorreo = document.querySelector('#txtCorreo');
let inputFoto = document.querySelector('#txtFoto');


inputFoto.addEventListener('change',guardarImagen);

function llenarCard(){

let divPrincipal=document.querySelector("#cardsAsistente");
divPrincipal.innerHTML="";
let tablaAsistentes=obtenerListaAsistente();


let usuarios=obtenerListaUsuarios();
for (let i=0; i< tablaAsistentes.length; i++){
	
	for (let j=0; j<usuarios.length; j++){

		if(usuarios[j][0]==tablaAsistentes[i][2] && usuarios[j][4]){


	let nuevoDiv=document.createElement("div")
	//nuevoDiv.id=tablaAsistentes[i][2];
	nuevoDiv.classList.add("cardsHome");

	/*let nuevoHeader=document.createElement("h3");
	let header= document.createTextNode(tablaEstudiante[i][0]);
	nuevoHeader.appendChild(header);*/

	let divImg=document.createElement("div");
	divImg.classList.add("imagenCard");
	let foto=document.createElement("img")
	foto.src=tablaAsistentes[i][7];
	foto.classList.add("miFoto");
	divImg.appendChild(foto);

	let nomyApe=document.createElement("span");
	let cedula=document.createElement("span");
	let correo=document.createElement("span");
	let eye=document.createElement("a");

	eye.classList.add("fa");
	eye.classList.add("fa-eye");
	eye.id=tablaAsistentes[i][2];
	eye.href="#";
	eye.addEventListener('click', mostrarFormulario);

	let nombreApellido=document.createTextNode(tablaAsistentes[i][0]+" "+tablaAsistentes[i][8]+" "+tablaAsistentes[i][1]+" "+tablaAsistentes[i][9]);
	let identificacion=document.createTextNode("Identificación: "+tablaAsistentes[i][2]);
	let email=document.createTextNode("Correo: "+tablaAsistentes[i][6]);
	
	nomyApe.appendChild(nombreApellido);
	cedula.appendChild(identificacion);
	correo.appendChild(email);
	
	
	nuevoDiv.appendChild(divImg);
	nuevoDiv.appendChild(nomyApe);
	nuevoDiv.appendChild(cedula);
	nuevoDiv.appendChild(correo)
	nuevoDiv.appendChild(eye);


	divPrincipal.appendChild(nuevoDiv);
	
			}
		}
	}


}



function mostrarFormulario(){
document.querySelector("#seccion").classList.remove("ocultar");
document.querySelector("#listar").classList.add("ocultar");
llenarFormulario(this.id);

}

function ocultarFormulario(){

	document.querySelector("#seccion").classList.add("ocultar");
	document.querySelector("#listar").classList.remove("ocultar");
}

let botonModificar=document.querySelector('#btnModificar')


function llenarFormulario(pid){

let id=document.querySelector('#txtIdentificacion').value;

let cuerpoFormulario=document.querySelector("#seccion");
let listaAsistente=buscarAsistentePorCodigo(pid);
if(false){
	listaAsistente=obtenerListaAsistente();
//}else{

}
			document.querySelector('#txtNombre').value=listaAsistente[0];
			document.querySelector('#txtSegundoNombre').value=listaAsistente[8];
          	document.querySelector('#txtApellido').value=listaAsistente[1];
          	document.querySelector('#txtSegundoApellido').value= listaAsistente[9];  
            document.querySelector('#txtIdentificacion').value=listaAsistente[2];
			document.querySelector('#txtIdentificacion').disabled=true;
			document.querySelector('#txtFechaNacimiento').value=listaAsistente[3];
			document.querySelector('input[value='+listaAsistente[4]+']').checked=true;
            document.querySelector('#txtTelefono').value=listaAsistente[5];
            document.querySelector('#txtCorreo').value=listaAsistente[6];
            

             inputFoto=listaAsistente[7];

}


botonModificar.addEventListener('click',obtenerDatosActualizar);


function obtenerDatosActualizar(){
	let asistenteModificado=[];

	let sNombre = inputNombre.value;
	let sSegundoNombre= inputSegundoNombre.value;
	let sApellido = inputApellido.value;
	let sSegundoApellido= inputSegundoApellido.value;
	let nIdentificacion = Number(inputIdentificacion.value);
	let dFechaNacimiento = inputFechaNacimiento.value;
	let sGenero =  document.querySelector('input[name= genero]:checked').value;
	let nTelefono = inputTelefono.value;
	let sCorreo= inputCorreo.value;
	let sFoto = inputFoto;

	if(!validadarFormulario()){
	

	asistenteModificado.push(sNombre,sApellido, nIdentificacion, dFechaNacimiento, 
	 sGenero, nTelefono, sCorreo, sFoto, sSegundoNombre, sSegundoApellido);

	actualizarAsistente(asistenteModificado);
	ocultarFormulario();
	llenarCard();

}
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


// funcion para deshabilitar al estudiante

let botonDeshabilitar=document.querySelector('#btnDelete');
botonDeshabilitar.addEventListener('click', deshabilitarAsistente);

function deshabilitarAsistente() {
    let cedula=document.querySelector('#txtIdentificacion').value;


    ModEstadoListaUsuarios(cedula);
   	llenarCard();
   	ocultarFormulario();
   	
   
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


	

	if(inputFoto.value=='') {

		inputFoto.classList.add('bordeError');
		bError=true;

	}
	//else{ 
	//	inputFoto.classList.remove('bordeError');
//}

return bError;

}



