<?php
$jsonString = file_get_contents('data.json');
$data = json_decode($jsonString, true);

echo $jsonString;

exit;
?>