<?php

// THIS SCRIPT WILL CHECK IF THE USER IS LOGGED IN AND IF NOT IT WILL REDIRECT THEM TO THE LOGIN PAGE
if(!isset($_SESSION) || !isset($_SESSION['loggedin']) || !isset($_SESSION['user']) || $_SESSION['loggedin'] !== TRUE && $_SESSION['user'] == '') {
    require_once $_SERVER['DOCUMENT_ROOT'].'/auth/login.php';
	exit;
}

?>