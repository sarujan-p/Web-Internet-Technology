<?php
    if (isset($_POST["submit"])) {
        $maxsize = "2097152";
        $size=$_FILES['pdf']['size'];
        $upload_pdf=$_FILES["pdf"]["name"];
        $temp = explode(".", $_FILES["pdf"]["name"]);
        $extension = end($temp);
        $exist=false;
    }
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="author" content="Sarujan P">
    <link rel="stylesheet" href="bootstrap.min.css">
    <link rel="stylesheet" href="style.css">
    <title>PDF Uploader</title>
</head>

<body>
    <div class="container">
        <div class="row justify-content-center">
            <div class="card mx-3 my-5 col-lg-8">
                <div class="row">
                    <div class="mx-auto">
                        <fieldset class="form-group mx-5 my-2">
                            <legend class="text-center">PDF Uploader</legend>
                            <?php
                                if(isset($_POST["submit"])){
                                    $maxsize = "2097152"; 
                                    $temp = explode(".", $_FILES["pdf"]["name"]);
                                    $extension = end($temp);
                                    $folderLocation='Upload/'.$_FILES["pdf"]["name"];
                                    $fileList = glob('Upload/*');
                                    
                                    if($extension != 'pdf' || $_FILES["pdf"]["size"] > $maxsize){
                                        echo '
                                            <div class="alert">
                                                <span>sorry,you can only upload <= 2MB pdf type file</span>
                                            </div>
                                        ';
                                    } 
                                    foreach($fileList as $filename){
                                        if($filename==$folderLocation){
                                            $exist=true;
                                        }
                                    }
                                    if($size <= $maxsize && $extension=='pdf' && $exist==false){
                                        move_uploaded_file($_FILES["pdf"]["tmp_name"],"Upload/" . $_FILES["pdf"]["name"]);
                                    }else{
                                        $_FILES["pdf"]["name"]=NULL;
                                        $size=NULL;
                                        $extension=NULL;
                                    }
                                    if($exist==true){
                                        echo '
                                            <div class="alert">
                                                <span>Sorry,This file Already exist!</span>
                                            </div>
                                        '; 
                                    }
                                }
                            ?>
                            <form class="form-inline" method="post" enctype="multipart/form-data">
                                <input class="form-control mr-sm-2 mr-md-3 mr-lg-3" type="file" id="pdf" name="pdf" required>
                                <input class="form-control" name="submit" id="submit" type="submit" value="Submit">
                            </form>
                        </fieldset>
                        <div class="text">
                            <div><?php if(isset($_POST["submit"])){ if($_FILES["pdf"]["name"] != NULL){echo 'Upload: '.$_FILES["pdf"]["name"];} }?></div>
                            <div><?php if(isset($_POST["submit"])){ $temp = explode(".", $_FILES["pdf"]["name"]); $extension = end($temp); if($extension != NULL){echo 'Type: '.'application/'.$extension;} }?></div>
                            <div><?php if(isset($_POST["submit"])){ if($size != NULL){if($size >= 1024){$size = number_format($size / 1024, 2) . ' Kb';}else{$size=$size.' Bytes';} echo 'Size: '.$size;} }?></div>
                            <div><?php if(isset($_POST["submit"])){ if($_FILES["pdf"]["name"] != NULL){echo 'Stored in: '.'Upload/'.$_FILES["pdf"]["name"];} }?></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>

</html>
