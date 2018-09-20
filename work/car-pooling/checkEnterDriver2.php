<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
</head>
<body>

<?php
		$BdUser = "ist169471";
		$host = "db.ist.utl.pt";
		$port = 5432;
		$password = "ksln3638";
		$dbname = $BdUser;

		$connection = pg_connect("host=$host port=$port user=$BdUser password=$password dbname = $dbname") or die(pg_last_error());  

		session_start();
		$nick = $_SESSION['nome'];
		$data_hora = $_SESSION['data_hora'];
		$nick_organizador = $_SESSION['nick_organizador'];
		$matricula = $_SESSION['matricula'];

		
		$sql = "START TRANSACTION; UPDATE Boleia SET nick_condutor='$nick', matricula='$matricula' WHERE nick='$nick_organizador' AND data_hora = '$data_hora'; COMMIT;";
		$result = pg_query($sql) or die(pg_last_error());
			
		header("location:successRegister.php");
?>



</body>
</html> 	
