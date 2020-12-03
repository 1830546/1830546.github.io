<?php
	$arreglo = array();
    $valor1 = $_GET['valor1'];
    $tabla = $_GET['tabla'];
	$idBuscar = $_GET['idBuscar'];
    $conexion = mysqli_connect("localhost", "root", "", "practica1");
	$consulta = "SELECT id, nombre FROM $tabla WHERE $idBuscar = $valor1";
	$resultado = mysqli_query($conexion, $consulta);
	if ($resultado->num_rows > 0) {
		while ($fila = $resultado->fetch_assoc()) {
			$arreglo[$fila['nombre']] = $fila['id'];
		}
	}
	echo json_encode($arreglo);
?>