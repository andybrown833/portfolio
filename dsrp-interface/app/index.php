<?php
if (session_status() !== PHP_SESSION_ACTIVE) { session_start(); }
require_once $_SERVER['DOCUMENT_ROOT'].'/assets/scripts/checkAuth.php';
require_once $_SERVER['DOCUMENT_ROOT'].'/assets/db/cons/getUser.php';
require_once $_SERVER['DOCUMENT_ROOT'].'/assets/page.php';
require_once $_SERVER['DOCUMENT_ROOT'].'/assets/components/header.php';

require_once $_SERVER['DOCUMENT_ROOT'].'/assets/scripts/pals/getHours.php';
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

							<div class="row">
								<div class="col-md-4">
									<div class="card border-primary">
										<div class="card-header bg-primary">
										<b>Patrol Hours</b>
										</div>
										<div class="card-body">
											<center><h2><?php echo $totalDur; ?></h2><p>Patrol Hours</p></center>
										</div>
									</div>
								</div>
								<div class="col-md-4">
									<div class="card border-primary">
										<div class="card-header bg-primary">
										<b>Leave of Absence</b>
										</div>
										<div class="card-body">
											<center><h1 class="text-success">ACTIVE</h1><p>Leave of Absence</p></center>
										</div>
									</div>
								</div>
								<div class="col-md-4">
									<div class="card border-primary">
										<div class="card-header bg-primary">
										<b>Disciplinary Action History</b>
										</div>
										<div class="card-body">
											<center><h1>NO</h1><p>Disciplinary Action History</p></center>
										</div>
									</div>
								</div>
							</div>

							<br>

							<?php require_once $_SERVER['DOCUMENT_ROOT'].'/assets/components/patrolActivityTable.php'; ?>

						</div>

					</div>
					
				

				</div>

				<div class="col-md-1"></div>
			</div>
		</div>
	</div>
</div>

<?php require_once $_SERVER['DOCUMENT_ROOT'].'/assets/components/footer.php'; ?>
