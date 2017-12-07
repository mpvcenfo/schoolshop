let inputIdentificacion = document.querySelector('#txtIdentificacion');
let inputNombre = document.querySelector('#txtNombre');
let inputSegundoNombre = document.querySelector('#txtSegundoNombre');
let inputApellido = document.querySelector('#txtApellido');
let inputSegundoApellido = document.querySelector('#txtSegundoApellido');
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
let inputInstitucion = document.querySelector('#txtInstitucion');
let inputNivel = document.querySelector('#txtNivel');
let inputSeccion = document.querySelector('#txtSeccion');
let botonRegistrar = document.querySelector('#btnRegistrar');

llenarInstituciones();

inputInstitucion.addEventListener('change', llenarNiveles);

botonRegistrar.addEventListener('click', registrarEstudiante);

function llenarInstituciones() {
    let instituciones = listarInstituciones();

    inputInstitucion.innerHTML = '';
    inputNivel.innerHTML = '';
    inputSeccion.innerHTML = '';

    for (let i = 0; i < instituciones.length; i++) {
        opcion = document.createElement('option');
        opcion.setAttribute('value', instituciones[i]['id_institucion']);
        opcion.text = instituciones[i]['nombre'];
        inputInstitucion.appendChild(opcion);
    }

    llenarNiveles();
}

function llenarNiveles() {
    let idInstitucion = inputInstitucion.value;
    let institucion = obtenerInstitucion(idInstitucion);

    let desde = Number(institucion['nivelDesde']);
    let hasta = Number(institucion['nivelHasta']);

    let secciones = institucion['cantSecciones'];

    inputNivel.innerHTML = '';
    inputSeccion.innerHTML = '';

    for (let i = desde; i <= hasta; i++) {
        opcion = document.createElement('option');
        opcion.setAttribute('value', i);
        opcion.text = obtenerNombreNivel(i);
        inputNivel.appendChild(opcion);
    }

    for (let i = 0; i < secciones; i++) {
        opcion = document.createElement('option');
        opcion.setAttribute('value', i);
        opcion.text = obtenerNombreSeccion(i);
        inputSeccion.appendChild(opcion);
    }
}

function obtenerNombreNivel(pnumeroNivel) {
    let nombreNivel = '';

    switch (pnumeroNivel) {
        case 0:
            nombreNivel = 'Maternal';
            break;
        case 1:
            nombreNivel = 'Pre-Kinder';
            break;
        case 2:
            nombreNivel = 'Kinder';
            break;
        case 3:
            nombreNivel = 'Preparatoria';
            break;
        case 4:
            nombreNivel = 'Primero';
            break;
        case 5:
            nombreNivel = 'Segundo';
            break;
        case 6:
            nombreNivel = 'Tercero';
            break;
        case 7:
            nombreNivel = 'Cuarto';
            break;
        case 8:
            nombreNivel = 'Quinto';
            break;
        case 9:
            nombreNivel = 'Sexto';
            break;
        case 10:
            nombreNivel = 'Sétimo';
            break;
        case 11:
            nombreNivel = 'Octavo';
            break;
        case 12:
            nombreNivel = 'Noveno';
            break;
        case 13:
            nombreNivel = 'Décimo';
            break;
        case 14:
            nombreNivel = 'Undécimo';
            break;
        case 15:
            nombreNivel = 'Decimosegundo';
            break;
        case 16:
            nombreNivel = 'Decimotercero';
            break;
    }

    return nombreNivel;
}

function obtenerNombreSeccion(pnumeroSeccion) {
    let nombreSeccion = '';

    switch (pnumeroSeccion) {
        case 0:
            nombreSeccion = 'A';
            break;
        case 1:
            nombreSeccion = 'B';
            break;
        case 2:
            nombreSeccion = 'C';
            break;
        case 3:
            nombreSeccion = 'D';
            break;
        case 4:
            nombreSeccion = 'E';
            break;
        case 5:
            nombreSeccion = 'F';
            break;
        case 6:
            nombreSeccion = 'G';
            break;
        case 7:
            nombreSeccion = 'H';
            break;
        case 8:
            nombreSeccion = 'I';
            break;
        case 9:
            nombreSeccion = 'J';
            break;
        case 10:
            nombreSeccion = 'K';
            break;
    }

    return nombreSeccion;
}


// esta es la función para registrar un estudiante

function registrarEstudiante() {
    let estudiante = {
        'identificacion': inputIdentificacion.value,
        'primerNombre': inputNombre.value,
        'segundoNombre': inputSegundoNombre.value,
        'primerApellido': inputApellido.value,
        'segundoApellido': inputSegundoApellido.value,
        'telefonoPersonal': inputTelPersonal.value,
        'fechaNacimiento': inputFechaNacimiento.value,
        'direccion': inputDireccion.value,
        'telefonoResidencia': inputTelCasa.value,
        'genero': inputGenero.value,
        'grupoSanguineo': inputGrupoSanguineo.value,
        'donador': inputDonador.value,
        'imagen': imagenUrl,
        'beca': inputBeca.value,
        'nombreContacto1': inputNombreContacto1.value,
        'parentescoContacto1': inputParentesco1.value,
        'telefonoContacto1': inputTelContacto1.value,
        'nombreContacto2': inputNombreContacto2.value,
        'parentescoContacto2': inputParentesco2.value,
        'telefonoContacto2': inputTelContacto2.value,
        'nombreContacto3': inputNombreContacto3.value,
        'parentescoContacto3': inputParentesco3.value,
        'telefonoContacto3': inputTelContacto3.value,
        'condicionMedica': inputCondicionMedica.value,
        'comprobante': comprobanteUrl,
        'institucion': inputInstitucion.value,
        'nivel': inputNivel.value,
        'seccion': inputSeccion.value,
        'cedulaEncargado': obtenerCedulaEncargado()
    };

    if (!validarFormulario()) {
        almacenarEstudiante(estudiante);
    }
}

//esta es la funcion que me permite validar campos vacios//

function validarFormulario() {
    let errorMsg = '';
    let bError = false;

    if (inputIdentificacion.value == '') {
        inputIdentificacion.classList.add('bordeError');
        errorMsg = 'Debe ingresar una identificación';
        bError = true;
    } else {
        inputIdentificacion.classList.remove('bordeError');
    }

    if (inputNombre.value == '') {
        inputNombre.classList.add('bordeError');
        errorMsg = 'Debe ingresar un primer nombre';
        bError = true;
    } else {
        inputNombre.classList.remove('bordeError');
    }

    if (inputApellido.value == '') {
        inputApellido.classList.add('bordeError');
        errorMsg = 'Debe ingresar un primer apellido';
        bError = true;
    } else {
        inputApellido.classList.remove('bordeError');
    }

    if (inputSegundoApellido.value == '') {
        inputSegundoApellido.classList.add('bordeError');
        errorMsg = 'Debe ingresar un segundo apellido';
        bError = true;
    } else {
        inputSegundoApellido.classList.remove('bordeError');
    }

    if (inputTelPersonal.value == '') {
        inputTelPersonal.classList.add('bordeError');
        errorMsg = 'Debe ingresar un teléfono personal';
        bError = true;
    } else {
        inputTelPersonal.classList.remove('bordeError');
    }

    if (inputFechaNacimiento.value == '') {
        inputFechaNacimiento.classList.add('bordeError');
        errorMsg = 'Debe ingresar una fecha de nacimiento';
        bError = true;
    } else {
        inputFechaNacimiento.classList.remove('bordeError');
    }

    if (inputDireccion.value == '') {
        inputDireccion.classList.add('bordeError');
        errorMsg = 'Debe ingresar una dirección';
        bError = true;
    } else {
        inputDireccion.classList.remove('bordeError');
    }

    if (inputTelCasa.value == '') {
        inputTelCasa.classList.add('bordeError');
        errorMsg = 'Debe ingresar un teléfono de residencia';
        bError = true;
    } else {
        inputTelCasa.classList.remove('bordeError');
    }

    if (inputGrupoSanguineo.value == '') {
        inputGrupoSanguineo.classList.add('bordeError');
        errorMsg = 'Debe ingresar un grupo sanguíneo';
        bError = true;
    } else {
        inputGrupoSanguineo.classList.remove('bordeError');
    }

    if (inputDonador.value == '') {
        inputDonador.classList.add('bordeError');
        errorMsg = 'Debe indicar si es donador';
        bError = true;
    } else {
        inputDonador.classList.remove('bordeError');
    }

    if (imagenUrl == '') {
        picture.classList.add('bordeError');
        errorMsg = 'Debe incluir una foto';
        bError = true;
    } else {
        picture.classList.remove('bordeError');
    }

    if (inputBeca.value == '') {
        inputBeca.classList.add('bordeError');
        errorMsg = 'Debe indicar si tiene beca';
        bError = true;
    } else {
        inputBeca.classList.remove('bordeError');
    }

    if (inputInstitucion.value == '') {
        inputInstitucion.classList.add('bordeError');
        errorMsg = 'Debe indicar la institución';
        bError = true;
    } else {
        inputInstitucion.classList.remove('bordeError');
    }

    if (inputNivel.value == '') {
        inputNivel.classList.add('bordeError');
        errorMsg = 'Debe indicar el nivel';
        bError = true;
    } else {
        inputNivel.classList.remove('bordeError');
    }

    if (inputSeccion.value == '') {
        inputSeccion.classList.add('bordeError');
        errorMsg = 'Debe indicar la sección';
        bError = true;
    } else {
        inputSeccion.classList.remove('bordeError');
    }

    if (inputNombreContacto1.value == '') {
        inputNombreContacto1.classList.add('bordeError');
        errorMsg = 'Debe ingresar nombre del contacto 1';
        bError = true;
    } else {
        inputNombreContacto1.classList.remove('bordeError');
    }

    if (inputParentesco1.value == '') {
        inputParentesco1.classList.add('bordeError');
        errorMsg = 'Debe ingresar parentesco del contacto 1';
        bError = true;
    } else {
        inputParentesco1.classList.remove('bordeError');
    }

    if (inputTelContacto1.value == '') {
        inputTelContacto1.classList.add('bordeError');
        errorMsg = 'Debe ingresar teléfono del contacto 1';
        bError = true;
    } else {
        inputTelContacto1.classList.remove('bordeError');
    }

    if (inputCondicionMedica.value == '') {
        inputCondicionMedica.classList.add('bordeError');
        errorMsg = 'Debe indicar si tiene una condición médica';
        bError = true;
    } else {
        inputCondicionMedica.classList.remove('bordeError');
    }

    if(inputCondicionMedica.value == '1' && comprobanteUrl == '') {
        inputComprobante.classList.add('bordeError');
        errorMsg = 'Debe incluir un documento de condición médica';
        bError = true;
    } else {
        inputComprobante.classList.remove('bordeError');
    }

    if (inputInstitucion.value == '') {
        inputInstitucion.classList.add('bordeError');
        errorMsg = 'Debe seleccionar una institución';
        bError = true;
    } else {
        inputInstitucion.classList.remove('bordeError');
    }

    if (inputNivel.value == '') {
        inputNivel.classList.add('bordeError');
        errorMsg = 'Debe seleccionar un nivel';
        bError = true;
    } else {
        inputNivel.classList.remove('bordeError');
    }


    if (inputSeccion.value == '') {
        inputSeccion.classList.add('bordeError');
        errorMsg = 'Debe seleccionar una sección';
        bError = true;
    } else {
        inputSeccion.classList.remove('bordeError');
    }

    return bError;
}



/*funcion para dejar los campos en blanco*/
function limpiar() {
    inputIdentificacion.value = '';
    inputNombre.value = '';
    inputSegundoNombre.value = '';
    inputApellido.value = '';
    inputSegundoApellido.value = '';
    inputTelPersonal.value = '';
    inputFechaNacimiento.value = '';
    inputDireccion.value = '';
    inputTelCasa.value = '';
    inputGrupoSanguineo.value = '';
    inputDonador.value = '';
    imagenUrl = '';
    inputBeca.value = '';
    inputNombreContacto1.value = '';
    inputParentesco1.value = '';
    inputTelContacto1.value = '';
    inputNombreContacto2.value = '';
    inputParentesco2.value = '';
    inputTelContacto2.value = '';
    inputNombreContacto3.value = '';
    inputParentesco3.value = '';
    inputTelContacto3.value = '';
    inputCondicionMedica.value = '';
    comprobanteUrl = '';
    inputInstitucion.value = '';
    inputNivel.value = '';
    inputSeccion.value = '';

}

let imagenUrl = '';
let comprobanteUrl = '';

$(function () {
    // Configure Cloudinary
    // with credentials available on
    // your Cloudinary account dashboard
    $.cloudinary.config({ cloud_name: 'acmeinnovate', api_key: '867273236384566' });

    // Upload button
    let uploadButton = $('#btnSeleccionarImagen');

    // Upload button event
    uploadButton.on('click', function (e) {
        // Initiate upload
        cloudinary.openUploadWidget({ cloud_name: 'acmeinnovate', upload_preset: 'proyecto1', tags: ['cgal'] },
            function (error, result) {
                if (error) console.log(error);
                // If NO error, log image data to console
                let id = result[0].public_id;
                console.log(id);
                imagenUrl = processImage(id);
                console.log(imagenUrl);
            });
    });
})

$(function () {
    // Configure Cloudinary
    // with credentials available on
    // your Cloudinary account dashboard
    $.cloudinary.config({ cloud_name: 'acmeinnovate', api_key: '867273236384566' });

    // Upload button
    let uploadButton = $('#btnSeleccionarDocumento');

    // Upload button event
    uploadButton.on('click', function (e) {
        // Initiate upload
        cloudinary.openUploadWidget({ cloud_name: 'acmeinnovate', upload_preset: 'proyecto1', tags: ['cgal'] },
            function (error, result) {
                if (error) console.log(error);
                // If NO error, log image data to console
                let id = result[0].public_id;
                console.log(id);
                comprobanteUrl = processImage(id);
                console.log(comprobanteUrl);
            });
    });
})

function processImage(id) {
    let options = {
        client_hints: true,
    };
    return $.cloudinary.url(id, options);
}
