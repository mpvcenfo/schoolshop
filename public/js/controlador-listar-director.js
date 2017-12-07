llenarCard();

let inputNombre = document.querySelector('#txtNombre');
let inputSegundoNombre= document.querySelector('#txtSegundoNombre');
let inputApellido = document.querySelector('#txtApellido');
let inputSegundoApellido=document.querySelector('#txtSegundoApellido');
let inputIdentificacion= document.querySelector('#txtIdentificacion');
let inputFechaNacimiento = document.querySelector('#txtFechaNacimiento');
let inputGenero = document.querySelector('input[name= genero]:checked');
let inputTelefono = document.querySelector('#txtTelefono');
let inputCorreo = document.querySelector('#txtCorreo');
let inputFoto = document.querySelector('#txtFoto');
let inputInstitucion =  document.querySelector('#txtInstitucion');
//let inputNivel = document.querySelector('#txtNivel');
//let inputSeccion =  document.querySelector('#txtSeccion');

inputFoto.addEventListener('change',guardarImagen);

function llenarCard(){

	let divPrincipal=document.querySelector("#cardsDirectores");
	divPrincipal.innerHTML="";
	let tablaDirectores=obtenerListaDirectores();

	let usuarios=obtenerListaUsuarios();

	for (let i=0; i<tablaDirectores.length; i++){



			for (let j=0; j< usuarios.length; j++){
				if (usuarios[j][0]==tablaDirectores[i][2] && usuarios[j][4]){

					let nuevoDiv=document.createElement("div")
					//nuevoDiv.id='director' +i;
					nuevoDiv.classList.add("cardsHome");

					/*let nuevoHeader=document.createElement("h3");
					let header= document.createTextNode(tablaEstudiante[i][0]);
					nuevoHeader.appendChild(header);*/

					let divImg=document.createElement("div");
					divImg.classList.add("imagenCard");
					let foto=document.createElement("img")
					foto.src=tablaDirectores[i][7];
					foto.classList.add("miFoto");
					divImg.appendChild(foto);

					let nomyApe=document.createElement("span");
					let cedula=document.createElement("span");
					let correo=document.createElement("span");
					let institucion=document.createElement("span");
					let eye=document.createElement("a");

					eye.classList.add("fa");
					eye.classList.add("fa-eye");
					eye.id=tablaDirectores[i][2];
					eye.href="#";
					eye.addEventListener('click', mostrarFormulario);

					let nombreApellido=document.createTextNode(tablaDirectores[i][0]+" "+tablaDirectores[i][11]+" "+tablaDirectores[i][1]+" "+tablaDirectores[i][12]);
					let identificacion=document.createTextNode("Identificación: "+tablaDirectores[i][2]);
					let email=document.createTextNode("Correo: "+tablaDirectores[i][6]);
					let cole=document.createTextNode('Institución: '+tablaDirectores[i][8]);
					
					
					nomyApe.appendChild(nombreApellido);
					cedula.appendChild(identificacion);
					correo.appendChild(email);
					institucion.appendChild(cole);

					
					nuevoDiv.appendChild(divImg);
					nuevoDiv.appendChild(nomyApe);
					nuevoDiv.appendChild(cedula);
					nuevoDiv.appendChild(correo)
					nuevoDiv.appendChild(institucion);
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
let listaDirectores=buscarDirectorPorCodigo(pid);
if(false){
	listaDirectores=obtenerListaDirectores();
//}else{

}

			
            document.querySelector('#txtNombre').value=listaDirectores[0];
            document.querySelector('#txtSegundoNombre').value=listaDirectores[11];
            document.querySelector('#txtApellido').value=listaDirectores[1];
            document.querySelector('#txtSegundoApellido').value=listaDirectores[12];
            document.querySelector('#txtIdentificacion').value=listaDirectores[2];
			document.querySelector('#txtIdentificacion').disabled=true;
			document.querySelector('#txtFechaNacimiento').value=listaDirectores[3];
			document.querySelector('input[value='+listaDirectores[4]+']').checked=true;
            document.querySelector('#txtTelefono').value=listaDirectores[5];
            document.querySelector('#txtCorreo').value=listaDirectores[6];
            document.querySelector('#txtInstitucion').value=listaDirectores[8];
            //document.querySelector('#txtNivel').value=listaDirectores[9];
            //document.querySelector('#txtSeccion').value=listaDirectores[10];

            inputFoto=listaDirectores[7];

}

botonModificar.addEventListener('click',obtenerDatosActualizar);

//botonModificar.addEventListener('click',ocultarFormulario);
function obtenerDatosActualizar(){
	let directorModificado=[];

	let sNombre = inputNombre.value;
	let sSegundoNombre=inputSegundoNombre.value;
	let sApellido = inputApellido.value;
	let sSegundoApellido=inputSegundoApellido;
	let nIdentificacion = Number(inputIdentificacion.value);
	let dFechaNacimiento = inputFechaNacimiento.value;
	let sGenero =  document.querySelector('input[name= genero]:checked').value;
	let nTelefono = inputTelefono.value;
	let sCorreo= inputCorreo.value;
	let sFoto = inputFoto;
	let sInstitucion = inputInstitucion.value;
	//let sNivel = inputNivel.value;
	//let sSeccion = inputSeccion.value;


if(!validarFormulario()){

	directorModificado.push(sNombre,sApellido, nIdentificacion, dFechaNacimiento, 
	 sGenero, nTelefono, sCorreo, sFoto, sInstitucion, sSegundoNombre, sSegundoApellido);

	actualizarDirector(directorModificado);
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
botonDeshabilitar.addEventListener('click', deshabilitarDirector);

function deshabilitarDirector() {
    let cedula=document.querySelector('#txtIdentificacion').value;


    ModEstadoListaUsuarios(cedula);
   	llenarCard();
   	ocultarFormulario();
   	
   
}



function validarFormulario(){
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


}



