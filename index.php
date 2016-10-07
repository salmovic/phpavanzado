<?php
//GESTIONA ABSOLUTAMENTE TODOS LOS CONTROLADORES
// Permite que la constante definida dentro de este archivo este disponible en todos los controladores
require('core/core.php');

if ( isset($_GET['views']) ) {
	/*Verficamos si existre el archivo controlador*/
	if( file_exists('core/controllers'.strtolower($_GET['views']).'Controller.php') ) {
		include ('core/controllers'.strtolower( $_GET['views'] ).'Controller.php');
	} else {
		include 'core/controllers/errorController.php';
	}
} else {
	include 'core/controllers/indexController.php';
}
 ?>
