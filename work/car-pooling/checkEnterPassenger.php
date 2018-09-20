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
		$boleia = $_SESSION['boleia'];
		$string = explode("|", $boleia);

		$nick_organizador = $string[0];
		$data_hora = $string[1];

		$sql="SELECT DISTINCT * FROM Boleia WHERE nick = '$nick_organizador' AND data_hora = '$data_hora' AND nick = '$nick';";
		$result= pg_query($sql) or die(pg_last_error());
		
		$count2 =  pg_num_rows($result);

		if($count2 > 0){	
			header("location:alreadyIn.php");
		}

		$sql = "START TRANSACTION; INSERT INTO Inscricaop VALUES( '$nick', '$nick_organizador', '$data_hora'); COMMIT;";
		$result = pg_query($sql) or die(pg_last_error());
			
		header("location:successRegister.php");
?>



</body>
</html> 	
