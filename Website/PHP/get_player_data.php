<?php
    $playerId = 0;
    $string = 'demo text string';
    $number = rand(1,50);
    echo $number;
?>

<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <link rel="stylesheet" href="css/style.css">
    <title>ajax paint it black.2</title>
</head>
<body>
<div id="container">
    <canvas id="canvas"></canvas>
</div>
<pre>
    <img src="https://welkombijma.nl/wp-content/themes/welkombijma/public/img/logo.svg" width="30" alt="logo Ma" id="logo">
    october 2020
  </pre>
<script type="text/javascript">
    //check data
    function requestPhpData(){
        let string = "<?php echo $string; ?>";
        console.log(string);
        let number = '<?php echo $number; ?>';
        console.log(number);
    }
    requestPhpData();
</script>
<script src="../javascript/ajax.js"></script>
<script src="../javascript/host.js"></script>
</body>
</html>


