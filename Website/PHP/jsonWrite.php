<?php
echo "testing";
    $control = "";// mandatory for PHP 5.4
    $filePath = "data.json";//path filename json control file
    if (!empty($_GET['put'])){
        $control= $_GET['put'];
    }
    $file = fopen($filePath, "w") or die("can't open file");
    fwrite($file, $control); // overwrite existing file
    fclose($file);
