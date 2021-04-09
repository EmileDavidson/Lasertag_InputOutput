<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <link rel="stylesheet" href="../css/host-style.css">
    <title>Lasertag - host display</title>
</head>
<body>
<style>
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}

a{
    border-style: solid;
    border-width: 1px;
    border-color:black;
    padding: 5px;
}

#data-table{
    margin-top: 100px;
}
</style>

<a onclick="serverGetJson()">request JSON</a>
<table id="data-table">
    <tr>
        <th>PlayerId</th>
        <th>Deaths</th>
        <th>Kills</th>
        <th>Lives</th>
    </tr>
</table>

<p id="demo"></p>

<script src="../javascript/ajax.js"></script>
<script src="../javascript/host.js"></script>
</body>
</html>


