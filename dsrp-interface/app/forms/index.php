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
									<li class="breadcrumb-item active" aria-current="page">Forms</li>
								</ol>
							</nav>

							<div class="row">
									<div class="col-md-3">
										<div class="card border-primary">
											<div class="card-header bg-primary">
												<b>Patrol Activity Form</b>
											</div>
											<div class="card-body">
												<div class="row">
													<div class="col-md-4">
														<center><h1 style="padding-top:10px;"> <?php echo '1'; ?> </h1></center>
													</div>
													<div class="col-md-8">
														<button class="btn btn-sm btn-outline-primary btn-block" data-toggle="modal" data-target="#palSelector">Open New</button>
														<a class="btn btn-sm btn-outline-primary btn-block" href="/app/forms/patrol/">View Submissions</a>
													</div>
												</div>
											</div>
										</div>

										<!-- <br>
										
										<div class="card border-primary">
											<div class="card-header bg-primary">
												<b></b>
											</div>
											<div class="card-body">
												
											</div>
											<div class="card-footer">
												<button class="btn btn-outline-primary btn-block">Open New</button>
											</div>
										</div> -->
									</div>
									<div class="col-md-4">
										<div class="card border-primary">
											<div class="card-header bg-primary">
												<b>Leave of Absence Notification</b>
											</div>
											<div class="class-row">
											
											</div>

											<div class="card-body">
												<center><h3 class="text-success">ACTIVE</h3></center>
												<a class="btn btn-sm btn-outline-primary btn-block" href="#">View Active LOA</a>
											</div>
										</div>

										<!-- <br>

										<div class="card border-primary">
											<div class="card-header bg-primary">
												<b></b>
											</div>
											<div class="card-body">
												
											</div>
											<div class="card-footer">
												<button class="btn btn-outline-primary btn-block">Open New</button>
											</div>
										</div> -->
									</div>
									<!-- <div class="col-md-3">
										<div class="card border-primary">
											<div class="card-header bg-primary">
												<b></b>
											</div>
											<div class="card-body">
												
											</div>
											<div class="card-footer">
												<button class="btn btn-outline-primary btn-block">Open New</button>
											</div>
										</div>

										<br>

										<div class="card border-primary">
											<div class="card-header bg-primary">
												<b></b>
											</div>
											<div class="card-body">
												
											</div>
											<div class="card-footer">
												<button class="btn btn-outline-primary btn-block">Open New</button>
											</div>
										</div>
									</div>
									<div class="col-md-3">
										<div class="card border-primary">
											<div class="card-header bg-primary">
												<b></b>
											</div>
											<div class="card-body">
												
											</div>
											<div class="card-footer">
												<button class="btn btn-outline-primary btn-block">Open New</button>
											</div>
										</div>

										<br>

										<div class="card border-primary">
											<div class="card-header bg-primary">
												<b></b>
											</div>
											<div class="card-body">
												
											</div>
											<div class="card-footer">
												<button class="btn btn-outline-primary btn-block">Open New</button>
											</div>
										</div>
									</div> -->
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