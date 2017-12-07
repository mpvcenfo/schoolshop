// function obtenerListaUsuarios() {
//     let listaUsuarios = JSON.parse(localStorage.getItem('listaUsuariosLS'));

//     // if (listaUsuarios == null) {
//     //     listaUsuarios = [
//     //         ["1-0000-0000", "admin", "admin123", 0, true],
//     //         ['1-1111-1111', 'director', 'director123', 1, true],
//     //         ['2-2222-2222', 'profesor', 'profesor123', 2, true],
//     //         ['3-3333-3333', 'encargado', 'encargado123', 3, true],
//     //         ['4-4444-4444', 'asistente', 'asistente123', 4, true],
//     //         ['1-1505-0006', 'aaymerich@ucenfotec.ac.cr', 'clave123', '1', true]
//     //     ];
//     //     localStorage.setItem('listaUsuariosLS', JSON.stringify(listaUsuarios));
//     // }

//     return listaUsuarios;
// }

function iniciarSesion(sCedula, sRol) {
    let sesion = [sCedula, sRol];

    localStorage.setItem('sesionLS', JSON.stringify(sesion));
}

function cerrarSesion() {
    let sesion = ["","5"];
    localStorage.setItem('sesionLS',JSON.stringify(sesion));
}

// function obtenerListaUsuarios(){
//     let usuarios = JSON.parse(localStorage.getItem('listaUsuariosLS'));

//     if(usuarios== null){
//       usuarios =[["1-0000-0000", "admin", "admin123", 0, true]] 
     
//     }
//     return usuarios;
// }
