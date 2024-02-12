<?php

//! Variables de entorno para conexion con base de datos
$HOST = 'localhost';
$USER = 'root';
$PASS = 'medac';
$DB = 'academia';
//$PORT = '3306';

$conexion = new mysqli($HOST, $USER, $PASS, $DB);

if ($conexion->connect_errno) {
    $salida = "Fallor: $conexion->connect_errno";
    exit();
}

$nombre = $_POST['nombre'];
$dni = $_POST['dni'];
$apel = $_POST['apel'];
$edad = $_POST['edad'];

$consulta = "INSERT INTO alumnos (dni, nombre, apellidos, edad, exp_curso) VALUES ('$dni', '$nombre', '$apel', '$edad')";

$resultado = $conexion->query($consulta);

if (!$resultado) {
    $salida = "ERROR insertando valores";
} else {
    $salida = "Valores insertados correctamente: $nombre, $dni";
}

echo json_($resultado);

?>