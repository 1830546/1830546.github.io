<?php
    $servidor = "localhost";
    $usuario = "root";
    $contrasena="";
    $bd="libreria";

    $conexion = mysqli_connect($servidor,$usuario,$contrasena,$libreria);

    if(isset($_GET['titulo'])){
                    
                    $titulo = $_GET["titulo"];
                    $autor = $_GET["autor"];
                    $editorial = $_GET["editorial"];
                    $precio = $_GET["precio"];
                    $enlace =$_GET["enlace"];
    
                    $consulta="INSERT INTO libros values(null,'$titulo', '$editorial ', '$autor' ,'$enlace', '$precio')";
                    mysqli_query($conexion,$consulta);
                    
    }
    
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="estilo.css">
</head>
<body>


   <main>

   <h1>Lista de Libros</h1>
   <a href="registrar.php">Nueva</a>
   <table>
    
    <tr>
         <th>ID</th>
        <th>Titulo</th>
        <th>Autor</th>
        <th>Precio</th>
        <th>Enlace</th>
        <th>Editorial</th>
    </tr>
    

    <tbody>
        <?php

        $consulta = "SELECT * FROM libros";
      
    
        $registros = mysqli_query($conexion, $consulta);
            if($registros->num_rows>0){
                while($fila = $registros->fetch_assoc()){
        ?>
        <tr>
        <th>
                <?php
                echo $fila["id"];
                ?>
                 </th>
            <th>
                <?php
                echo $fila["titulo"];
                ?>
            </th>
            <th>
                <?php
                echo $fila["autor"];
                ?>
            </th>
            <th>
                <?php
                echo $fila["precio"];
                ?>
            </th>
            <th>
                <?php
                echo $fila["enlace"];
                ?>
            </th>
            <th>
                <?php
                echo $fila["editorial"];
                ?>
            </th>


        </tr>


        <?php
                }
            }
        ?>
        


    </tbody>

    </table>

    <?php
    mysqli_close($conexion);
?>

</main>



<footer>



</footer>



    
</body>
</html>