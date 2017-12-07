/*function registrarPersonal(pNuevoPersonal){
    let listaPersonal = obtenerListaPersonal();

    listaPersonal.push(pNuevoPersonal);
    localStorage.setItem('listaPersonalLS', JSON.stringify(listaPersonal));
    let rol=obtenerListaUsuarios();
    rol.push([pNuevoPersonal[2],pNuevoPersonal[6],pNuevoPersonal[2],2,true]);
    localStorage.setItem('listaUsuariosLS', JSON.stringify(rol));
    

}*/


function registrarPersonal(pNuevoPersonal){
    let peticion = $.ajax({
        url: '../api/registrar_personal.php.',
        type: 'post',
        contentType: 'application/x-www-form-urlencoded;charset=ISO-8859-15',
        dataType : 'json',
        async:false,
        data:{
            'pNuevoPersonal' : pNuevoPersonal
        }
      });
      peticion.done(function(response){
        console.log('El usuario se registró con éxito');
      });
      peticion.fail(function(){
        console.log('El usuario no se pudo registrar');
      });

}

function obtenerListaUsuarios(){
    let usuarios = JSON.parse(localStorage.getItem('listaUsuariosLS'));

    if(usuarios== null){
      usuarios =[

      [110480933,"","","",true],
      [125480623,"","","",true]

      ] 
     
    }

    return usuarios;
}

function registrarUsuario(anuevoUsuario){
    let peticion = $.ajax({
        url: '../api/registrar_usuario.php.',
        type: 'post',
        contentType: 'application/x-www-form-urlencoded;charset=ISO-8859-15',
        dataType : 'json',
        async:false,
        data:{
            'anuevoUsuario' : anuevoUsuario
        }
      });
      peticion.done(function(response){
        console.log('El usuario se registró con éxito');
      });
      peticion.fail(function(){
        console.log('El usuario no se pudo registrar');
      });
}

function obtenerListaPersonal(){
    let listaPersonal = JSON.parse(localStorage.getItem('listaPersonalLS'));

    if(listaPersonal== null){
        listaPersonal =[

        ["José Antonio","Azofeifa Brown",110480933,"1974-10-06","Masculino",87036521,"joseab@gmail.com",
        "Licenciatura","imgLS/profesor1.png","Santa Marta","Ninguno","Ninguno"],

        ["Marta","Pereira Morales",125480623,"1977-11-05","Femenino",88603214,"martapm@gmail.com",
        "Maestría","imgLS/profesor2.png","Santa Marta","Ninguno","Ninguno"]


        ] 
     
    }

    return listaPersonal;
}


function buscarProfesorPorCodigo(pProfesor){
      let profesorEncontrado=[];
      let listaPersonal=obtenerListaPersonal();
      for(let i=0 ;i <listaPersonal.length;i++){
       if( pProfesor==listaPersonal[i][2]){
        profesorEncontrado=listaPersonal[i];
         }

      } 
      return profesorEncontrado;

  }

function actualizarProfesor(pprofesorActualizado){
  let listaPersonal=obtenerListaPersonal();

  for (let i=0; i<listaPersonal.length; i++){

    if (pprofesorActualizado[2]==listaPersonal[i][2]){

      listaPersonal[i]=pprofesorActualizado;
      localStorage.setItem('listaPersonalLS',JSON.stringify(listaPersonal));

    }


  }

  }


  
function obtenerinstitucion(){
  let listaInstitucion = [];
  
      let peticion = $.ajax({
        url: '../api/llamar_institucion.php',
        type: 'post',
        contentType: 'application/x-www-form-urlencoded;charset=ISO-8859-15',
        dataType : 'json',
        async:false,
        data:{
       
        }
      });
      peticion.done(function(datos){
        listaInstitucion = datos;
        console.log('Conexion exitosa');
      });
      peticion.fail(function(){
        listaInstitucion = [];
        console.log('Error de conexion');
      });
      return listaInstitucion;
}
//in this function i'm calling cloudinary to send my image 

let imagenUrl = '';
let foto=document.querySelector('#mostrar')    
function enviarURL(){

  return imagenUrl;
}

$(function() {
    // Configure Cloudinary
    // with credentials available on
    // your Cloudinary account dashboard
    $.cloudinary.config({ cloud_name: 'acmeinnovate', api_key: '867273236384566'});
    //$.cloudinary.config({ cloud_name: 'acme2017', api_key: '249576785744721'});

    // Upload button
    let uploadButton = $('#btnSeleccionarImagen');

    // Upload button event
    uploadButton.on('click', function(e){
        // Initiate upload
        cloudinary.openUploadWidget({ cloud_name: 'acmeinnovate', upload_preset: 'proyecto1', tags: ['cgal']},
        function(error, result) {
            if(error) console.log(error);
            // If NO error, log image data to console
            let id = result[0].public_id;
             console.log(id);
            imagenUrl = processImage(id);
            foto.src=processImage(id);
          console.log(imagenUrl);
        });
    });
  
})

function processImage(id) {
    let options = {
        client_hints: true,
    };
    return  $.cloudinary.url(id, options);
}





function ModEstadoListaUsuarios(pcedula){
  let usuarios = obtenerListaUsuarios();
  for(let i=0;i<usuarios.length;i++){
      if(pcedula==usuarios[i][0]){
          usuarios[i][4]=false;
          localStorage.setItem('listaUsuariosLS', JSON.stringify(usuarios));
      }
  } 
}

