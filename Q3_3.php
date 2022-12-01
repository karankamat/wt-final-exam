<?php

    $file = fopen('Info.txt', 'w') or die('Unable to open the file');
    $message = "Hi, I am Karan M Kamat, Roll No. A021 from batch 2022-2024 and currently pursuing MCA from MPSTME";
    fwrite($file, $message);
    $readfile = fread($file);
    echo $readfile;
    fclose($file);
    
?>



