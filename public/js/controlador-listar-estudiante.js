llenarCard();


let inputIdentificacion= document.querySelector("#txtIdentificacion");
let inputNombre = document.querySelector('#txtNombre');
let inputSegundoNombre= document.querySelector('#txtSegundoNombre');
let inputApellido = document.querySelector('#txtApellido');
let inputSegundoApellido= document.querySelector('#txtSegundoApellido');
let inputTelPersonal = document.querySelector('#txtTelPersonal');
let inputFechaNacimiento = document.querySelector('#txtFechaNacimiento');
let inputDireccion = document.querySelector('#txtDireccion');
let inputTelCasa = document.querySelector('#txtTelCasa');
let inputGenero = document.querySelector('input[name= genero]:checked');
let inputGrupoSanguineo = document.querySelector('#txtGrupoSangre');
let inputDonador = document.querySelector('#txtDonador');
let inputFoto = document.querySelector('#txtFoto');
let inputBeca = document.querySelector('#txtBeca');
let inputNombreContacto1 = document.querySelector('#txtNombreContacto1');
let inputParentesco1 = document.querySelector('#txtParentesco1');
let inputTelContacto1 = document.querySelector('#txtTelContacto1');
let inputNombreContacto2 = document.querySelector('#txtNombreContacto2');
let inputParentesco2 = document.querySelector('#txtParentesco2');
let inputTelContacto2 = document.querySelector('#txtTelContacto2');
let inputNombreContacto3 = document.querySelector('#txtNombreContacto3');
let inputParentesco3 = document.querySelector('#txtParentesco3');
let inputTelContacto3 = document.querySelector('#txtTelContacto3');
let inputCondicionMedica = document.querySelector('#txtCondicionMedica');
let inputComprobante = document.querySelector('#txtComprobante');
let inputInstitucion =  document.querySelector('#txtInstitucion');
let inputNivel = document.querySelector('#txtNivel');
let inputSeccion =  document.querySelector('#txtSeccion');
let botonRegistar = document.querySelector('#btnRegistrar');

//botonRegistrar.addEventListener('click', obtenerDatosRegistro);






// esta es la función para registrar un estudiante

function obtenerDatosRegistro(){

	let aNuevoEstudiante= [];

	let sIdEstudiante= Number(inputIdentificacion.value);
	let sNombre = inputNombre.value;
	let SSegundoNombre= inputSegundoNombre.value;
	let sApellido = inputApellido.value;
	let sSegundoApellido= inputSegundoApellido.value;
	let nTelPersonal = inputTelPersonal.value;
	let dFechaNacimiento = inputFechaNacimiento.value;
	let sDireccion = inputDireccion.value;
	let nTelCasa = inputTelCasa.value;
	let sGenero = document.querySelector('input[name= genero]:checked').value;
	let sGrupoSanguineo = inputGrupoSanguineo.value;
	let sDonador = inputDonador.value;
	let reader=new FileReader();
	let sFoto = inputFoto;
	let sBeca = inputBeca.value;
	let sNombreContacto1 = inputNombreContacto1.value;
	let sParentesco1 = inputParentesco1.value;
	let nTelContacto1 =inputTelContacto1.value;
	let sNombreContacto2 = inputNombreContacto2.value;
	let sParentesco2 = inputParentesco2.value;
	let nTelContacto2 = inputTelContacto2.value;
	let sNombreContacto3 = inputNombreContacto3.value;
	let sParentesco3 = inputParentesco3.value;
	let nTelContacto3 = inputTelContacto3.value;
	let sCondicionMedica = inputCondicionMedica.value;
	let sComprobante = inputComprobante.value;
	let sInstitucion = inputInstitucion.value;
	let sNivel = inputNivel.value;
	let sSeccion = inputSeccion.value;

	if(!validadarFormulario()){

	aNuevoEstudiante.push(sIdEstudiante, sNombre, sApellido, nTelPersonal, dFechaNacimiento, sDireccion, 
		nTelCasa, sGenero, sGrupoSanguineo, sDonador, sFoto, sBeca, sNombreContacto1, sParentesco1, 
		nTelContacto1, sNombreContacto2, sParentesco2, nTelContacto2, sNombreContacto3, sParentesco3, 
		nTelContacto3, sCondicionMedica, sComprobante, sInstitucion, sNivel, sSeccion, true, SSegundoNombre, sSegundoApellido);
	registrarEstudiante(aNuevoEstudiante);
	limpiar();
}

}
	
//esta es la funcion que me permite validar campos vacios//

function validadarFormulario(){

	let errorMsg=''; 
	let bError=false;

	if (inputIdentificacion.value=='') {

		inputIdentificacion.classList.add('bordeError');
		bError=true;
	}else{

		inputIdentificacion.classList.remove('bordeError');
	}


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
	
	if(inputSegundoApellido.value==''){
		inputSegundoApellido.classList.add('bordeError');
		bError=true;

	}else{
		inputSegundoApellido.classList.remove('bordeError');
	}


	if(inputTelPersonal.value==''){

		inputTelPersonal.classList.add('bordeError');
		bError=true;
	}else{

		inputTelPersonal.classList.remove('bordeError');

	}


	if(inputFechaNacimiento.value=='') {

		inputFechaNacimiento.classList.add('bordeError');
		bError=true;

	}else{ 
		inputFechaNacimiento.classList.remove('bordeError');
}


	if(inputDireccion.value=='') {

		inputDireccion.classList.add('bordeError');
		bError=true;
	}else{ 
		inputDireccion.classList.remove('bordeError');
}

	if(inputTelCasa.value=='') {

		inputTelCasa.classList.add('bordeError');
		bError=true;

	}else{ 
		inputTelCasa.classList.remove('bordeError');
}


	if(inputGrupoSanguineo.value=='') {

		inputGrupoSanguineo.classList.add('bordeError');
		bError=true;

	}else{ 
		inputGrupoSanguineo.classList.remove('bordeError');
}

	if(inputDonador.value=='') {

		inputDonador.classList.add('bordeError');
		bError=true;
	}else{ 
		inputDonador.classList.remove('bordeError');
}

	if(inputFoto.value=='') {

		inputFoto.classList.add('bordeError');
		bError=true;
	
}
//else{ 
	//	inputFoto.classList.remove('bordeError');
//}

	if(inputBeca.value=='') {

		inputBeca.classList.add('bordeError');
		bError=true;
	}else{ 
		inputBeca.classList.remove('bordeError');
}

	if(inputNombreContacto1.value=='') {

		inputNombreContacto1.classList.add('bordeError');
		bError=true;
	}else{ 
		inputNombreContacto1.classList.remove('bordeError');
}

		if(inputParentesco1.value=='') {

		inputParentesco1.classList.add('bordeError');
			bError=true;
	}else{ 
		inputParentesco1.classList.remove('bordeError');
}

	if(inputTelContacto1.value=='') {
		
		inputTelContacto1.classList.add('bordeError');
		bError=true;

	}else{ 
		inputTelContacto1.classList.remove('bordeError');
}

	if(inputCondicionMedica.value=='') {
	
		inputCondicionMedica.classList.add('bordeError');
		bError=true;
	}else{ 
		inputCondicionMedica.classList.remove('bordeError');
}

if(inputComprobante.value==''){
	inputComprobante.classList.add('bordeError');
	bError=true;
	}else{

		inputComprobante.classList.remove('bError')
	}



	if(inputInstitucion.value=='') {

		inputInstitucion.classList.add('bordeError');
		bError=true;

	}else{ 
		inputInstitucion.classList.remove('bordeError');
}

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



/*funcion para dejar los campos en blanco*/
function limpiar(){
 inputIdentificacion.value="";	
 inputNombre.value="";
 inputSegundoNombre.value="";
 inputApellido.value="";
 inputSegundoApellido.value="";
 inputTelPersonal.value="";
 inputFechaNacimiento.value="";
 inputDireccion.value="";
 inputTelCasa.value="";
 inputGrupoSanguineo.value="";
 inputDonador.value="";
 inputFoto.value="";
 inputBeca.value="";
 inputNombreContacto1.value="";
 inputParentesco1.value="";
 inputTelContacto1.value="";
 inputNombreContacto2.value="";
 inputParentesco2.value="";
 inputTelContacto2.value="";
 inputNombreContacto3.value="";
 inputParentesco3.value="";
 inputTelContacto3.value="";
 inputCondicionMedica.value="";
 inputComprobante.value="";
 inputInstitucion.value="";
 inputNivel.value="";
 inputSeccion.value="";

}


function llenar(){
inputIdentificacion.value="123456789";
 inputNombre.value="pedro";
 inputApellido.value="ruiz";
 inputTelPersonal.value="256225452";
 inputFechaNacimiento.value="2010-12-12";
 inputDireccion.value="uruca";
 inputTelCasa.value="22445566";
 inputGrupoSanguineo.value="O+";
 inputDonador.value="Si";
 inputFoto.value="";
 inputBeca.value="Si";
 inputNombreContacto1.value="mario";
 inputParentesco1.value="tio";
 inputTelContacto1.value="653526";
 inputNombreContacto2.value="luis";
 inputParentesco2.value="tio";
 inputTelContacto2.value="33333333";
 inputNombreContacto3.value="maria";
 inputParentesco3.value="tia";
 inputTelContacto3.value="88888888";
 inputCondicionMedica.value="Si";
 inputComprobante.value="";
 inputInstitucion.value="escuela1";
 inputNivel.value="Quinto";
 inputSeccion.value="A";

}




inputFoto.addEventListener('change',guardarImagen);

function llenarCard(){

let divPrincipal=document.querySelector("#cardsEstudiantes");
divPrincipal.innerHTML="";
let tablaEstudiante=obtenerListaEstudiantes();

/*if(pFiltro==undefined ){
         tablaEstudiante=obtenerListaEstudiantes();
      }else{
        tablaEstudiante=obtenerListaEstudiantesFiltrada(pfiltro);
      }*/

	if(obtenerRol()==0){
		for (let i=0; i< tablaEstudiante.length; i++){
			if (tablaEstudiante[i][26]){

			let nuevoDiv=document.createElement("div")
			nuevoDiv.id=tablaEstudiante[i][0];
			nuevoDiv.classList.add("cardsHome");

			/*let nuevoHeader=document.createElement("h3");
			let header= document.createTextNode(tablaEstudiante[i][0]);
			nuevoHeader.appendChild(header);*/

			let divImg=document.createElement("div");
			divImg.classList.add("imagenCard");
			let foto=document.createElement("img");
			foto.src=tablaEstudiante[i][10];
			foto.classList.add("miFoto");
			divImg.appendChild(foto);

			let nomyApe=document.createElement("span");
			let institucion=document.createElement("span");
			let nivel=document.createElement("span");
			let seccion=document.createElement("span");
			let eye=document.createElement("a");

			eye.classList.add("fa");
			eye.classList.add("fa-eye");
			eye.classList.add("editarEstudiante");
			eye.id=tablaEstudiante[i][0];
			eye.href="#";
			eye.addEventListener('click', mostrarFormulario);


			let nombreApellido=document.createTextNode(tablaEstudiante[i][1]+" "+ tablaEstudiante[i][27]+" "+tablaEstudiante[i][2]+" "+tablaEstudiante[i][28]);
			let cole=document.createTextNode('Institución: '+tablaEstudiante[i][23]);
			let grado=document.createTextNode('Nivel: '+tablaEstudiante[i][24]);
			let grupo=document.createTextNode('Sección: '+tablaEstudiante[i][25]);
			
			nomyApe.appendChild(nombreApellido);
			institucion.appendChild(cole);
			nivel.appendChild(grado);
			seccion.appendChild(grupo);


			/*nuevoDiv.appendChild(nuevoHeader);*/
			nuevoDiv.appendChild(divImg);
			nuevoDiv.appendChild(nomyApe);
			nuevoDiv.appendChild(institucion);
			nuevoDiv.appendChild(nivel);
			nuevoDiv.appendChild(seccion);
			nuevoDiv.appendChild(eye);


			divPrincipal.appendChild(nuevoDiv);
				}
		}
	}
	else{
		for (let i=0; i< tablaEstudiante.length; i++){
			if (tablaEstudiante[i][26] && tablaEstudiante[i][27]==obtenerActivo()){

				let nuevoDiv=document.createElement("div")
				nuevoDiv.id=tablaEstudiante[i][0];
				nuevoDiv.classList.add("cardsHome");

				/*let nuevoHeader=document.createElement("h3");
				let header= document.createTextNode(tablaEstudiante[i][0]);
				nuevoHeader.appendChild(header);*/

				let divImg=document.createElement("div");
				divImg.classList.add("imagenCard");
				let foto=document.createElement("img");
				foto.src=tablaEstudiante[i][10];
				foto.classList.add("miFoto");
				divImg.appendChild(foto);

				let nomyApe=document.createElement("span");
				let institucion=document.createElement("span");
				let nivel=document.createElement("span");
				let seccion=document.createElement("span");
				let eye=document.createElement("a");

				eye.classList.add("fa");
				eye.classList.add("fa-eye");
				eye.classList.add("editarEstudiante");
				eye.id=tablaEstudiante[i][0];
				eye.href="#";
				eye.addEventListener('click', mostrarFormulario);


				//let nombreApellido=document.createTextNode(tablaEstudiante[i][1]+" "+tablaEstudiante[i][2]);
				let nombreApellido=document.createTextNode(tablaEstudiante[i][1]+" "+ tablaEstudiante[i][27]+" "+tablaEstudiante[i][2]+" "+tablaEstudiante[i][28]);
				let cole=document.createTextNode('Institución: '+tablaEstudiante[i][23]);
				let grado=document.createTextNode('Nivel: '+tablaEstudiante[i][24]);
				let grupo=document.createTextNode('Sección: '+tablaEstudiante[i][25]);
				
				nomyApe.appendChild(nombreApellido);
				institucion.appendChild(cole);
				nivel.appendChild(grado);
				seccion.appendChild(grupo);


				/*nuevoDiv.appendChild(nuevoHeader);*/
				nuevoDiv.appendChild(divImg);
				nuevoDiv.appendChild(nomyApe);
				nuevoDiv.appendChild(institucion);
				nuevoDiv.appendChild(nivel);
				nuevoDiv.appendChild(seccion);
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


/*function agregarEvento(){

let btnEditarUsuario=document.querySelector(".editarEstudiante");
btnEditarUsuario.addEventListener('click', mostrarFormulario);*/

//}

let botonModificar=document.querySelector('#btnModificar')

//botonModificar.addEventListener('change',guardarImagen);


function llenarFormulario(pid){

let id=document.querySelector('#txtIdentificacion').value;

let cuerpoFormulario=document.querySelector("#seccion");
let listaEstudiantes=buscarEstudiantePorCodigo(pid);
if(false){
	listaEstudiantes=obtenerListaEstudiantes();
//}else{

}

                     			
			document.querySelector('#txtIdentificacion').value=listaEstudiantes[0];
			document.querySelector('#txtIdentificacion').disabled=true;
            document.querySelector('#txtNombre').value=listaEstudiantes[1];
            document.querySelector('#txtSegundoNombre').value=listaEstudiantes[27];
          	document.querySelector('#txtApellido').value=listaEstudiantes[2];
          	document.querySelector('#txtSegundoApellido'),value=listaEstudiantes[28];
            document.querySelector('#txtTelPersonal').value=listaEstudiantes[3];
           	document.querySelector('#txtFechaNacimiento').value=listaEstudiantes[4];
           	//new Date(listaEstudiantes[4]).toISOString().slice(0,10);
            document.querySelector('#txtDireccion').value=listaEstudiantes[5];
            document.querySelector('#txtTelCasa').value=listaEstudiantes[6];
            document.querySelector('input[value='+listaEstudiantes[7]+']').checked=true;
            document.querySelector('#txtGrupoSangre').value=listaEstudiantes[8];
            document.querySelector('#txtDonador').value=listaEstudiantes[9];
            //document.querySelector('#txtFoto').src=listaEstudiantes[10];
    		document.querySelector('#txtBeca').value=listaEstudiantes[11]; 		
          	document.querySelector('#txtNombreContacto1').value=listaEstudiantes[12];
            document.querySelector('#txtParentesco1').value=listaEstudiantes[13];
           	document.querySelector('#txtTelContacto1').value=listaEstudiantes[14];
            document.querySelector('#txtNombreContacto2').value=listaEstudiantes[15];
            document.querySelector('#txtParentesco2').value=listaEstudiantes[16];
            document.querySelector('#txtTelContacto2').value=listaEstudiantes[17];
    	    document.querySelector('#txtNombreContacto3').value=listaEstudiantes[18];
            document.querySelector('#txtParentesco3').value=listaEstudiantes[19];
            document.querySelector('#txtTelContacto3').value=listaEstudiantes[20];
            document.querySelector('#txtCondicionMedica').value=listaEstudiantes[21];
			//document.querySelector('#txtComprobante').value=listaEstudiantes[22];
		    document.querySelector('#txtInstitucion').value=listaEstudiantes[23];
            document.querySelector('#txtNivel').value=listaEstudiantes[24];
            document.querySelector('#txtSeccion').value=listaEstudiantes[25];	

          //  botonModificar.addEventListener('change',guardarImagen);
          	inputFoto=listaEstudiantes[10];

}



botonModificar.addEventListener('click',obtenerDatosActualizar);

//botonModificar.addEventListener('click',ocultarFormulario);
function obtenerDatosActualizar(){
	let estudianteModificado=[];

	let sIdEstudiante=inputIdentificacion.value;
	let sNombre = inputNombre.value;
	let SSegundoNombre=input.value;
	let sApellido = inputApellido.value;
	let sSegundoApellido=inputSegundoApellido.value;
	let nTelPersonal = inputTelPersonal.value;
	let dFechaNacimiento = inputFechaNacimiento.value;
	let sDireccion = inputDireccion.value;
	let nTelCasa = inputTelCasa.value;
	let sGenero = document.querySelector('input[name= genero]:checked').value;
	let sGrupoSanguineo = inputGrupoSanguineo.value;
	let sDonador = inputDonador.value;
	let sFoto = inputFoto;
	let sBeca = inputBeca.value;
	let sNombreContacto1 = inputNombreContacto1.value;
	let sParentesco1 = inputParentesco1.value;
	let nTelContacto1 = inputTelContacto1.value;
	let sNombreContacto2 = inputNombreContacto2.value;
	let sParentesco2 = inputParentesco2.value;
	let nTelContacto2 = inputTelContacto2.value;
	let sNombreContacto3 = inputNombreContacto3.value;
	let sParentesco3 = inputParentesco3.value;
	let nTelContacto3 = inputTelContacto3.value;
	let sCondicionMedica = inputCondicionMedica.value;
	let sComprobante = inputComprobante.value;
	let sInstitucion = inputInstitucion.value;
	let sNivel = inputNivel.value;
	let sSeccion = inputSeccion.value;


	if(!validadarFormulario()){

		estudianteModificado.push(sIdEstudiante, sNombre, sApellido, nTelPersonal, dFechaNacimiento, sDireccion, 
		nTelCasa, sGenero, sGrupoSanguineo, sDonador, sFoto, sBeca, sNombreContacto1, sParentesco1, 
		nTelContacto1, sNombreContacto2, sParentesco2, nTelContacto2, sNombreContacto3, sParentesco3, 
		nTelContacto3, sCondicionMedica, sComprobante, sInstitucion, sNivel, sSeccion, true, SSegundoNombre, sSegundoApellido);

	actualizarEstudiante(estudianteModificado);
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





function datosActualesFormulario(){

	let adatosActuales=[];

	let sIdEstudiante= Number(inputIdentificacion.value);
	let sNombre = inputNombre.value;
	let SSegundoNombre=inputSegundoNombre,value;
	let sApellido = inputApellido.value;
	let sSegundoApellido=inputSegundoApellido.value;
	let nTelPersonal = inputTelPersonal.value;
	let dFechaNacimiento = inputFechaNacimiento.value;
	let sDireccion = inputDireccion.value;
	let nTelCasa = inputTelCasa.value;
	let sGenero = document.querySelector('input[name= genero]:checked').value;
	let sGrupoSanguineo = inputGrupoSanguineo.value;
	let sDonador = inputDonador.value;
	let reader=new FileReader();
	let sFoto = inputFoto;
	let sBeca = inputBeca.value;
	let sNombreContacto1 = inputNombreContacto1.value;
	let sParentesco1 = inputParentesco1.value;
	let nTelContacto1 = inputTelContacto1.value;
	let sNombreContacto2 = inputNombreContacto2.value;
	let sParentesco2 = inputParentesco2.value;
	let nTelContacto2 = inputTelContacto2.value;
	let sNombreContacto3 = inputNombreContacto3.value;
	let sParentesco3 = inputParentesco3.value;
	let nTelContacto3 = inputTelContacto3.value;
	let sCondicionMedica = inputCondicionMedica.value;
	let sComprobante = inputComprobante.value;
	let sInstitucion = inputInstitucion.value;
	let sNivel = inputNivel.value;
	let sSeccion = inputSeccion.value;

	if(!validadarFormulario()){

		adatosActuales.push(sIdEstudiante, sNombre, sApellido, nTelPersonal, dFechaNacimiento, sDireccion, 
		nTelCasa, sGenero, sGrupoSanguineo, sDonador, sFoto, sBeca, sNombreContacto1, sParentesco1, 
		nTelContacto1, sNombreContacto2, sParentesco2, nTelContacto2, sNombreContacto3, sParentesco3, 
		nTelContacto3, sCondicionMedica, sComprobante, sInstitucion, sNivel, sSeccion, true, SSegundoNombre, sSegundoApellido);
	
	}

	return adatosActuales;
}

// funcion para deshabilitar al estudiante

let botonDeshabilitar=document.querySelector('#btnDelete');
botonDeshabilitar.addEventListener('click', deshabilitarEstudiante);

function deshabilitarEstudiante() {
    let datosEstudiante= datosActualesFormulario();
    datosEstudiante[0]=document.querySelector('#txtIdentificacion').value;
    datosEstudiante[26]=false;
    actualizarEstudiante(datosEstudiante);
   	llenarCard();
   	ocultarFormulario();
   	limpiar();
   
}

