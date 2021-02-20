<?php

$server = $_SERVER['SERVER_NAME'];

if($server == 'localhost') {
    $DATABASE_HOST = 'localhost';
    $DATABASE_USER = 'root';
    $DATABASE_PASS = '';
    $DATABASE_NAME = 'dsrpinterface';
}
elseif($server == 'devI.dsrp.online') {
    $DATABASE_HOST = '';
    $DATABASE_USER = '';
    $DATABASE_PASS = '';
    $DATABASE_NAME = 'dsrpinterface';
}
elseif($server == 'interface.dsrp.online') {
    $DATABASE_HOST = '';
    $DATABASE_USER = '';
    $DATABASE_PASS = '';
    $DATABASE_NAME = 'dsrpinterface';
}
else {
    echo 'There has been an error. More than likely you are not suppose to be doing what you are doing.';
    exit;
}

$con = new mysqli($DATABASE_HOST, $DATABASE_USER, $DATABASE_PASS, $DATABASE_NAME);

if($con->connect_error) {
    die("Connection failed: " . $con->connect_error);
}

?>