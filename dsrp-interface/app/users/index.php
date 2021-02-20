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

							<?php

								require_once $_SERVER['DOCUMENT_ROOT'].'/assets/db/cons/getUser.php';
								if($userCommunityRank == 'Member') {
									require_once $_SERVER['DOCUMENT_ROOT'].'/assets/components/sideBar.php';
								}
								//elseif()

								

							?>

						</div>

						<div class="col-md-10">








						</div>

					</div>


				</div>

				<div class="col-md-1"></div>
			</div>
		</div>
	</div>
</div>

<?php require_once $_SERVER['DOCUMENT_ROOT'].'/assets/components/footer.php'; ?>