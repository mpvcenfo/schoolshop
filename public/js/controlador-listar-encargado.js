llenarCard();



let inputNombre = document.querySelector('#txtNombre');
let inputSegundoNombre=document.querySelector('#txtSegundoNombre');
let inputApellido = document.querySelector('#txtApellido');
let inputSegundoApellido= document.querySelector('#txtSegundoApellido');
let inputIdentificacion= document.querySelector('#txtIdentificacion');
let inputFechaNacimiento = document.querySelector('#txtFechaNacimiento');
let inputEstadoCivil= document.querySelector('#txtEstadoCivil');
let inputGenero = document.querySelector('input[name= genero]:checked');
let inputTelefono = document.querySelector('#txtTelefono');
let inputCorreo = document.querySelector('#txtCorreo');
let inputDireccion= document.querySelector('#txtDireccion');
let inputParentesco = document.querySelector('#txtParentesco')



function llenarCard(){

let divPrincipal=document.querySelector("#cardsEncargados");
divPrincipal.innerHTML="";
let tablaEncargados=obtenerListaEncargado();

let usuarios=obtenerListaUsuarios();

for (let i=0; i< tablaEncargados.length; i++){

	for (let j=0; j<usuarios.length; j++){

		if(usuarios[j][0]==tablaEncargados[i][2] && usuarios[j][4]){


	let nuevoDiv=document.createElement("div")
	//nuevoDiv.id='Encargado' +i;
	nuevoDiv.classList.add("cardsHome");

	/*let nuevoHeader=document.createElement("h3");
	let header= document.createTextNode(tablaEstudiante[i][0]);
	nuevoHeader.appendChild(header);*/



	/*let divImg=document.createElement("div");
	divImg.classList.add("imagencard");
	let foto=document.createElement("img")
	//foto.src=document.createElement(tablaEncargados[i][7]);
	divImg.appendChild(foto);*/

	let nomyApe=document.createElement("span");
	let cedula=document.createElement("span");
	let telefono=document.createElement("span");
	let correo=document.createElement("span");
	let eye=document.createElement("a");

	eye.classList.add("fa");
	eye.classList.add("fa-eye");
	eye.id=tablaEncargados[i][2];
	eye.href="#";
	eye.addEventListener('click', mostrarFormulario);

	let nombreApellido=document.createTextNode(tablaEncargados[i][0]+" "+tablaEncargados[i][10]+" "+tablaEncargados[i][1]+" "+tablaEncargados[i][11]);
	let identificacion=document.createTextNode("Identificación: "+tablaEncargados[i][2]);
	//let phone=document.createElement("prueba: "+tablaEncargados[i][6]);
	let email=document.createTextNode("Correo: "+tablaEncargados[i][7]);
		
	
	nomyApe.appendChild(nombreApellido);
	cedula.appendChild(identificacion);
	//telefono.appendChild(phone);
	correo.appendChild(email);


	
	nuevoDiv.appendChild(nomyApe);
	nuevoDiv.appendChild(cedula);
	nuevoDiv.appendChild(telefono);
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

botonModificar.addEventListener('change', guardarImagen);


function llenarFormulario(pid){

let id=document.querySelector('#txtIdentificacion').value;

let cuerpoFormulario=document.querySelector("#seccion");
let listaEncargado =buscarEncargadoPorCodigo(pid);
if(false){
	listaEncargado =obtenerListaEncargado();
//}else{

}

			
            document.querySelector('#txtNombre').value=listaEncargado[0];
            document.querySelector('#txtSegundoNombre').value=listaEncargado[10];
          	document.querySelector('#txtApellido').value=listaEncargado[1];
          	document.querySelector('#txtSegundoApellido').value=listaEncargado[11];
            document.querySelector('#txtIdentificacion').value=listaEncargado[2];
			document.querySelector('#txtIdentificacion').disabled=true;
			document.querySelector('#txtFechaNacimiento').value=listaEncargado[3];
			document.querySelector('#txtEstadoCivil').value=listaEncargado[4]
			document.querySelector('input[value='+listaEncargado[5]+']').checked=true;
            document.querySelector('#txtTelefono').value=listaEncargado[6];
            document.querySelector('#txtCorreo').value=listaEncargado[7];
            document.querySelector('#txtDireccion').value=listaEncargado[8];
            document.querySelector('#txtParentesco').value=listaEncargado[9];
            

              botonModificar.addEventListener('change',guardarImagen);

}

botonModificar.addEventListener('click',obtenerDatosActualizar);

botonModificar.addEventListener('click',ocultarFormulario);

function obtenerDatosActualizar(){
	let encargadoModificado=[];

	let sNombre = inputNombre.value;
	let sSegundoNombre=inputSegundoNombre.value;
	let sApellido = inputApellido.value;
	let sSegundoApellido= inputSegundoApellido.value;
	let nIdentificacion = Number(inputIdentificacion.value);
	let dFechaNacimiento = Date(inputFechaNacimiento.value);
	let sEstadoCivil = inputEstadoCivil.value;
	let sGenero =  document.querySelector('input[name= genero]:checked').value;
	let nTelefono = inputTelefono.value;
	let sCorreo= inputCorreo.value;
	let sFoto = new FileReader();
	let sDireccion= inputDireccion.value;
	let sParentesco= inputParentesco.value;


	encargadoModificado.push(sNombre, sApellido, nIdentificacion, dFechaNacimiento, 
		 sEstadoCivil, sGenero, nTelefono, sCorreo, sDireccion, sParentesco, sSegundoNombre, sSegundoApellido );

	actualizarEncargado(encargadoModificado);
	llenarCard();

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
botonDeshabilitar.addEventListener('click', deshabilitarEncargado);

function deshabilitarEncargado() {
    let cedula=document.querySelector('#txtIdentificacion').value;


    ModEstadoListaUsuarios(cedula);
   	llenarCard();
   	ocultarFormulario();
   	
   
}







