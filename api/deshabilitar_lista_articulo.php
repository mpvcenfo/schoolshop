<?php

//se carga la conexion
require_once 'conexion.php';

$pid = $_POST['pid'];

//Se crea la sentencia que llama al procedimiento almacenado
$sentencia_sql = "CALL 	pa_deshabilitar_lista_articulos('$pid')";


//Se ejecuta la sentencia sql y se alamcena el resultado
$result = $conexion->query($sentencia_sql);

if(!$result)die("Falló la sentencia sql en deshabilitar lista" . $conexion->error);



echo json_encode($filas);

?>
