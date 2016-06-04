<?php 
	/*igresamos el email donde 
	recibira los datos del formulario*/
if(isset($_POST['nombre']) && !empty($_POST['nombre']) &&
	isset($_POST['empresa']) && !empty($_POST['empresa']) &&
	isset($_POST['telefono']) && !empty($_POST['telefono']) &&
	isset($_POST['email']) && !empty($_POST['email']) &&
	isset($_POST['mensaje']) && !empty($_POST['mensaje']))
{


	$para = 'alborjosue@gmail.com';
	$asunto = "Prueba desde Pagina";

	$message_body .= "Nombre: " .$_POST["nombre"]."<br>";
 	$message_body .= "Empresa: " .$_POST["empresa"]."<br>";
 	$message_body .= "Telefono: " .$_POST["telefono"]."<br>";
 	$message_body .= "E-Mail: " .$_POST["email"]."<br>";
 	$message_body .= "Mensaje: " . nl2br($_POST["mensaje"])."<br>";

 	$mail_header = "MIME-Version: 1.0\r\n"; 
	$mail_header = 'From: ' .$_POST["email"]. "\r\n";
	//$mail_header = "Reply-To: " .$_POST["email"]. "\r\n";
	$mail_header = "Content-type: text/html; charset=UTF-8\r\n";
 	

 	mail($para, $asunto, $mail_header, $message_body);


 	//Se inserta la direccion del servidor

 	header('Location:localhost:8088/relojeria/index.html');
}
 ?>