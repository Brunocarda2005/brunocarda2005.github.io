<?php

  // variables
  $destinatario = 'brunocardamone09@gmail.com';
  $nombre = $_POST['nombre'];
  $apellido = $_POST['apellido'];
  $nacionalidad = $_POST['nacionalidad'];
  $mail = $_POST['mail'];
  $curriculum = $_POST['cv'];
  $header = 'Enviado desde la pagina Santos Manjares';
  $mensaje = "Atentamente :" . $nombre . $apellido .  "\nEn busca de empleo" . "\nsoy de :" . $nacionalidad;

  mail($destinatario , $mail , $header , $curriculum );
  echo "<script> alert( 'correo enviado exitosamente')</script>"

?>
