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

		$nome = $_GET["nome"];
		$nick = $_GET["nick"];
		$saldo = $_GET["saldo"];
		$numero = $_GET["numero"];
		$curso = $_GET["curso"];


		$sql = "START TRANSACTION; INSERT INTO Utente VALUES('$nick', '$nome', '$numero', '$saldo'); INSERT INTO Passageiro VALUES('$nick');";
		$result = pg_query($sql) or die(pg_last_error());
			
			if($_GET["estado"] == "estudante"){
				$curso = $_GET["curso"];
				$sql = "INSERT INTO Aluno VALUES('$nick', '$curso'); COMMIT;";
				$result = pg_query($sql) or die(pg_last_error());
			}

			if($_GET["estado"] == "funcionario"){
				$curso = $_GET["curso"];
				$sql = "INSERT INTO Funcionario VALUES('$nick'); COMMIT;";
				$result = pg_query($sql) or die(pg_last_error());
			}

			if($_GET["estado"] == "professor"){
				$curso = $_GET["curso"];
				$sql = "INSERT INTO Docente VALUES('$nick'); COMMIT;";
				$result = pg_query($sql) or die(pg_last_error());
			}
			
			if($_GET["condutor"] == "sim"){
				$sql = "START TRANSACTION; INSERT INTO Condutor VALUES('$nick'); COMMIT;";
				$result = pg_query($sql) or die(pg_last_error());
			}

		header("location:successRegister.php");
?>

</body>
</html> 	
