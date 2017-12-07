/*function registrarAsistente(pNuevoAsistente){
    let listaAsistente = obtenerListaAsistente();

    listaAsistente.push(pNuevoAsistente);
    localStorage.setItem('listaAsistenteLS', JSON.stringify(listaAsistente));
    let rol=obtenerListaUsuarios();
    rol.push([pNuevoAsistente[2],pNuevoAsistente[6],pNuevoAsistente[2],4,true]);
    localStorage.setItem('listaUsuariosLS', JSON.stringify(rol));
    

}*/
function registrarAsistente(pNuevoAsistente){
    let peticion = $.ajax({
        url: '../api/registrar_asistente.php.',
        type: 'post',
        contentType: 'application/x-www-form-urlencoded;charset=ISO-8859-15',
        dataType : 'json',
        async:false,
        data:{
            'pNuevoAsistente' : pNuevoAsistente
        }
      });
      peticion.done(function(response){
        console.log('El artículo se registró con éxito');
      });
      peticion.fail(function(){
        console.log('El artículo no se pudo registrar');
      });
}    

function obtenerListaUsuarios(){
    let usuarios = JSON.parse(localStorage.getItem('listaUsuariosLS'));

    if(usuarios== null){
      usuarios =[

      [310540684,"","","",true]


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
        console.log('El artículo se registró con éxito');
      });
      peticion.fail(function(){
        console.log('El artículo no se pudo registrar');
      });
}
function obtenerListaAsistente(){
    let listaAsistente = JSON.parse(localStorage.getItem('listaAsistenteLS'));

    if(listaAsistente== null){
        listaAsistente =[

        ["Claudia","Acosta Barquero",310540684,"1982-11-22","Femenino",86329521,"claudiaab@gmail.com",
        "imgLS/asistente.png"]

        ] 
     
    }

    return listaAsistente;
}


function buscarAsistentePorCodigo(pAsistente){
      let asistenteEncontrado=[];
      let listaAsistente=obtenerListaAsistente();
      for(let i=0 ;i <listaAsistente.length;i++){
       if( pAsistente==listaAsistente[i][2]){
        asistenteEncontrado =listaAsistente[i];
         }

      } 
      return asistenteEncontrado;

  }

function actualizarAsistente(pasistenteActualizado){
  let listaAsistente=obtenerListaAsistente();

  for (let i=0; i<listaAsistente.length; i++){

    if (pasistenteActualizado[2]==listaAsistente[i][2]){

      listaAsistente[i]=pasistenteActualizado;
      localStorage.setItem('listaAsistenteLS',JSON.stringify(listaAsistente));

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
  

function ModEstadoListaUsuarios(pcedula){
  let usuarios = obtenerListaUsuarios();
  for(let i=0;i<usuarios.length;i++){
      if(pcedula==usuarios[i][0]){
          usuarios[i][4]=false;
          localStorage.setItem('listaUsuariosLS', JSON.stringify(usuarios));
      }
  } 
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