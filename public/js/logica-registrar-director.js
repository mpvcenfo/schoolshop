/*function registrarDirector(pNuevoDirector){
    let listaDirectores = obtenerListaDirectores();

    listaDirectores.push(pNuevoDirector);
    localStorage.setItem('listaDirectoresLS', JSON.stringify(listaDirectores));

    let rol=obtenerListaUsuarios();
    rol.push([pNuevoDirector[2],pNuevoDirector[6],pNuevoDirector[2],1,true]);
    localStorage.setItem('listaUsuariosLS', JSON.stringify(rol));
    

}*/
 function registrarDirector(pNuevoDirector){
      
  let peticion = $.ajax({
    url: '../api/registrar_director.php',
    type: 'post',
    contentType: 'application/x-www-form-urlencoded;charset=ISO-8859-15',
    dataType : 'json',
    async:false,
    data:{
        'pNuevoDirector' : pNuevoDirector
    }
  });
  peticion.done(function(response){
    console.log('El artículo se registró con éxito');
  });
  peticion.fail(function(){
    console.log('El artículo no se pudo registrar');
  });

 }
// function obtenerListaUsuarios(){
//     let usuarios = JSON.parse(localStorage.getItem('listaUsuariosLS'));

//     if(usuarios== null){
//       usuarios =[
//       ["104210633","","","",true],
//       ["110480921","","","",true]


//       ] 
     
//     }

//     return usuarios;
// }

function obtenerListaDirectores(){
    let listaDirectores = JSON.parse(localStorage.getItem('listaDirectoresLS'));

    if(listaDirectores== null){
        listaDirectores =[

        ["Susana","Mora Montero ","104210633","1960-07-27","Femenino","63542189",
        "susanami@gmail.com","imgLS/director1.png","Santa Marta","Ninguno","Ninguno"],

        ["Mario","Sibaja Villalobos","110480921","1966-10-07","Masculino","86953214",
        "mariosv@gmail.com","imgLS/director2.png","Santa Marta","Ninguno","Ninguno"]


        ] 
     
    }

    return listaDirectores;

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
function  obtenerListaInstituciones(){
  let listaInstituciones=JSON.parse(localStorage.getItem("listaInstitucionesLS"));
  if(listaInstituciones==null){
      listaInstituciones=[["inst0","Saint Paul","500 Metros Oeste de la Panasonic","9.977118","-84.203999","Ana Cristina","infocol@saintpaul.ed.cr","2438-0824","1","1","imgLS/SaintPaul.jpg","true"],["inst1","Lincoln High","Calle 124 Ave 22","9.977124","-84.203999","Franco Ramirez","infocol@saintpaul.ed.cr","2256-9845","1","1","imgLS/inst1.jpg","true"],["inst2","Greenlands Charter School","Calle 124 Ave 23","9.977258","-84.203999","Estaban Ramirez","infocol@saintpaul.ed.cr","2289-7468","1","1","imgLS/inst2.jpg","true"],["inst3","Horizon Conservatory","Calle 124 Ave 24","8.977118","-84.203999","Franco Valenciano","infocol@saintpaul.ed.cr","2248-6481","1","1","imgLS/inst3.jpg","true"],["inst4","Sunshine High","Calle 124 Ave 25","7.685468","-84.203999","Oscar Pereira","infocol@saintpaul.ed.cr","2685-5425","1","1","imgLS/inst4.jpg","true"]]
  }
  return listaInstituciones;
}
/*function obtenerlistaDirectoresFiltrada(pFiltro){
  let ListaOriginal=obtenerListaDirectores();
    let  ListaFiltrada=[

    ['Karen', 'Piedra Brown', 410100463, 25/11/1960, 'Femenino', 82556321,
    'karenpb@gmail.com', 'Foto', 'colegio1']

    ['Leonardo', 'Prado Villalobos', 307850654, 12/05/1964, 'Masculino', 64895713,
    'leonardopv@gmail.com', 'foto', 'escuela1']
      
    ];

    for (let i=0;i<ListaOriginal.length;i++){
      if(ListaOriginal[i][1].toLowerCase().includes(pFiltro) ){
           ListaFiltrada.push(ListaOriginal[i]);
      }
    }
      return ListaFiltrada; 
}*/


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



function buscarDirectorPorCodigo(pDirector){
  let directorEncontrado=[];
  let listaDirectores=obtenerListaDirectores();
  
  for(let i=0 ;i <listaDirectores.length;i++){
      if( pDirector==listaDirectores[i][2]){
          directorEncontrado =listaDirectores[i];
      }

  }
  return directorEncontrado;
}

function actualizarDirector(pDirectorActualizado){
  let listaDirectores=obtenerListaDirectores();

  for (let i=0; i<listaDirectores.length; i++){

    if (pDirectorActualizado[2]==listaDirectores[i][2]){

      listaDirectores[i]=pDirectorActualizado;
      localStorage.setItem('listaDirectoresLS',JSON.stringify(listaDirectores));

    }


  }

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