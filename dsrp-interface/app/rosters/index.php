<?php
if (session_status() !== PHP_SESSION_ACTIVE) { session_start(); }
require_once $_SERVER['DOCUMENT_ROOT'].'/assets/scripts/checkAuth.php';
require_once $_SERVER['DOCUMENT_ROOT'].'/assets/db/cons/getUser.php';
require_once $_SERVER['DOCUMENT_ROOT'].'/assets/page.php';
require_once $_SERVER['DOCUMENT_ROOT'].'/assets/components/header.php';

require_once $_SERVER['DOCUMENT_ROOT'].'/assets/db/cons/rostersMain.php';


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
								<li class="breadcrumb-item active" aria-current="page">Rosters & Stats</li>
							</ol>
						</nav>

						<div class="row">

							<div class="col-md-4">
								<div class="card">
									<div class="card-header bg-primary text-white">Members</div>
									<div class="card-body">
										<h1>25</h1>
									</div>
								</div>
							</div>
							<div class="col-md-4">
								<div class="card">
									<div class="card-header bg-primary text-white">Staff Members</div>
									<div class="card-body">
										<h1>10</h1>
									</div>
								</div>
							</div>
							<div class="col-md-4">
								<div class="card">
									<div class="card-header bg-primary text-white">Administrators</div>
									<div class="card-body">
										<h1>8</h1>
									</div>
								</div>
							</div>

						</div>

						<br>

						<div class="card">
							<div class="card-header bg-primary text-white">Community Public Roster <span class="badge badge-light text-dark"><?php if(isset($totalAccounts)) { echo $totalAccounts . ' Members'; } ?></span></div>
							<div class="card-body">

								<div class="row">
									<div class="col-md-3">
										<form action="#" method="post">
											<div class="input-group mb-3">
												<input type="text" class="form-control border-primary" placeholder="Search by Web ID" required/>
												<div class="input-group-append">
													<button class="btn btn-outline-primary" type="button">SEARCH</button>
												</div>
											</div>
										</form>
									</div>
									<div class="col-md-3">
										<form action="#" method="post">
											<div class="input-group mb-3">
												<input type="text" class="form-control border-primary" placeholder="Search by Name" required/>
												<div class="input-group-append">
													<button class="btn btn-outline-primary" type="button">SEARCH</button>
												</div>
											</div>
										</form>
									</div>
								</div>

								<table class="table table-sm table-hover table-bordered text-center">

									<thead>
										<tr class="bg-primary text-white">
											<th>ID</th>
											<th>Name</th>
											<th>Identifier</th>
											<th>Community Rank</th>
											<th>Main Department</th>
											<th>Reserve Departments</th>
											<th>Status</th>
											<th>Leave of Absence</th>
											
										</tr>
									</thead>

									<thead>
										<tr>
											<td>1</td>
											<td>Anderson B.</td>
											<td>D-1</td>
											<td>Development Coordinator</td>
											<td>Development Department</td>
											<td>-</td>
											<td>-</td>
											<td>-</td>
										</tr>
									</thead>
								
								</table>

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