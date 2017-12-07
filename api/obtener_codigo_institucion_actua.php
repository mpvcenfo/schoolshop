<?php

//se carga la conexion
require_once 'conexion.php';

$cedula = $_POST['pcedula'];


//Se crea la sentencia que llama al procedimiento almacenado
$sentencia_sql = "CALL 	pa_obtener_codigo_institucion_actual('$cedula')";


//Se ejecuta la sentencia sql y se alamcena el resultado
$result = $conexion->query($sentencia_sql);

if(!$result)die("Falló la sentencia sql " . $conexion->error);

$filas = array();

while($registro = mysqli_fetch_assoc($result)){

    $filas[] = $registro;
}


echo json_encode($filas[0]);

?>