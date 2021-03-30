<?php
	
	class main {

		private $action;

		public function __construct(){
			$this->action = null;
			$this->action = $this->init();
		}

		private function init(){

			require_once 'controller.php';
			$action_type = $_GET['type'];
			$c = new controller();
			$text = "<a href='../index.php'>volver</a>";

			switch($action_type) {

				case "'insert'":

					$c->create();
				break;

				case "'delete'":

					$c->delete();
				break;

				case "'update'":

					$c->update();
				break;

				default:

					echo "Error desconocido, $text";
				break;
			}
		}

	}

	$main = new main();

?>