<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Combobox</title>
</head>
<body>
    <select name="" id="paises">
        <option>Seleccione un pais</option>
        <?php
            require('servidor.php');
            $consulta = "SELECT id, nombre FROM paises";
            $resultado = mysqli_query($conexion, $consulta);
            if ($resultado->num_rows > 0) {
                while ($fila = $resultado->fetch_assoc()) {
                    echo "<option value=" . $fila["id"] . ">" . $fila["nombre"] . "</option>";
                }
            }    
        ?>
    </select>
    <select name="" id="estados" disabled></select>
    <select name="" id="municipios" disabled></select>

    <script src="script.js"></script>
</body>
</html>