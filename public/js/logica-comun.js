llenarNav();

/*log in*/

function validarUsuario(pdatos) {
    let usuario = [];
    
        let peticion = $.ajax({
            url: '../api/validar_usuario.php',
            type: 'post',
            contentType: 'application/x-www-form-urlencoded;charset=UTF-8',
            dataType: 'json',
            async: false,
            data: {
                'pusuario' :pdatos[0],
                'pclave' :pdatos[1],
            }
        });
        peticion.done(function (datos) {
            usuario = datos;
            console.log('Se obtuvo el usuario con éxito.');
        });
        peticion.fail(function () {
            console.log('No se obtuvo el usuario.');
        });
    
        return usuario;
    }


/******************************OBTENER LISTA *********************************************/

//USUARIOS
function obtenerListaUsuarios() {
    let usuarios = JSON.parse(localStorage.getItem('listaUsuariosLS'));

    if (usuarios == null) {
        usuarios = [["0-0000-0000", "admin", "123", 0, true],
        ["2-0000-0000", "director", "123", 1, true],
        ["100000000", "profesor", "123", 2, true],
        ["3-0000-0000", "encargado", "123", 3, true],
        ["4-0000-0000", "asistente", "123", 4, true]]
    }
    return usuarios;
}


//DIRECTOR
function obtenerListaDirectores() {
    let listaDirectores = JSON.parse(localStorage.getItem('listaDirectoresLS'));

    if (listaDirectores == null) {
        listaDirectores = [

            ["Susana", "Mora Montero ", "104210633", "1960-07-27", "Femenino", "63542189",
                "susanami@gmail.com", "imgLS/director1.png", "Santa Marta", "Ninguno", "Ninguno"],

            ["Mario", "Sibaja Villalobos", "110480921", "1966-10-07", "Masculino", "86953214",
                "mariosv@gmail.com", "imgLS/director2.png", "Santa Marta", "Ninguno", "Ninguno"]


        ]

    }

    return listaDirectores;

}


//PROFESOR

function obtenerListaPersonal() {
    let listaPersonal = JSON.parse(localStorage.getItem('listaPersonalLS'));

    if (listaPersonal == null) {
        listaPersonal = [

            ["José Antonio", "Azofeifa Brown", 100000000, "1974-10-06", "Masculino", 87036521, "joseab@gmail.com",
                "Licenciatura", "imgLS/profesor1.png", "inst1", "Ninguno", "Ninguno"],

            ["Marta", "Pereira Morales", 125480623, "1977-11-05", "Femenino", 88603214, "martapm@gmail.com",
                "Maestría", "imgLS/profesor2.png", "Santa Marta", "Ninguno", "Ninguno"]


        ]

    }

    return listaPersonal;
}

//ENCARGADO
function obtenerListaEncargado() {
    let listaEncargado = JSON.parse(localStorage.getItem('listaEncargadoLS'));

    if (listaEncargado == null) {
        listaEncargado = [

            ["Carlos ", "Castro Madrigal", 406988715, "1972-02-19", "Casado", "Masculino", 65324788,
                "carloscm@gmail.com", "San Pablo, Heredia", "Padre"],

            ["Marco", "Sandoval Piedra", 118920472, "1977-12-12", "Casado", "Masculino", 65547188,
                "marcosp@gmail.com", "Tibas, San José", "Padre"]

        ]

    }

    return listaEncargado;
}

//ASISTENTE
function obtenerListaAsistente() {
    let listaAsistente = JSON.parse(localStorage.getItem('listaAsistenteLS'));

    if (listaAsistente == null) {
        listaAsistente = [

            ["Claudia", "Acosta Barquero", 310540684, "1982-11-22", "Femenino", 86329521, "claudiaab@gmail.com",
                "imgLS/asistente.png"]

        ]

    }

    return listaAsistente;
}

//colegio
// function obtenerListaInstituciones() {
//     let listaInstituciones = JSON.parse(localStorage.getItem("listaInstitucionesLS"));
//     if (listaInstituciones == null) {
//         listaInstituciones = [["inst0", "Saint Paul", "500 Metros Oeste de la Panasonic", "9.977118", "-84.203999", "Ana Cristina", "infocol@saintpaul.ed.cr", "2438-0824", "1", "1", "imgLS/SaintPaul.jpg", "true", "11"], ["inst1", "Lincoln High", "Calle 124 Ave 22", "9.977124", "-84.203999", "Franco Ramirez", "infocol@saintpaul.ed.cr", "2256-9845", "1", "1", "imgLS/inst1.jpg", "true", "11"], ["inst2", "Greenlands Charter School", "Calle 124 Ave 23", "9.977258", "-84.203999", "Estaban Ramirez", "infocol@saintpaul.ed.cr", "2289-7468", "1", "1", "imgLS/inst2.jpg", "true", "11"], ["inst3", "Horizon Conservatory", "Calle 124 Ave 24", "8.977118", "-84.203999", "Franco Valenciano", "infocol@saintpaul.ed.cr", "2248-6481", "1", "1", "imgLS/inst3.jpg", "true", "11"], ["inst4", "Sunshine High", "Calle 124 Ave 25", "7.685468", "-84.203999", "Oscar Pereira", "infocol@saintpaul.ed.cr", "2685-5425", "1", "1", "imgLS/inst4.jpg", "true", "11"]]
//     }
//     return listaInstituciones;
// }

function obtenerListaInstituciones() {
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
        console.log('Se obtuvo el reporte con éxito.');
    });
    peticion.fail(function () {
        console.log('No se obtuvo el reporte.');
    });

    return instituciones;
}

//LISTA ARTICULOS

function obtenerListaArticulosCabeza() {
    let instituciones = [];

    let peticion = $.ajax({
        url: '../api/listar_lista_articulos_cabeza.php',
        type: 'post',
        contentType: 'application/x-www-form-urlencoded;charset=UTF-8',
        dataType: 'json',
        async: false,
        data: {
        }
    });
    peticion.done(function (datos) {
        instituciones = datos;
        console.log('Se obtuvo el reporte con éxito.');
    });
    peticion.fail(function () {
        console.log('No se obtuvo el reporte.');
    });

    return instituciones;
}

function obtenerListaArticulosDetalle(pid) {
    let instituciones = [];

    let peticion = $.ajax({
        url: '../api/listar_lista_articulos_detalle.php',
        type: 'post',
        contentType: 'application/x-www-form-urlencoded;charset=UTF-8',
        dataType: 'json',
        async: false,
        data: {
            'pid' :pid,
        }
    });
    peticion.done(function (datos) {
        instituciones = datos;
        console.log('Se obtuvo el reporte con éxito.');
    });
    peticion.fail(function () {
        console.log('No se obtuvo el reporte.');
    });

    return instituciones;
}









/******************************    FIN    OBTENER LISTA *********************************************/

function obtenerRol() {
    let sesionActual = JSON.parse(localStorage.getItem('sesionLS'));
    let rol = sesionActual[1];
    return rol;
}

function obtenerActivo() {
    let sesionActual = JSON.parse(localStorage.getItem('sesionLS'));
    let activo = sesionActual[0];
    return activo;
}



function llenarNav() {
    let rol = obtenerRol();
    let navActual = document.querySelector('nav');
    switch (rol) {
        //admin
        case 0:
            navActual.innerHTML = "<a href='home-administrador.html'> <i class='fa fa-dot-circle-o'  aria-hidden='true'></i>  Instituciones</a><a href='#'> <i class='fa fa-dot-circle-o'  aria-hidden='true'></i>   Reportes</a><a href='registrar-director.html'> <i class='fa fa-dot-circle-o'  aria-hidden='true'></i>   Directores</a>            <a href='listar-director.html'> <i class='fa fa-dot-circle-o'  aria-hidden='true'></i>   Listar Directores</a>            <a href='curso-admin.html'> <i class='fa fa-dot-circle-o'  aria-hidden='true'></i>   Cursos</a>            <a href='#'> <i class='fa fa-dot-circle-o'  aria-hidden='true'></i>   Encargados</a>            <a href='#'> <i class='fa fa-dot-circle-o'  aria-hidden='true'></i>   Estudiantes</a>            <a href='login.html' onclick='cerrarSesion()'> <i class='fa fa-dot-circle-o'  aria-hidden='true'></i>   Cerrar sesión</a>"
            break;
        //director
        case 1:
            navActual.innerHTML = "<a href='miInstitucion.html'> <i class='fa fa-dot-circle-o'  aria-hidden='true'></i>   Mi Institución</a><a href='home-director.html'> <i class='fa fa-dot-circle-o'  aria-hidden='true'></i>   Registrar Personal</a><a href='listar-miPersonal.html'> <i class='fa fa-dot-circle-o'  aria-hidden='true'></i>   Listar Personal</a><a href='#'> <i class='fa fa-dot-circle-o'  aria-hidden='true'></i>   Registrar proveedor</a>	<a href='cursos.html'> <i class='fa fa-dot-circle-o'  aria-hidden='true'></i>   Cursos Extras</a><a href='listar-Articulo.html'> <i class='fa fa-dot-circle-o'  aria-hidden='true'></i>   Articulos</a>	<a href='#'> <i class='fa fa-dot-circle-o'  aria-hidden='true'></i>   Reporte</a><a href='login.html' onclick='cerrarSesion()'> <i class='fa fa-dot-circle-o'  aria-hidden='true'></i>   Cerrar sesión</a>"
            break;
        //profesor
        case 2:
            navActual.innerHTML = "<a href='listar-Articulo.html'> <i class='fa fa-dot-circle-o'  aria-hidden='true'></i>   Artículos</a><a href='home-profesor.html'> <i class='fa fa-dot-circle-o'  aria-hidden='true'></i>   Listas de Artículos</a><a href='registrar-listaArticulos.html'> <i class='fa fa-dot-circle-o'  aria-hidden='true'></i>   Reportes</a><a href='login.html' onclick='cerrarSesion()'> <i class='fa fa-dot-circle-o'  aria-hidden='true'></i>   Cerrar sesión</a>"
            break;
        //encargado
        case 3:
            navActual.innerHTML = "<a href='registrar-estudiante.html'> <i class='fa fa-dot-circle-o'  aria-hidden='true'></i>   Registrar estudiante</a><a href='listar-estudiante.html'> <i class='fa fa-dot-circle-o'  aria-hidden='true'></i>   Listar estudiante(s)</a><a href='shopping.html'> <i class='fa fa-dot-circle-o'  aria-hidden='true'></i>   Comprar Utiles escolares</a><a href='login.html' onclick='cerrarSesion()'> <i class='fa fa-dot-circle-o'  aria-hidden='true'></i>   Cerrar sesión</a>"
            break;
        //asistente
        case 4:
            navActual.innerHTML = "<a href='home-asistente.html'> <i class='fa fa-dot-circle-o'  aria-hidden='true'></i>   Generar citas</a>	<a href='redimir.html'> <i class='fa fa-dot-circle-o'  aria-hidden='true'></i>   Redimir Articulos</a><a href='reporteArticuloAgotado.html'> <i class='fa fa-dot-circle-o'  aria-hidden='true'></i>   Reporte</a><a href='login.html' onclick='cerrarSesion()'> <i class='fa fa-dot-circle-o'  aria-hidden='true'></i>   Cerrar sesión</a>"
            break;
        default:
            navActual.innerHTML = "<a href='login.html'> <i class='fa fa-dot-circle-o'  aria-hidden='true'></i>   Iniciar sesión</a>"
            break;
    }

}


function indicarCodColegio() {
    let codCole =[];
    
    let cedula = obtenerActivo();
    let peticion = $.ajax({
        url: '../api/obtener_codigo_institucion_actua.php',
        type: 'post',
        contentType: 'application/x-www-form-urlencoded;charset=UTF-8',
        dataType: 'json',
        async: false,
        data: {
            'pcedula' : cedula,
        }
    });
    peticion.done(function (datos) {
        codCole = datos;
        console.log('Se obtuvo la inst.');
    });
    peticion.fail(function () {
        console.log('No se obtuvo la inst.');
    });
      

    return codCole['institucion'];
    
}

function colegioActual() {
    let cod = indicarCodColegio();
    let lista = obtenerListaInstituciones()
    let colegio;
    for (let i = 0; i < lista.length; i++) {
        if (cod == lista[i][0])
            colegio = lista[i][1];
    }

    return colegio;

}

// llenar nivel

function llenarSelectNivel(){
    let inst=obtenerListaInstituciones();
    let id=indicarCodColegio();
    let select=document.querySelector('#nivel');
    select.innerHTML="";
    let actual;
    for (let i = 0; i < inst.length; i++) {
        if(inst[i]['id_institucion']==id){
            actual=inst[i];
        }
    }

    let desde=Number(actual['nivelDesde']);
    let hasta=Number(actual['nivelHasta']);
    for(;desde<hasta;desde++){
        let o=document.createElement('option');
        o.value=desde;
        o.innerText=obtenerNombreNivel(desde);
        select.add(o);
    }
}

function llenarSelectSeccion(){
    let inst=obtenerListaInstituciones();
    let id=indicarCodColegio();
    let select=document.querySelector('#seccion');
    select.innerHTML="";
    let actual;
    for (let i = 0; i < inst.length; i++) {
        if(inst[i]['id_institucion']==id){
            actual=inst[i];
        }
    }

    let cant=Number(actual['cantSecciones']);
    for(let i=0;i<cant;i++){
        let o=document.createElement('option');
        let valor=(i+10).toString(32).toUpperCase();
        o.value=valor;
        o.innerText=valor;
        select.add(o);
    }



}

//guardar temp lista
function guardarListaTemporal(miLista){
    localStorage.setItem('listaTempLS', JSON.stringify(miLista));
}
//traer temp lista
function obtenerListaTemporal(){
    return JSON.parse(localStorage.getItem('listaTempLS'));
}



//return
document.querySelector('#return').addEventListener('click', goBack);
function goBack() {
    borrarTemp();
    window.history.back();
}

function borrarTemp() {
    let vacio=[];
    localStorage.setItem("tempInstitucionLS",JSON.stringify(vacio));
}

function obtenerTemp() {
    let temp=JSON.parse(localStorage.getItem("tempInstitucionLS"));
    if(temp==null){
        temp=[];
    }
    return temp;
}



//pedidos
function obtenerListaCitas() {
    let listaCitas = JSON.parse(localStorage.getItem("listaCitasLS"));
    if (listaCitas == null) {
        listaCitas = [["115050006", "Arturo", "Aymerich", "arturoap2@gmail.com", "05/11/2017", ""], ["125465972", "Edwin", "Villalobos", "Edwin@gmail.com", "05/11/2017", ""], ["112456876", "Carlos", "Perez", "Cperez@gmail.com", "08/11/2017", ""], ["112365487", "Marco", "Vargas", "Mvargas@gmail.com", "09/11/2019", ""]];
    }
    return listaCitas;
}

function obtenerListaCitasPorCod(pCod) {
    let listaCitas = obtenerListaCitas();
    for (let i = 0; i < listaCitas.length; i++) {
        if (pCod == listaCitas[i][0]) {
            return listaCitas[i];
        }
    }
}


function obtenerArticulos() {
    let articulos = [];

    let peticion = $.ajax({
        url: '../api/listar_articulos.php',
        type: 'post',
        contentType: 'application/x-www-form-urlencoded;charset=UTF-8',
        dataType: 'json',
        async: false,
        data: {
        }
    });
    peticion.done(function (datos) {
        articulos = datos;
        console.log('Se obtuvo el reporte listar articulos con éxito.');
    });
    peticion.fail(function () {
        console.log('No se obtuvo el reporte listar articulos.');
    });

    return articulos;
}


function obtenerTablaArticulos(){
    let listaArticulos =[];

    let peticion = new XMLHttpRequest();   // new HttpRequest instance 
    let url = "../api/listar_tabla_articulos.php";
    
    peticion.open("GET", url, false);
    peticion.setRequestHeader("Content-Type", "application/json");
    
    peticion.onreadystatechange = function() {//Call a function when the state changes.
        if(peticion.readyState == 4) {
            listaArticulos= JSON.parse(peticion.response);
            // console.log(peticion.response);
        }
    }

    
    peticion.send();
    
    
    return listaArticulos;
}


//registrar el detalle de una lista

function registrarListaDetalle(pNuevoListaDetalle){
    
     let peticion = $.ajax({
         url: '../api/registrar_lista_detalle.php',
         type: 'post',
         contentType: 'application/x-www-form-urlencoded;charset=ISO-8859-15',
         dataType : 'json',
         async:false,
         data:{
             'plista' : pNuevoListaDetalle[0],
             'particulo' : pNuevoListaDetalle[1],
         }
       });
       peticion.done(function(datos){
         
         console.log('El detalle de la lista se ha registrado con éxito');
       });
       peticion.fail(function(){
         
         console.log('Error de conexion en lista detalle');
       });
      
 }

 //modificar Lista detalle
 function modificarListaDetalle(pmodListaDetalle){
    
     let peticion = $.ajax({
         url: '../api/modificar_lista_detalle.php',
         type: 'post',
         contentType: 'application/x-www-form-urlencoded;charset=ISO-8859-15',
         dataType : 'json',
         async:false,
         data:{
             'plista' : pmodListaDetalle[0],
             'particulo' : pmodListaDetalle[1],
         }
       });
       peticion.done(function(datos){
         
         console.log('El detalle de la lista se ha modifcado con éxito');
       });
       peticion.fail(function(){
         
         console.log('Error de conexion en lista detalle modificar');
       });
      
 }


 //registrarListaCabeza

function registrarListaCabeza(pNuevoListaCabeza){
    
     
     let peticion = $.ajax({
         url: '../api/registrar_lista_cabeza.php',
         type: 'post',
         contentType: 'application/x-www-form-urlencoded;charset=ISO-8859-15',
         dataType : 'json',
         async:false,
         data:{
             'pid_lista' : pNuevoListaCabeza[0],
             'pnombre' : pNuevoListaCabeza[1],
             'pdescripcion' : pNuevoListaCabeza[2],
             'pinstitucion' : pNuevoListaCabeza[3],
             'pnivel' : pNuevoListaCabeza[5],
             'pseccion' : pNuevoListaCabeza[4],

         }
       });
       peticion.done(function(datos){
         
         console.log('La Cabeza de la lista se ha registrado con éxito');
       });
       peticion.fail(function(){
         
         console.log('Error de conexion en lista cabeza');
       });
      
 }
//modificar lista Cabeza
function modificarListaCabeza(pmodLista){
    
     
     let peticion = $.ajax({
         url: '../api/modificar_lista_cabeza.php',
         type: 'post',
         contentType: 'application/x-www-form-urlencoded;charset=ISO-8859-15',
         dataType : 'json',
         async:false,
         data:{
             'pid_lista' : pmodLista[0],
             'pnombre' : pmodLista[1],
             'pdescripcion' : pmodLista[2],
             'pnivel' : pmodLista[4],
             'pseccion' : pmodLista[3],

         }
       });
       peticion.done(function(datos){
         
         console.log('La Cabeza de la lista se ha modificado con éxito');
       });
       peticion.fail(function(){
         
         console.log('Error de conexion en lista cabeza modificar');
       });
      
 }

 //deshabilitar lista
 function deshabilitarListaArticulo(pid) {

    let peticion = $.ajax({
        url: '../api/deshabilitar_lista_articulo.php',
        type: 'post',
        contentType: 'application/x-www-form-urlencoded;charset=UTF-8',
        dataType: 'json',
        async: false,
        data: {
            'pid' :pid,
        }
    });
    peticion.done(function (datos) {
        console.log('Se deshabilito con exito la lista.');
    });
    peticion.fail(function () {
        console.log('No se deshabilito la lista.');
    });

}


function registrarInstitucion(pNuevaInstitucion){
    let peticion = $.ajax({
        url: '../api/registrar_institucion.php',
        type: 'post',
        contentType: 'application/x-www-form-urlencoded;charset=ISO-8859-15',
        dataType : 'json',
        async:false,
        data:{
            'pidInstitucion' : pNuevaInstitucion[0],
            'pnombre' : pNuevaInstitucion[1],
            'pdireccion' : pNuevaInstitucion[2],
            'platitud' : pNuevaInstitucion[3],
            'plongitud' : pNuevaInstitucion[4],
            'pcontacto' : pNuevaInstitucion[5],
            'pcorreo' : pNuevaInstitucion[6],
            'ptelefono' : pNuevaInstitucion[7],
            'pnivelDesde' : pNuevaInstitucion[8],
            'pnivelHasta' : pNuevaInstitucion[9],
            'pcantSecciones' : pNuevaInstitucion[10],
            'pimagen' : pNuevaInstitucion[11],

        }
      });
      peticion.done(function(datos){
        
        console.log('La inst se ha registrado con éxito');
      });
      peticion.fail(function(){
        
        console.log('Error de conexion en inst');
      });

}

//registtrar Articulo
let i=0;
function registrarArticulo(pNuevoArticulo){
    i=i+1;
    console.log(i);
    let peticion = $.ajax({
        url: '../api/registrar_articulo.php',
        type: 'post',
        contentType: 'application/x-www-form-urlencoded;charset=ISO-8859-15',
        dataType : 'json',
        async:false,
        data:{
            'pid_articulo' : pNuevoArticulo[0],
            'pnombre' : pNuevoArticulo[1],
            'pdescripcion' : pNuevoArticulo[2],
            'pproveedor' : pNuevoArticulo[3],
            'pinstitucion' : pNuevoArticulo[4],
            'prequiereCita' : pNuevoArticulo[5],
            'pcosto' : pNuevoArticulo[6],
            'pcostoVenta' : pNuevoArticulo[7],
            'pcostoMercado' : pNuevoArticulo[8],
            'pdisponible' : pNuevoArticulo[9],
            'pimagen' : pNuevoArticulo[10],

        }
      });
      peticion.done(function(datos){
        
        console.log('El articulo se ha registrado con éxito');
      });
      peticion.fail(function(){
        
        console.log('Error de conexion en articulo LC');
      });

}



//proveedor

function obtenerProveedor(){
    let listaproveedores = [];
    
        let peticion = $.ajax({
          url: '../api/llamar_Proveedor.php',
          type: 'post',
          contentType: 'application/x-www-form-urlencoded;charset=ISO-8859-15',
          dataType : 'json',
          async:false,
          data:{
         
          }
        });
        peticion.done(function(datos){
          listaproveedores = datos;
          console.log('Conexion exitosa');
        });
        peticion.fail(function(){
          listaproveedores = [];
          console.log('Error de conexion');
        });
        return listaproveedores;
  }







//nombre nivel
function obtenerNombreNivel(nNivel) {
    let sNombre;

    switch (nNivel) {
        case 0:
            sNombre = 'Maternal';
            break;
        case 1:
            sNombre = 'Prekinder';
            break;
        case 2:
            sNombre = 'Kinder';
            break;
        case 3:
            sNombre = 'Preparatoria';
            break;
        case 4:
            sNombre = 'Primero';
            break;
        case 5:
            sNombre = 'Segundo';
            break;
        case 6:
            sNombre = 'Tercero';
            break;
        case 7:
            sNombre = 'Cuarto';
            break;
        case 8:
            sNombre = 'Quinto';
            break;
        case 9:
            sNombre = 'Sexto';
            break;
        case 10:
            sNombre = 'Sétimo';
            break;
        case 11:
            sNombre = 'Octavo';
            break;
        case 12:
            sNombre = 'Noveno';
            break;
        case 13:
            sNombre = 'Décimo';
            break;
        case 14:
            sNombre = 'Undécimo';
            break;
        case 15:
            sNombre = 'Duodécimo';
            break;
        default:
            sNombre = '';
            break;
    }

    return sNombre;
}








function guardarSesion(sCedula, sRol) {
    let sesion = [sCedula, sRol];

    localStorage.setItem('sesionLS', JSON.stringify(sesion));
}



function cerrarSesion() {
    let sesion = ["", "5"];
    localStorage.setItem('sesionLS', JSON.stringify(sesion));
}

