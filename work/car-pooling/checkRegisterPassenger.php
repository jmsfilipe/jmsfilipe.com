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

		$nick = $_SESSION["nome"];
		$data = $_GET["data"];
		$horas = $_GET["horas"];
		$minutos = $_GET["minutos"];
		$data_hora =date(date($data) . "  " . date($horas . ":" . $minutos ));
		$custo_passageiro = $_GET["custo_passageiro"];
		$trajecto = $_GET["trajecto"];
		
		$frequencia = $_GET["frequencia"];
		
		$string = explode("|", $trajecto);

		$nome_origem = $string[0];
		$nome_destino = $string[1];
		
		$sql = "START TRANSACTION; INSERT INTO Boleia VALUES('$nick', '$data_hora', '$custo_passageiro', '$nome_origem', '$nome_destino', null, null)";
		$result = pg_query($sql) or die(pg_last_error());

		if($frequencia != 'Única'){
			$data_termino = $_GET["data_termino"];
		
			$sql = "INSERT INTO BoleiaFrequente VALUES('$nick', '$data_hora', '$data_termino', '$frequencia'); COMMIT;";
			$result = pg_query($sql) or die(pg_last_error());}

		else{
	
		
			$sql = "INSERT INTO BoleiaUnica VALUES('$nick', '$data_hora'); COMMIT;";
			$result = pg_query($sql) or die(pg_last_error());}

		header("location:successRide.php");
?>


</body>
</html> 	
