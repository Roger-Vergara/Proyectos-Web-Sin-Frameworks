<?php
	
	class data_base_model{

		private $host;
		private $db;
		private $user;
		private $password;
		private $charset;

		public function __construct(){
			$this->host = "localhost";
			$this->db = "notasapp";
			$this->user = "root";
			$this->password = "";
			$this->charset = "utf8";
		}

		public function connection(){

			try {

				$connection = "mysql:host=".$this->host.";dbname=".$this->db.";charset=".$this->charset;
				
				$options = [
					PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
                	PDO::ATTR_EMULATE_PREPARES   => false,
				];

				$pdo = new PDO($connection,$this->user,$this->password,$options);

				return $pdo;

			}catch(Exception $e){

				echo("Error de conexion: ".$e->getMessage());
				die();

			}
		}

	}

?>