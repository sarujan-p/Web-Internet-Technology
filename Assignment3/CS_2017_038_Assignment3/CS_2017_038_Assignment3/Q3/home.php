<?php include('sql.php'); ?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="author" content="Sarujan P">
    <link rel="stylesheet" href="bootstrap.min.css">
    <link rel="stylesheet" href="styles.css">
    <title>Home</title>
</head>

<body>
    <div class="align-self-center">
        <div class="container">
            <div class="card my-4 w-50">
                <legend class="mx-auto mt-3">
                    <?php
                        session_start();
                        echo 'Welcome ' . $_SESSION['fname'].' '.$_SESSION['lname'].'!';
                     ?>
                 </legend>
                <img class="mt-3 mb-3 mx-auto" src="<?php echo $_SESSION['imgpath'] ?>" alt="userlogin">
            </div>
        </div>
    </div>
</body>

</html>
