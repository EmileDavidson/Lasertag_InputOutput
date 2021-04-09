<?php
    $playerid = $_GET['playerid'];
    $deaths = $_GET['deaths'];
    $KillsBy = $_GET['KillsBy'];
    $lives = $_GET['lives'];

    $Player = array(
        "playerid" => (string)$playerid,
        "deaths" => (string)$deaths,
        "KillsBy" => (string)$KillsBy,
        "lives" => (string)$lives
    );

    echo "<br><br>";
    echo "playerid: " . $playerid . "<br>";
    echo "deaths: "   . $deaths   . "<br>";
    echo "kills: "    . $KillsBy    . "<br>";
    echo "lives: "    . $lives    . "<br>";
    echo "<br><br><br><br><br>";

    $filePath = "data.json"; // path filename json control file from HTML

    //all the data we will have
    $data = array();

    //request json
    $json = file_get_contents("data.json");


    if(!empty($json)){
        $data = array_merge($data, json_decode($json)); //puts an array in an array (we dont want that)
        print_r($data);
    }

    foreach($data as &$item){
        if($item->playerid === $Player['playerid']){
            echo "player already exists change data";
            $item = $Player;
            goto next1;
        }
    }
    echo "didnt exist so i add it!";
    array_push($data, $Player);

    next1:
    if(!empty($data)){
        //overwrite old json with new json
        $file = fopen($filePath, "w") or die("can't open file");
        fwrite($file, json_encode($data)); // overwrite existing file
        fclose($file);
    }
?>