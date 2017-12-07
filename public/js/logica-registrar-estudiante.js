function almacenarEstudiante(pdatosestudiante) {
    let peticion = $.ajax({
        url: '../api/registrar_estudiante.php',
        type: 'post',
        contentType: 'application/x-www-form-urlencoded;charset=UTF-8',
        dataType: 'json',
        async: false,
        data: {
            pestudiante: pdatosestudiante
        }
    });
    peticion.done(function () {
        console.log('Se registró el estudiante.');
    });
    peticion.fail(function () {
        console.log('No se registró el estudiante.');
    });
}

function obtenerInstitucion(pid_institucion) {
    let institucion;

    let peticion = $.ajax({
        url: '../api/obtener_institucion.php',
        type: 'post',
        contentType: 'application/x-www-form-urlencoded;charset=UTF-8',
        dataType: 'json',
        async: false,
        data: {
            id_institucion: pid_institucion
        }
    });
    peticion.done(function (datos) {
        institucion = datos;
        console.log('Se encontró la institución.');
    });
    peticion.fail(function () {
        console.log('No se encontró la institución.');
    });

    return institucion;
}

function listarInstituciones() {
    let instituciones = [];

    let peticion = $.ajax({
        url: '../api/listar_instituciones.php',
        type: 'post',
        contentType: 'application/x-www-form-urlencoded;charset=UTF-8',
        dataType: 'json',
        async: false,
        data: {
        }
    });
    peticion.done(function (datos) {
        instituciones = datos;
        console.log('Se encontraron instituciones.');
    });
    peticion.fail(function () {
        console.log('No se encontraron instituciones.');
    });

    return instituciones;
}

function obtenerCedulaEncargado() {
    return localStorage.getItem('lsCedulaEncargado');
}