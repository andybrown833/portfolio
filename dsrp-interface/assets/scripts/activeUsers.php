<?php 

$date = date("m-d-y");
require_once $_SERVER['DOCUMENT_ROOT'].'/assets/db/dbConnect.php';
if($stmt = $con->prepare(' SELECT id, link, displayName FROM accactive ')) {
    $stmt->execute();
    $stmt->store_result();
    $stmt->bind_result($listID, $listLink, $listDisplayName);

    while($stmt->fetch()) {
        echo '<a class="text-primary" href=' . $listLink . '>' . $listDisplayName . '</a>';
        echo ', ';
    }

}

?>