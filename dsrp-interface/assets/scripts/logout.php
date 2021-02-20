<?php
session_start();

$_SESSION['loggedin'] = FALSE;
$_SESSION['id'] = '';
$_SESSION['user'] = '';

echo '<script>window.location.replace("/app/");</script>';
exit;

?>
