<?php
if (session_status() !== PHP_SESSION_ACTIVE) { session_start(); }
require_once $_SERVER['DOCUMENT_ROOT'].'/assets/scripts/checkAuth.php';
require_once $_SERVER['DOCUMENT_ROOT'].'/assets/db/cons/getUser.php';
require_once $_SERVER['DOCUMENT_ROOT'].'/assets/page.php';
require_once $_SERVER['DOCUMENT_ROOT'].'/assets/components/header.php';

if(isset($_GET) && !empty($_GET) && !is_null($_GET)) {
	$palId = '';
	function validate($data) {
		$data = trim($data);
		$data = stripslashes($data);
		$data = htmlspecialchars($data);
		return $data;
	}
	$palId = validate($_GET['id']);
	require_once $_SERVER['DOCUMENT_ROOT'].'/assets/db/dbConnect.php';
	if($stmt = $con->prepare(' SELECT * FROM patrolactivitylogs WHERE id = ?')) {
		$stmt->bind_param('s', $palId);
		$stmt->execute();
		$stmt->store_result();
		if($stmt->num_rows < 1) {
			echo '<script type="text/javascript">window.location.assign("/app/forms/patrol/");</script>';
			exit;
		}
		$stmt->bind_result($palID, $startDate, $startTime, $endDate, $endTime, $durCal, $durDisplay, $notes, $palDepartment, $palDivision, $palUserID, $palMonth, $palYear, $palStatus);
		$stmt->fetch();
		if($stmt = $con->prepare(' SELECT name FROM departments WHERE id = ? ')) {
			$stmt->bind_param('s', $palDepartment);
			$stmt->execute();
			$stmt->store_result();
			if($stmt->num_rows > 0) {
				$stmt->bind_result($deptName);
				$stmt->fetch();
				$palDepartment = $deptName;
			}
		}
		$stmt->close();
	} else {
		echo '<script type="text/javascript">window.location.assign("/app/forms/patrol/");</script>';
		exit;
	}
} else {
	echo '<script type="text/javascript">window.location.assign("/app/forms/patrol/");</script>';
	exit;
}




?>

<div class="container-fluid">
	<div class="row">
		<div class="col-md-12">
			<div class="row">
				<div class="col-md-1"></div>

				<div class="col-md-10">

					<div class="row">

						<div class="col-md-2">

							<?php require_once $_SERVER['DOCUMENT_ROOT'].'/assets/components/sideBar.php'; ?>

						</div>

						<div class="col-md-10">

							<div class="card">
								<div class="card-header bg-primary text-white">
									<center>Patrol Activity Log #: <span class="badge badge-light text-dark"><?php echo $palId; ?></span></center>
								</div>
								<div class="card-body">

									<div class="row">
										<div class="col-md-4">
											<div class="card">
												<div class="card-header">
													Start Date & Time
												</div>
												<div class="card-body bg-secondary rounded-bottom">
													<?php echo $startDate . " @ " . $startTime; ?>
												</div>
											</div>
										</div>
										<div class="col-md-4">
											<div class="card">
												<div class="card-header">
													End Date & Time
												</div>
												<div class="card-body bg-secondary rounded-bottom">
													<?php echo $endDate . " @ " . $endTime; ?>
												</div>
											</div>
										</div>
										<div class="col-md-4">
											<div class="card">
												<div class="card-header">
													Duration
												</div>
												<div class="card-body bg-secondary rounded-bottom">
													<?php echo $durDisplay; ?>
												</div>
											</div>
										</div>
									</div>

									<br>

									<div class="row">
										<div class="col-md-6">
											<div class="card">
												<div class="card-header">
													Department
												</div>
												<div class="card-body bg-secondary rounded-bottom">
													<?php echo $palDepartment; ?>
												</div>
											</div>
										</div>
										<div class="col-md-6">
											<div class="card">
												<div class="card-header">
													Status
												</div>
												<div class="card-body bg-secondary rounded-bottom">
													<?php echo $palStatus; ?>
												</div>
											</div>
										</div>
									</div>

									<br>

									<div class="card">
										<div class="card-header">
											Additional Notes
										</div>
										<div class="card-body bg-secondary rounded-bottom">
											<?php if(isset($palNotes)) { echo $palNoes; } else { echo 'YOU DID NOT LEAVE A NOTE'; } ?>
										</div>
									</div>

									

								
								</div>
								<div class="card-footer bg-dark">
									<center>Patrol Activity Log #: <?php echo $palId; ?></center>
								</div>
							</div>

						</div>

					</div>


				</div>

				<div class="col-md-1"></div>
			</div>
		</div>
	</div>
</div>

<?php require_once $_SERVER['DOCUMENT_ROOT'].'/assets/components/footer.php'; ?>