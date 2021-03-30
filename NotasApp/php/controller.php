<?php
	
	require_once "data_base_model.php";
	require_once "date.php";

	class controller {

		public function create(){
			
			try {
				
				$data_base = new data_base_model();
				$text = "<a href='../index.php'>volver</a>";

				$dat = date("ymd");
				$hour = date('his');

				$pdo = $data_base->connection();

				$sql = "INSERT INTO nota (contenido,fecha,hora) VALUES (:cont, $dat, $hour)";

				$result = $pdo->prepare($sql);

				$cont = htmlentities(addslashes($_POST["cont"]));

				$result->bindValue(":cont",$cont);

				$result->execute();

				$row_count = $result->rowCount();

				if($row_count != 0){
					header("Location: ../index.php");
				} else {
	       			echo "Error, los datos son erroneos, $text"."<br>";
				}

			} catch (Exception $e) {
				echo("Error de conexion: ".$e->getMessage());
				die();
			}
		}

		//Para multiples campos
		public function read($campo_buscar){

			try {
					
				$base_datos = new data_base_model(); 
				$pdo = $base_datos->connection(); 

				$consulta = "SELECT * FROM nota";

				$data=[];

				foreach ($pdo->query($consulta) as $row) {

					$data[] =  $row[$campo_buscar];
        		
    			}
    			return $data;

			} catch (Exception $e) {
				echo("Error de conexion: ".$e->getMessage());
				die();
			}
		}

		public function update(){

			try {

				$base_datos = new data_base_model(); 
				$pdo = $base_datos->connection(); 
				$text = "<a href='../index.php'>volver</a>";

				$dat = date("ymd");
				$hour = date('his');

				$sql = "UPDATE nota set contenido = :cont, fecha = $dat, hora = $hour WHERE fecha = :fecha AND hora = :hour";

				//++++++++++++
				$result = $pdo->prepare($sql);
				$cont = htmlentities(addslashes($_POST["cont"]));
				$dateGET = htmlentities(addslashes($_GET["date"]));
				$hourGET = htmlentities(addslashes($_GET["hour"]));

				$result->bindValue(":cont",$cont);
				$result->bindValue(":fecha",$dateGET);
				$result->bindValue(":hour",$hourGET);

				$result->execute();

				$row_count = $result->rowCount();

				if($row_count != 0){

					header("Location: ../index.php");

				} else {

	       			echo "Error, los datos son erroneos, $text"."<br>";
		
				}
				
			} catch (Exception $e) {
				echo("Error de conexion: ".$e->getMessage());
				die();
			}
		}

		public function delete(){

			try {
				
				$base_datos = new data_base_model(); 
				$pdo = $base_datos->connection();
				$text = "<a href='../index.php'>volver</a>"; 

				$sql = "DELETE FROM nota WHERE fecha = :fecha and hora = :hora";

				$result = $pdo->prepare($sql);

				$dateGET = htmlentities(addslashes($_GET["date"]));
				$hourGET = htmlentities(addslashes($_GET["hour"]));

				$result->bindValue(":fecha",$dateGET);
				$result->bindValue(":hora",$hourGET);

				$result->execute();

				$row_count = $result->rowCount();

				if($row_count != 0){

					header("Location: ../index.php");

				} else {

	       			echo "Error, los datos son erroneos, $text"."<br>";
		
				}

			} catch (Exception $e) {
				echo("Error de conexion: ".$e->getMessage());
				die();
			}
		}

	}

?>