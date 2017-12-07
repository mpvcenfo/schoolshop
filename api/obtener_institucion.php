<?php
    require_once 'conexion.php';

    $pid_institucion = $_POST['id_institucion'];

    $sentencia_sql = "CALL pa_obtener_institucion('$pid_institucion')";

    $result = $conexion->query($sentencia_sql);

    if(!result)die('Falló la sentencia SQL '. $conexion->error);

    $registro = mysqli_fetch_assoc($result);

    echo json_encode($registro);


?>