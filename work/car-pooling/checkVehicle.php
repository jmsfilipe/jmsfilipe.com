<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
</head>
<body>

<?php
		session_start();
		
		$BdUser = "ist169471";
		$host = "db.ist.utl.pt";
		$port = 5432;
		$password = "ksln3638";
		$dbname = $BdUser;

		$connection = pg_connect("host=$host port=$port user=$BdUser password=$password dbname = $dbname") or die(pg_last_error());  

		$matricula = $_GET["matricula"];
		$marca = $_GET["marca"];
		$modelo = $_GET["modelo"];
		$lugares = $_GET["lugares"];
		$nickDono = $_SESSION['nome'];
		
		$sql="SELECT * FROM Viatura WHERE matricula='$matricula'";
		$result= pg_query($sql) or die(pg_last_error());
		
		$count =  pg_num_rows($result);
		if($count != 0){
			header("location:failVehicle.php");
		}
		
		$sql="SELECT * FROM Condutor WHERE nick='$nickDono'";
		$result= pg_query($sql) or die(pg_last_error());
		
		$count2 =  pg_num_rows($result);
		if($count2 != 1){
			header("location:notDriver.php");
		}
		
		else {
			$sql = "START TRANSACTION; INSERT INTO Viatura VALUES('$matricula', '$marca', '$modelo', '$lugares','$nickDono'); COMMIT;";
			$result = pg_query($sql) or die(pg_last_error());
			header("location:successVehicle.php");
		}
		
?>

</body>
</html> 	
