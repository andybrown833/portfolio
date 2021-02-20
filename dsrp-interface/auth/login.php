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
                            
                                <h4>Login Required</h4>

                                <div>
                                    <label for="loginEmail" >Email Address</label>
                                    <input type="email" id="loginEmail" name="loginEmail" class="form-control" placeholder="Email Address" required="" autofocus="">
                                </div>

                                <br>

                                <div>
                                    <label for="loginPassword">Password</label>
                                    <input type="password" id="loginPassword" name="loginPassword" class="form-control" placeholder="Password" required="">
                                </div>

                                <br>

                                <center>
                                    <div class="btn-group" role="group" aria-label="Basic example">
                                        <button type="submit" id="btnLogin" class="btn btn-primary">Login</button>
                                        <a type="button" id="btnReset" href="/auth/reset.php" class="btn btn-secondary">Reset Password</a>
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

if($_SERVER['REQUEST_METHOD'] == "POST") {
    
    

    function validate($data) {
        $data = trim($data);
        $data = stripslashes($data);
        $data = htmlspecialchars($data);
        return $data;
    }

    $loginEmail = '';
    $loginPassword = '';
    $str = rand();
    $hash = md5($str);

    $loginEmail = validate($_POST["loginEmail"]);
    $loginPassword = validate($_POST["loginPassword"]);
   
    require_once $_SERVER['DOCUMENT_ROOT'].'/assets/db/dbConnect.php';

    if ($stmt = $con->prepare('SELECT id, password, displayName FROM accounts WHERE email = ?')) {
        $stmt->bind_param('s', $loginEmail);
        $stmt->execute();
        $stmt->store_result();
        if ($stmt->num_rows > 0) {
            $stmt->bind_result($id, $password, $displayName);
            $stmt->fetch();
            if (password_verify($loginPassword, $password)) {

                if($stmt = $con->prepare(' SELECT * FROM accactive WHERE userID = ?')) {
                    $stmt->bind_param('s', $id);
                    $stmt->execute();
                    $stmt->store_result();
                    
                    if($stmt->num_rows > 0) {
                                                
                        $_SESSION['loggedin'] = TRUE;
                        $_SESSION['id'] = $hash;
                        $_SESSION['user'] = $id;

                        echo '<script type="text/javascript">location.reload();</script>';
                        exit;

                    } else {
                        
                        if($stmt = $con->prepare(' INSERT INTO accactive (userID, link, displayName) VALUES (?,?,?) ')) {
                            $link = '/app/profile.php?id=' . $id;
                            $stmt->bind_param('sss', $id, $link, $displayName);
                            if($stmt->execute()) {
        
                                $_SESSION['loggedin'] = TRUE;
                                $_SESSION['id'] = $hash;
                                $_SESSION['user'] = $id;
        
                                echo '<script type="text/javascript">location.reload();</script>';
                                exit;
        
                            } else {
                                echo "<script>alert('Could not execute order 66.');</script>";
                                echo '<script type="text/javascript">location.href = "/app/";</script>';
                                exit;
                            }
        
                        } else {
                            echo "<script>alert('Error fetching things from database.');</script>";
                            echo '<script type="text/javascript">location.href = "/app/";</script>';
                            exit;
                        }
                          
                    } // END OF ELSE

                } else {
                    echo "<script>alert('There was an error looking for users.');</script>";
                    echo '<script type="text/javascript">location.href = "/app/";</script>';
                    exit;
                }
   
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