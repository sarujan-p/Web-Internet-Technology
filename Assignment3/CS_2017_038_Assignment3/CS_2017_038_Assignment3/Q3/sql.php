<?php
    if (isset($_POST["login"])) {
        $user=$_POST["user"];
        $pass=$_POST["pass"];

        $dbhost = "localhost";
        $dbuser = "root";
        $dbpass = "";
        $db = "customerdb";

        $conn =new mysqli($dbhost, $dbuser, $dbpass,$db);

        $sql = "SELECT *  FROM tblusers WHERE Username='$user' AND Passwords='$pass'";
        $result=$conn->query($sql);
        $row = mysqli_fetch_assoc($result);
        if (!$conn) {
            echo '<script>alert("Your Mysql Database Connection Failed");</script>';
        }
        $conn -> close();
    }
?>