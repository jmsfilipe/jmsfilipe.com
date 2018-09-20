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
		$nome_origem = $_SESSION['nome_origem'];
		$nome_destino = $_SESSION['nome_destino'];
		$custo_passageiro = $_SESSION['custo_passageiro'];
		$frequencia = $_SESSION['frequencia'];
		$matricula = $_GET["matricula"];
		$data_termino = $_GET["data_termino"];


		$sql = "START TRANSACTION; INSERT INTO Boleia VALUES('$nick', '$data_hora', '$custo_passageiro', '$nome_origem', '$nome_destino', null, null);
			UPDATE Boleia SET nick_condutor='$nick', matricula='$matricula' WHERE nick='$nick' AND data_hora = '$data_hora';";
		$result = pg_query($sql) or die(pg_last_error());
		

		if($frequencia != 'Única'){
			$sql = "INSERT INTO BoleiaFrequente VALUES('$nick', '$data_hora', '$data_termino', '$frequencia'); COMMIT;";
			$result = pg_query($sql) or die(pg_last_error());}

		else{
			$sql = "INSERT INTO BoleiaUnica VALUES('$nick', '$data_hora'); COMMIT;";
			$result = pg_query($sql) or die(pg_last_error());}

		header("location:successRide.php");
?>



</body>
</html> 	
