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

		$user = $_GET["username"];
		
		$sql="SELECT * FROM Utente WHERE nick='$user'";
		$result= pg_query($sql) or die(pg_last_error());
		
		$count =  pg_num_rows($result);
		
		if($count == 1){
			$_SESSION['nome'] = $user;
			header("location:index.php");
		}
		else {
			header("location:failLogin.php");
		}
?>

</body>
</html> 	
