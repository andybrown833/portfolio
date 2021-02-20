<?php

require_once $_SERVER['DOCUMENT_ROOT'].'/assets/page.php';
require_once $_SERVER['DOCUMENT_ROOT'].'/assets/modals/pal.php';
require_once $_SERVER['DOCUMENT_ROOT'].'/assets/db/cons/getUser.php';

?>

<div class="container-fluid">
	<div class="row">
		<div class="col-md-1"></div>
		<div class="col-md-10"><br>
			<nav class="navbar navbar-expand-sm navbar-dark bg-primary rounded">
				<a class="navbar-brand" href="/app/"><span><img src="/assets/imgs/interfaceIcon3.png" style="height: auto;width:30px;"></span>‏‏‎ ‎DSRP Interface</a>
				<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
					<ul class="navbar-nav ml-md-auto">
						<a class="nav-link" href="/app/">Home</a>
						<li class="nav-item dropdown">
							<a class="nav-link dropdown-toggle" href="/app/forms/" id="navbarDropdownMenuLink" data-toggle="dropdown">Forms</a>
							<div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
								<a class="dropdown-item" href="" data-toggle="modal" data-target="#palSelector">Patrol Activity Log</a>
                                <a class="dropdown-item" href="">Leave of Absence Notification</a>
							</div>
                        </li>
						<li class="nav-item dropdown">
							<a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown">Departments</a>
							<div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
								<a class="dropdown-item" href="">Police Department</a>
                                <a class="dropdown-item" href="">Sheriff's Office</a>
                                <a class="dropdown-item" href="">State Police</a>
                                <a class="dropdown-item" href="">Fire Department</a>
                                <a class="dropdown-item" href="">Communications</a>
                                <a class="dropdown-item" href="">Civilian Operations</a>
							</div>
                        </li>
						<li class="nav-item dropdown">
							<a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown"><?php if(isset($userDisplayName)) {echo $userDisplayName;} else { echo 'Login';} ?></a>
							<div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
								<a class="dropdown-item" href="">Account Settings</a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item" href="/assets/scripts/logout.php">Logout</a>
							</div>
                        </li>
					</ul>
				</div>
			</nav>
		</div>
		<div class="col-md-1"></div>
	</div>
</div>
<br>

<?php


if($stmt = $con->prepare(' SELECT * FROM accactive WHERE userID = ?')) {
	$stmt->bind_param('s', $id);
	$stmt->execute();
	$stmt->store_result();
	
	if($stmt->num_rows > 0) {
	
	} else {
		
		if($stmt = $con->prepare(' INSERT INTO accactive (userID, link, displayName) VALUES (?,?,?) ')) {
			$link = '/app/profile.php?id=' . $id;
			$stmt->bind_param('sss', $id, $link, $displayName);
			$stmt->execute();

		} else {
			echo "<script>alert('Error inserting things into database.');</script>";
			echo '<script type="text/javascript">location.href = "/app/";</script>';
			exit;
		}
		
	}

} else {
	echo "<script>alert('There was an error looking for users.');</script>";
	echo '<script type="text/javascript">location.href = "/app/";</script>';
	exit;
}

?>