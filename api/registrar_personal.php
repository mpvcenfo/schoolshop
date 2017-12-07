<?php

//se carga la conexion
require_once 'conexion.php';

$encargado = $_POST['pNuevoPersonal'];


//aNuevoPersonal.push(sNombre,sSegundoNombre ,sApellido,sSegundoApellido, nIdentificacion, dFechaNacimiento, 
//sGenero, nTelefono, sCorreo, sGradoAcademico, sFoto, sInstitucion,sNivel, sSeccion);

     
  
    $pnombre=$encargado[0];
    $psegundoNombre=$encargado[1];
    $pApellido=$encargado[2];
    $pSegundoApellido=$encargado[3];
    $pIdentificacion=$encargado[4];
    $fFechaNacimiento=$encargado[5];
    $pGenero=$encargado[6];
    $nTelefono=$encargado[7];
    $pCorreo=$encargado[8];
    $pGradoAcademico=$encargado[9];
    $sFoto=$encargado[10];
    $pinstitucion=$encargado[11];
    $sNivel=$encargado[12];
    $sSeccion=$encargado[13];
    
//aNuevoPersonal.push(sNombre,sSegundoNombre ,sApellido,sSegundoApellido, nIdentificacion, dFechaNacimiento, 
//sGenero, nTelefono, sCorreo, sGradoAcademico, sFoto, sNivel, sSeccion);
    //Se crea la sentencia que llama al procedimiento almacenado
    $sentencia_sql = "CALL pa_registrar_encargado( '$pnombre', '$psegundoNombre','$pApellido','$pSegundoApellido',
    '$pIdentificacion', '$fFechaNacimiento', '$pGenero',' $nTelefono','$pCorreo','$pGradoAcademico','$sFoto'
    ,'$pinstitucion',' $sNivel',' $sSeccion')";
    
    
    //Se ejecuta la sentencia sql y se alamcena el resultado
    $result = $conexion->query($sentencia_sql);
    
    if(!$result)die("Falló la sentencia sql " . $conexion->error);
    
    
    echo json_encode($result);



?>