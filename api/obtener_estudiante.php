<?php
    require_once 'conexion.php';

    $pidentificacion = $_POST['pidentificacion'];

    $sentencia_sql = "CALL pa_obtener_estudiante('$pidentificacion')";

    $result = $conexion->query($sentencia_sql);

    if(!result)die('Falló la sentencia SQL '. $conexion->error);

    $registro = mysqli_fetch_assoc($result);

    echo json_encode($registro);


?>