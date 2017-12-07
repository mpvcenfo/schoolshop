let imagenUrl = '';
let foto=document.querySelector('#foto');


$.cloudinary.config({ cloud_name: 'acmeinnovate', api_key: '867273236384566'});

let uploadButton = $('#btnSeleccionarImagen');


uploadButton.on('click', function(e){
                            cloudinary.openUploadWidget({ 
                                cloud_name: 'acmeinnovate', upload_preset: 'proyecto1', tags: ['cgal']
                            },
                            function(error, result) {
                                if(error) {
                                    console.log(error);
                                }
                               else{
                                    let id = result[0].public_id;
                                    console.log(id);
                                    foto.src = processImage(id);
                                    console.log(foto.src);
                               }
                            });
                        }
                );

function processImage(id) {
    let options = {
        client_hints: true,
    };
    return  $.cloudinary.url(id, options);
}


