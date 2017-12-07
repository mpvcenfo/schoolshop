function enviarCorreo(pemail, psubject, pmessage) {
    let peticion = $.ajax({
        url: '../api/enviar_correo.php',
        type: 'post',
        contentType: 'application/x-www-form-urlencoded;charset=UTF-8',
        dataType: 'json',
        async: false,
        data: {
            "email": pemail,
            "subject": psubject,
            "message": pmessage
        }
    });
    peticion.done(function () {
        console.log('Se envió el correo con éxito.');
    });
    peticion.fail(function () {
        console.log('Hubo un problema en el envío de correo.');
    });

    return peticion
}