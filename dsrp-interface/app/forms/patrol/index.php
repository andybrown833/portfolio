<?php
if (session_status() !== PHP_SESSION_ACTIVE) { session_start(); }
require_once $_SERVER['DOCUMENT_ROOT'].'/assets/scripts/checkAuth.php';
require_once $_SERVER['DOCUMENT_ROOT'].'/assets/db/cons/getUser.php';
require_once $_SERVER['DOCUMENT_ROOT'].'/assets/page.php';
require_once $_SERVER['DOCUMENT_ROOT'].'/assets/components/header.php';


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

							<nav aria-label="breadcrumb">
								<ol class="breadcrumb">
									<li class="breadcrumb-item"><a href="/">Dashboard</a></li>
									<li class="breadcrumb-item"><a href="/app/forms/">Forms</a></li>
									<li class="breadcrumb-item active" aria-current="page">Patrol Activity Logs</li>
								</ol>
							</nav>

							<div class="card">

								<div class="card-header bg-primary text-white">
									<center>Patrol Activity Logs</center>
								</div>

								<div class="card-body">

								<?php
									if($stmt = $con->prepare(' SELECT * FROM patrolactivitylogs WHERE userID = ? ')) {
										$stmt->bind_param('s', $userID);
										$stmt->execute();
										$stmt->store_result();
										if($stmt->num_rows < 1) {
											echo '<center><h4>THERE ARE NO PATROL ACITIVTY LOGS TO DISPLAY</h4></center>';
										} else {
											echo '
											<table class="table table-sm table-hover table-dark table-bordered">

											<thead>
												<tr class="text-center bg-secondary rounded-top">
													<th>Start Time</th>
													<th>End Time</th>
													<th>Duration</th>
													<th>Department</th>
													<th>Status</th>
													<th>View</th>
												</tr>
											</thead>
								
											<thead>
											';
											$stmt->bind_result($palId, $palStartDate, $palStartTime, $palEndDate, $palEndTime, $palDurCal, $palDurDisplay, $palNotes, $palDepartment, $palDivision, $palUserID, $palMonth, $palYear, $palStatus);
											while($stmt->fetch()) {
												$hours = intval($palDurCal / 3600);
												$seconds_remain = ($palDurCal - ($hours * 3600));
												$minutes = intval($seconds_remain / 60);
												$palDurDisplay = $hours . ' Hour(s) ' . $minutes . ' Minute(s)';

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
												$palURL = '/app/forms/patrol/view.php?id=' . $palId;
												

												echo '<tr class="text-center">';

												echo '<td>' . $palStartDate . ' @ ' . $palStartTime . '</td>';
												echo '<td>' . $palEndDate . ' @ ' . $palEndTime . '</td>';
												echo '<td>' . $palDurDisplay . '</td>';
												echo '<td>' . $palDepartment . '</td>';
												//echo '<td>' . $palDiv . '</td>';
												echo '<td>' . $palStatus . '</td>';
												echo '<td>' . '<a class="btn btn-outline-primary btn-sm" href=' . $palURL . '>View</a>' . '</td>';

												echo '</tr>';
											}
											echo '</thead></table>';
										}
									}
								?>

								</div>

								<div class="card-footer">
									<center>Total Submissions: <?php echo $stmt->num_rows; ?></center>
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