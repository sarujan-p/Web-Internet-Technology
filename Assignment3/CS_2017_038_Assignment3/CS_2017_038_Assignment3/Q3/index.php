<?php include('sql.php'); ?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="author" content="Sarujan P">
    <link rel="stylesheet" href="bootstrap.min.css">
    <link rel="stylesheet" href="styles.css">
    <title>User Login</title>
</head>

<body>
    <div class="container">
        <div class="card my-4 w-50">
            <fieldset class="form-group mx-3 mt-2">
                <legend>User Login</legend>
                <img class="mt-3 mb-3" src="./Images/Userlogin.png" alt="userlogin">
                <?php
                    if(isset($_POST["login"])){
                        if ($row) {
                            session_start();
                            $home="home.php";
                            $_SESSION['fname']=$row['First_Name'];
                            $_SESSION['lname']=$row['Last_Name'];
                            $_SESSION['imgpath']=$row['Image_Path'];
                            $host=$_SERVER['HTTP_HOST'];
                            $uri=rtrim(dirname($_SERVER['PHP_SELF']),'/\\');
                            header("location:http://$host$uri/$home");
                            exit;
                        }else{
                            echo '<script>alert(" Invalid username or password!");</script>';
                        } 
                    } 
                ?>
                <form action="" method="post" enctype="multipart/form-data">
                    <input class="form-control mt-2" type="text" id="user" name="user" placeholder="User Name" required>
                    <input class="form-control mt-2" type="password" id="pass" name="pass" placeholder="Password" required>
                    <input class="mt-2" type="submit" id="login" name="login" value="LOGIN">
                </form>
            </fieldset>
        </div>
    </div>
</body>

</html>