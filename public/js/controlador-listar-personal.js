llenarCard();


let inputNombre = document.querySelector('#txtNombre');
let inputSegundoNombre=document.querySelector('#txtSegundoNombre');
let inputApellido = document.querySelector('#txtApellido');
let inputSegundoApellido= document.querySelector('#txtSegundoApellido');
let inputIdentificacion= document.querySelector('#txtIdentificacion');
let inputFechaNacimiento = document.querySelector('#txtFechaNacimiento');
let inputGenero = document.querySelector('input[name= genero]:checked');
let inputTelefono = document.querySelector('#txtTelefono');
let inputCorreo = document.querySelector('#txtCorreo');
let inputPuesto=document.querySelector('input[name= puesto]:checked');
let inputGradoAcademico=document.querySelector('#txtGradoAcademico');
let inputFoto = document.querySelector('#txtFoto');
let inputInstitucion =  document.querySelector('#txtInstitucion');
let inputNivel = document.querySelector('#txtNivel');
let inputSeccion =  document.querySelector('#txtSeccion');
let botonRegistar = document.querySelector('#btnRegistrar');

inputFoto.addEventListener('change',guardarImagen);

function llenarCard(){

	let divPrincipal=document.querySelector("#cardsProfesores");
	divPrincipal.innerHTML="";
	let tablaProfesores=obtenerListaPersonal();
	let rol=obtenerRol();
	let usuarios=obtenerListaUsuarios();
	if(rol==0){
		for (let i=0; i< tablaProfesores.length; i++){
			
			
			for (let j=0; j<usuarios.length; j++){
				if (usuarios[j][0]==tablaProfesores[i][2] && usuarios[j][4]){

						
					let nuevoDiv=document.createElement("div")
					//nuevoDiv.id='Profesor' +i;
					nuevoDiv.classList.add("cardsHome");

					/*let nuevoHeader=document.createElement("h3");
					let header= document.createTextNode(tablaEstudiante[i][0]);
					nuevoHeader.appendChild(header);*/



					let divImg=document.createElement("div");
					divImg.classList.add("imagenCard");
					let foto=document.createElement("img")
					foto.src=tablaProfesores[i][8];
					foto.classList.add("miFoto");
					divImg.appendChild(foto);

					let nomyApe=document.createElement("span");
					let cedula=document.createElement("span");
					let correo=document.createElement("span");
					let nivel=document.createElement("span");
					let seccion=document.createElement("span");
					let eye=document.createElement("a");

					eye.classList.add("fa");
					eye.classList.add("fa-eye");
					eye.id=tablaProfesores[i][2];
					eye.href="#";
					eye.addEventListener('click', mostrarFormulario);

					let nombreApellido=document.createTextNode(tablaProfesores[i][0]+" "+tablaProfesores[i][12]+" "+tablaProfesores[i][1]+" "+tablaProfesores[i][13]);
					let identificacion=document.createTextNode("Identificación: "+tablaProfesores[i][2]);
					let email=document.createTextNode("Correo: "+tablaProfesores[i][6]);
					let grado=document.createTextNode('Nivel: '+tablaProfesores[i][10]);
					let grupo=document.createTextNode("Sección "+tablaProfesores[i][11]);
					
					
					nomyApe.appendChild(nombreApellido);
					cedula.appendChild(identificacion);
					correo.appendChild(email);
					nivel.appendChild(grado);
					seccion.appendChild(grupo);

					
					nuevoDiv.appendChild(divImg);
					nuevoDiv.appendChild(nomyApe);
					nuevoDiv.appendChild(cedula);
					nuevoDiv.appendChild(correo)
					nuevoDiv.appendChild(nivel);
					nuevoDiv.appendChild(seccion);
					nuevoDiv.appendChild(eye);


					divPrincipal.appendChild(nuevoDiv);
					}
			
				}

			}	
		}
	else{
		for (let i=0; i< tablaProfesores.length; i++){
			
			
			for (let j=0; j<usuarios.length; j++){
				if (usuarios[j][0]==tablaProfesores[i][2] && usuarios[j][4] && tablaProfesores[i][9]==indicarCodColegio() ){

						
					let nuevoDiv=document.createElement("div")
					//nuevoDiv.id='Profesor' +i;
					nuevoDiv.classList.add("cardsHome");

					/*let nuevoHeader=document.createElement("h3");
					let header= document.createTextNode(tablaEstudiante[i][0]);
					nuevoHeader.appendChild(header);*/



					let divImg=document.createElement("div");
					divImg.classList.add("imagenCard");
					let foto=document.createElement("img")
					foto.src=tablaProfesores[i][8];
					foto.classList.add("miFoto");
					divImg.appendChild(foto);

					let nomyApe=document.createElement("span");
					let cedula=document.createElement("span");
					let correo=document.createElement("span");
					let nivel=document.createElement("span");
					let seccion=document.createElement("span");
					let eye=document.createElement("a");

					eye.classList.add("fa");
					eye.classList.add("fa-eye");
					eye.id=tablaProfesores[i][2];
					eye.href="#";
					eye.addEventListener('click', mostrarFormulario);

					let nombreApellido=document.createTextNode(tablaProfesores[i][0]+" "+tablaProfesores[i][12]+" "+tablaProfesores[i][1]+" "+tablaProfesores[i][13]);
					let identificacion=document.createTextNode("Identificación: "+tablaProfesores[i][2]);
					let email=document.createTextNode("Correo: "+tablaProfesores[i][6]);
					let grado=document.createTextNode('Nivel: '+tablaProfesores[i][10]);
					let grupo=document.createTextNode("Sección "+tablaProfesores[i][11]);
					
					
					nomyApe.appendChild(nombreApellido);
					cedula.appendChild(identificacion);
					correo.appendChild(email);
					nivel.appendChild(grado);
					seccion.appendChild(grupo);

					
					nuevoDiv.appendChild(divImg);
					nuevoDiv.appendChild(nomyApe);
					nuevoDiv.appendChild(cedula);
					nuevoDiv.appendChild(correo)
					nuevoDiv.appendChild(nivel);
					nuevoDiv.appendChild(seccion);
					nuevoDiv.appendChild(eye);


					divPrincipal.appendChild(nuevoDiv);
					}
			
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
let listaPersonal =buscarProfesorPorCodigo(pid);
if(false){
	listaPersonal=obtenerListaEstudiantes();
//}else{

}


            document.querySelector('#txtNombre').value=listaPersonal[0];
            document.querySelector('#txtSegundoNombre').value=listaPersonal[12];
          	document.querySelector('#txtApellido').value=listaPersonal[1];
          	document.querySelector('#txtSegundoApellido').value=listaPersonal[13];
            document.querySelector('#txtIdentificacion').value=listaPersonal[2];
			document.querySelector('#txtIdentificacion').disabled=true;
			document.querySelector('#txtFechaNacimiento').value=listaPersonal[3];
			document.querySelector('input[value='+listaPersonal[4]+']').checked=true;
            document.querySelector('#txtTelefono').value=listaPersonal[5];
            document.querySelector('#txtCorreo').value=listaPersonal[6];
            document.querySelector('#txtGradoAcademico').value=listaPersonal[7]
            document.querySelector('#txtInstitucion').value=listaPersonal[9];
            document.querySelector('#txtNivel').value=listaPersonal[10];
            document.querySelector('#txtSeccion').value=listaPersonal[11];

            inputFoto=listaPersonal[8];


}

botonModificar.addEventListener('click',obtenerDatosActualizar);

//botonModificar.addEventListener('click',ocultarFormulario);
function obtenerDatosActualizar(){
	let profesorModificado=[];

	let sNombre = inputNombre.value;
	let sSegundoNombre=inputSegundoNombre.value;
	let sApellido = inputApellido.value;
	let SSegundoApellido= inputSegundoApellido.value;
	let nIdentificacion = Number(inputIdentificacion.value);
	let dFechaNacimiento = inputFechaNacimiento.value;
	let sGenero = document.querySelector('input[name= genero]:checked').value;
	let nTelefono = inputTelefono.value;
	let sCorreo= inputCorreo.value;
	let sGradoAcademico=inputGradoAcademico.value;
	let sFoto = inputFoto;
	let sInstitucion = inputInstitucion.value;
	let sNivel = inputNivel.value;
	let sSeccion = inputSeccion.value;


if(!validadarFormulario()){

	profesorModificado.push(sNombre,sApellido, nIdentificacion, dFechaNacimiento, 
	 sGenero, nTelefono, sCorreo, sGradoAcademico, sFoto, sInstitucion, sNivel,
	 sSeccion, sSegundoNombre, SSegundoApellido);

	actualizarProfesor(profesorModificado);
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
botonDeshabilitar.addEventListener('click', deshabilitarPersonal);

function deshabilitarPersonal() {
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


if (inputGradoAcademico.value=='') {
	inputGradoAcademico.classList.add('bordeError');
	bError=true;

}else{
	inputGradoAcademico.classList.remove('bordeError');

}

	

	if(inputFoto.value=='') {

		inputFoto.classList.add('bordeError');
		bError=true;

	}
	else{ 
		inputFoto.classList.remove('bordeError');
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


