let inputCedula = document.querySelector('#txtCedula');
let inputNombre = document.querySelector('#txtNombre');
let inputTelefono = document.querySelector('#txtTelefono');
let inputCorreo = document.querySelector('#txtCorreo');
let inputEncargado = document.querySelector('#txtEncargado');

let inputBolsos = document.querySelector('#checkBolsos');
let inputLibros = document.querySelector('#checkLibros');
let inputUniSport = document.querySelector('#checkUniSport');
let inputArte = document.querySelector('#checkArte');
let inputCuadernos = document.querySelector('#checkCuadernos');
let inputUniFormal = document.querySelector('#checkUniFormal');
let inputHerramientas = document.querySelector('#checkHerramientas');
let fieldCategorias = document.querySelector('#fieldCategorias');

let botonRegistrar = document.querySelector('#btnRegistrar');

botonRegistrar.addEventListener('click', registrarProveedor);

function registrarProveedor() {
    if (!errorFormulario()) {
        let proveedor = {
            'cedula': inputCedula.value,
            'nombre': inputNombre.value,
            'telefono': inputTelefono.value,
            'correo': inputCorreo.value,
            'encargado': inputEncargado.value,
            'categoria': obtenerCategoriasSeleccionadas()
        };
        almacenarProveedor(proveedor);
    }
}

function errorFormulario() {
    let errorMsg = '';
    let bError = false;

    if (inputCedula.value == '') {
        inputCedula.classList.add('bordeError');
        errorMsg = 'Debe ingresar una cédula jurídica';
        bError = true;
    } else {
        inputCedula.classList.remove('bordeError');
    }

    if (inputNombre.value == '') {
        inputNombre.classList.add('bordeError');
        errorMsg = 'Debe ingresar el nombre de proveedor';
        bError = true;
    } else {
        inputNombre.classList.remove('bordeError');
    }

    if (inputTelefono.value == '') {
        inputTelefono.classList.add('bordeError');
        errorMsg = 'Debe ingresar un teléfono';
        bError = true;
    } else {
        inputTelefono.classList.remove('bordeError');
    }

    if (inputCorreo.value == '') {
        inputCorreo.classList.add('bordeError');
        errorMsg = 'Debe ingresar un correo electrónico';
        bError = true;
    } else {
        inputCorreo.classList.remove('bordeError');
    }

    if (inputEncargado.value == '') {
        inputEncargado.classList.add('bordeError');
        errorMsg = 'Debe ingresar un encargado';
        bError = true;
    } else {
        inputEncargado.classList.remove('bordeError');
    }

    if (obtenerCategoriasSeleccionadas() == []) {
        fieldCategorias.classList.add('bordeError');
        errorMsg = 'Debe seleccionar al menos una categoría';
        bError = true;
    } else {
        fieldCategorias.classList.remove('bordeError');
    }
    
    return bError;
}

function obtenerCategoriasSeleccionadas() {
    categorias = [];



    return categorias;
}