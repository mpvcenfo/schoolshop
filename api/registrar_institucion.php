<?php

require_once 'conexion.php';


    $pcodigo = $_POST['pidInstitucion'];
    $pnombre = $_POST['pnombre'];
    $pdireccion = $_POST['pdireccion'];
    $platitud = $_POST['platitud'];
    $plongitud = $_POST['plongitud'];
    $pcontacto = $_POST['pcontacto'];
    $pcorreo = $_POST['pcorreo'];
    $ptelefono = $_POST['ptelefono'];
    $pnivelDesde = $_POST['pnivelDesde'];
    $pnivelHasta = $_POST['pnivelHasta'];
    $pcantSecciones = $_POST['pcantSecciones'];
    $pimagen = $_POST['pimagen'];


$sentencia_sql = "CALL pa_registrar_institucion('$pcodigo','$pnombre','$pdireccion','$platitud','$plongitud','$pcontacto','$pcorreo','$ptelefono','$pnivelDesde','$pnivelHasta','$pcantSecciones','$pimagen')";

$result = $conexion->query($sentencia_sql);

if(!$result)die("Falló la sentencia sql " . $conexion->error);



echo json_encode($result);


?>

