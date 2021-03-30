<?php
	
    //Layendo la informacion

	try { 

        require_once 'php/controller.php';

		$read = new controller();
		$content = $read->read("contenido");
		$date = $read->read("fecha");
		$hour = $read->read("hora");

	} catch(Exception $e){

		echo("Algo salio mal :'(");
		die();
	}

?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="author" content="Roger Vergara">
    <meta name="description" content="Mini aplicacion de notas para almacenar, cosas cuando necesites y no tengas donde hacerlo">
    <title>NotasApp</title>
    <link rel="shortcut icon" href="assets/icon/icono.png" type="image/x-icon">
    <link rel="stylesheet" href="css/styles.css">
    <link rel="stylesheet" href="css/animations.css">
    <link rel="stylesheet" href="css/responsive.css">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">
    <script defer="" src="js/color_note.js"></script>
    <script defer="" src="js/redirect.js"></script>

</head>
<body>

    <main>

        <h1>NotasApp, Lista de notas</h1>
        <p>Por Roger Vergara</p>

        <h3>Agregar una nueva nota</h3>

        <form id="form1" method="post">
            <textarea name="cont" required="" minlength="1" maxlength="999999" placeholder="Ingrese una nota aquí..."></textarea>
            <input id="inputForm" type="submit" value="Guardar">
        </form>

        <label>Color de fondo </label>
        <input type="color" id="color" class="color" value="#dc8e45"> <!-- Agregando Un color predefinido -->
        
        </br>

        <label>Color de letra </label>
        <input type="color" id="color_letra" class="color" value="#202428">

        <ul>
            <?php
            	for($i=0;$i<count($content);$i++){
            		echo("
            			<li>
            				<h2>$content[$i]</h2>
            				<p class='f'>$date[$i]</p>
            				<p class='p'>,</p>
            				<p class='h'>$hour[$i]</p>
            				<div>
            					<form method='post'><textarea class='text' name='cont' required='' minlength='1' maxlength='999999' placeholder='Ingrese una nota aquí...''></textarea><br><input class='set' type='submit' value='Guardar'>
            						<br><br>
            					</form>
            				</div>	

            				<input class='buttonEdit' type='button' value='Editar'>
                			<input class='buttonDele' type='button' value='Borrar'>
            			</li>"
            		);
            	}
            ?> 
        </ul> 

        <noscript>
            <h2>¡Debes activar JavaScript para que esta página funcione correctamente!</h2>
            <p>Para activarlo, debes buscar en las opciones de configuración de tu navegador y habilitarlo</p>
        </noscript> 

    </main>

    
    
</body>
</html>