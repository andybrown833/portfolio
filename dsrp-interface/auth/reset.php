<?php
if (session_status() !== PHP_SESSION_ACTIVE) {
    session_start();
}

if(isset($_SESSION['loggedin']) && $_SESSION['loggedin'] == TRUE) {
	echo '<script>history.back();</script>';
	exit;
}

require_once $_SERVER['DOCUMENT_ROOT'].'/assets/page.php';

?>
<br><br><br>
<div class="container-fluid">
	<div class="row">
		<div class="col-md-12">
			<div class="row">
				<div class="col-md-4">
				</div>
				<div class="col-md-4">
                    
                    <br><br>

                    <img width="100%" src="/assets/imgs/interfaceTP.png" />

                    <br><br><br><br>

                    <div class="row">
                        <div class="col-md-3"></div>

                        <div class="col-md-6">
                            <form action="#" method="post">
                            
                                <h4>Reset Password Request</h4>

                                <div>
                                    <label for="resetEmail" >Email Address</label>
                                    <input type="email" id="resetEmail" name="resetEmail" class="form-control" placeholder="Email Address" required="" autofocus="">
                                </div>

                                <br>

                                <center>
                                    <div class="btn-group" role="group" aria-label="Basic example">
                                        <button type="submit" id="btnLogin" class="btn btn-primary">Submit</button>
                                        <a type="button" id="btnReset" href="/auth/login.php" class="btn btn-secondary">Cancel and Login</a>
                                    </div>
                                    
                                    <p class="mt-5 mb-3 text-muted">DownSouthRP © 2020</p>
                                </center>
                            </form>
                        </div>
                        <div class="col-md-3"></div>

                    </div>

				</div>
				<div class="col-md-4">
				</div>
			</div>
		</div>
	</div>
</div>

<?php

exit;


if($_SERVER['REQUEST_METHOD'] == "POST") {
    
    require_once $_SERVER['DOCUMENT_ROOT'].'/assets/db/dbConnect.php';

    function validate($data) {
        $data = trim($data);
        $data = stripslashes($data);
        $data = htmlspecialchars($data);
        return $data;
    }

    $resetEmail = '';
    $str = rand();
    $hash = md5($str);

    $resetEmail = validate($_POST["resetEmail"]);
   

    if($stmt = $accCON->prepare(' SELECT id, email FROM accounts WHERE email = ? ')) {
        $stmt->bind_param('s', $resetEmail);
        $stmt->execute();
        $stmt->store_result();

        if($stmt->num_rows > 0) {
            $stmt->bind_result($id, $email);

            


        }
    }


    // Prepare our SQL, preparing the SQL statement will prevent SQL injection.**
    if ($stmt = $accCON->prepare('SELECT id, password FROM accounts WHERE email = ?')) {
        // Bind parameters (s = string, i = int, b = blob, etc), in our case the username is a string so we use "s"
        $stmt->bind_param('s', $loginEmail);
        $stmt->execute();
        // Store the result so we can check if the account exists in the database.
        $stmt->store_result();
        // If the username exists
        if ($stmt->num_rows > 0) {
            $stmt->bind_result($id, $password);
            $stmt->fetch();
            // Account exists, now we verify the password.
            // Note: remember to use password_hash in your registration file to store the hashed passwords.
            if (password_verify($loginPassword, $password)) {
                // Verification success! User has loggedin!
                // Create sessions so we know the user is logged in, they basically act like cookies but remember the data on the server.
                $_SESSION['loggedin'] = TRUE;
                $_SESSION['id'] = $hash;
                $_SESSION['user'] = $id;

                echo '<script type="text/javascript">location.reload();</script>';
                exit;
            } else {
                echo "<script>alert('Wrong Password!');</script>";
                echo '<script type="text/javascript">location.href = "/app/";</script>';
                exit;
            }
        } else {
            echo "<script>alert('Incorrect Username!');</script>";
            echo '<script type="text/javascript">location.href = "/app/";</script>';
            exit;
        }
    } else {
        echo "<script>alert('An error has occured!');</script>";
        echo '<script type="text/javascript">location.href = "/app/";</script>';
        exit;
    }

}

?>
