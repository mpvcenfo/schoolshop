<?php

require_once 'conexion.php';

$pestudiante = $_POST['pestudiante'];

if(isset($pestudiante)){
    $pidentificacion = $pestudiante['identificacion'];
    $pprimerNombre = $pestudiante['primerNombre'];
    $psegundoNombre = $pestudiante['segundoNombre'];
    $pprimerApellido = $pestudiante['primerApellido'];
    $psegundoApellido = $pestudiante['segundoApellido'];
    $ptelefonoPersonal = $pestudiante['telefonoPersonal'];
    $pfechaNacimiento = $pestudiante['fechaNacimiento'];
    $pdireccion = $pestudiante['direccion'];
    $ptelefonoResidencia = $pestudiante['telefonoResidencia'];
    $pgenero = $pestudiante['genero'];
    $pgrupoSanguineo = $pestudiante['grupoSanguineo'];
    $pdonador = $pestudiante['donador'];
    $pimagen = $pestudiante['imagen'];
    $pbeca = $pbeca['beca'];
    $pnombreContacto1 = $pestudiante['nombreContacto1'];
    $pparentescoContacto1 = $pestudiante['parentescoContacto1'];
    $ptelefonoContacto1 = $pestudiante['telefonoContacto1'];
    $pnombreContacto2 = $pestudiante['nombreContacto2'];
    $pparentescoContacto2 = $pestudiante['parentescoContacto2'];
    $ptelefonoContacto2 = $pestudiante['telefonoContacto2'];
    $pnombreContacto3 = $pestudiante['nombreContacto3'];
    $pparentescoContacto3 = $pestudiante['parentescoContacto3'];
    $ptelefonoContacto3 = $pestudiante['telefonoContacto3'];
    $pcondicionMedica = $pestudiante['condicionMedica'];
    $pcomprobante = $pestudiante['comprobante'];
    $pinstitucion = $pestudiante['institucion'];
    $pnivel = $pestudiante['nivel'];
    $pseccion = $pestudiante['seccion'];
    $pcedulaEncargado = $pestudiante['cedulaEncargado'];

$sentencia_sql = "CALL pa_registrar_estudiante('$pidentificacion', '$pprimerNombre', '$psegundoNombre', '$pprimerApellido', '$psegundoApellido', '$ptelefonoPersonal', '$pfechaNacimiento', '$pdireccion', '$ptelefonoResidencia', '$pgenero', '$pgrupoSanguineo', '$pdonador', '$pimagen', '$pbeca', '$pnombreContacto1', '$pparentescoContacto1', '$ptelefonoContacto1', '$pnombreContacto2', '$pparentescoContacto2', '$ptelefonoContacto2', '$pnombreContacto3', '$pparentescoContacto3', '$ptelefonoContacto3', '$pcondicionMedica', '$pcomprobante', '$pinstitucion', '$pnivel', '$pseccion', '$pcedulaEncargado')";

$result = $conexion->query($sentencia_sql);

if(!$result)die("Falló la sentencia sql " . $conexion->error);



echo json_encode($result);

}

?>

