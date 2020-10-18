<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Teste</title>
</head>
<body>
    <form name="form1" method='post' action="<?php echo $_SERVER['PHP_SELF'];?>" enctype="multipart/form-data">
    <input type="file" name="file" id="">
    <input type="submit" name="submit" id="">
    </form>
    
    <?php
        $dateNow = date('M') . date('Y');
        $file = $_FILES['file'];
        move_uploaded_file($_FILES['file']['tmp_name'], './ImagesFiles_Requests_BD_Public_RW/' . $_FILES['file']['name']);
        
    if(!file_exists('./ImagesFiles_Requests_BD_Public_RW/' . $dateNow)){
        mkdir('./ImagesFiles_Requests_BD_Public_RW/'. $dateNow, 0777, true);
    }
    else{
        echo 'folder alhady exists' . date('Y');
    }
    ?>
</body>
</html>