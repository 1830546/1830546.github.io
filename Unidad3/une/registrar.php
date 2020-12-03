<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link href="estilo.css" rel="stylesheet">
</head>
<body>

    <main>
        <form action="index.php" method="GET">

            <div>
            <label class="estiquetas" for="titulo">Titulo:</label>
            <input class="controles" type="text" name="titulo" required> 
            </div>

            <div>
            <label class="estiquetas" for="autor">Autor:</label>
            <input class="controles" type="text" name="autor" required> 
            </div>
        
            <div>
            <label class="estiquetas" for="editorial">Editorial:</label>
            <input class="controles" type="text" name="editorial" required> 
            </div>
            <div>
            <label class="estiquetas" for="precio">Precio:</label>
            <input class="controles" type="number" step="0.01" name="precio" required> 
            </div>

            <div>
            <label class="estiquetas" for="enlace">Enlace:</label>
            <input class="controles" type="text" name="enlace" required> 
            </div>
            
            <input type="submit" value="Aceptar">
           
        </form >


    </main>
    
</body>
</html>