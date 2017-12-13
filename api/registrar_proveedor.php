<?php

require_once 'conexion.php';

$pproveedor = $_POST['pproveedor'];

if(isset($pproveedor)){
    $pcedula = $pproveedor['cedula'];
    $pnombre = $pproveedor['nombre'];
    $ptelefono = $pproveedor['telefono'];
    $pcorreo = $pproveedor['correo'];
    $pencargado = $pproveedor['encargado'];

$sentencia_sql = "CALL pa_registrar_proveedor('$pcedula', '$pnombre', '$ptelefono', '$pcorreo', '$pencargado')";

$result = $conexion->query($sentencia_sql);

if(!$result)die("Falló la sentencia sql " . $conexion->error);

}

?>

