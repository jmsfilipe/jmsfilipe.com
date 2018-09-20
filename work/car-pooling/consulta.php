<!DOCTYPE HTML>
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
	<title>Base de Dados</title>
	<style type="text/css">	

	a:visited{
		color:white;
	}
	a{
		color:white;
		text-decoration:none;
	}
	
	label{
		display: inline-block;
		float: left;
		clear: left;
		width: 250px;
		text-align:left;
	}
	
	#texto {
	  display: inline-block;
	  float: right;
	}
	</style>
</head>
<body style="background-color:#E0E0E0;color:white; ">
	<?php
		session_start();
	
		$BdUser = "ist169471";
		$host = "db.ist.utl.pt";
		$port = 5432;
		$password = "ksln3638";
		$dbname = $BdUser;

		$connection = pg_connect("host=$host port=$port user=$BdUser password=$password dbname = $dbname") or die(pg_last_error());  
	?>
	<table height="600px" width="100%">
		<tr height="150px" >
			<td width="40%">
				<a href="http://www.ist.utl.pt"><img src="ist.png" height="133px"/></a>
			</td>
			<td width="60%">
				<i style="font-family:Arial; font-size:40px;color:black;"><b>Car Pooling</b></i>
			</td>
		</tr>
		<tr height="450px">
			<td colspan="2" height="200px">
				<center>
					<div style="background:#009ee3;width:800px;height:300px;border-radius:23px;font-family:Arial;">
							<br />
							<b style="font-family:Arial; font-size:40px;color:white;">Consultas</b>
							<br /><br />
							<table cellpadding="15">
								<tr>
									<td>
										<center>
											<a href="query1.php" /> <b>Todas as boleias (com condutor) em curso</b>
										</center>
									</td>
								</tr>
								<tr>
									<td>
										<center>
											<a href="query2.php" /><b>Condutor com maior lucro em boleias frequentes com origem no IST-Tagus</b>
										</center>
									</td>
								</tr>

								<tr>
									<td>
										<center>
											<a href="query3.php" /><b>Utentes que participaram em todos os trajectos com origem num dado local</b>
										</center>
									</td>
								</tr>
								<tr>
									<td>
										<center>
											<input type="button" value="Voltar" onClick="history.go(-1);return true;">
										</center>
									</td>
								</tr>
							</table>
					</div>
	<?php
	
		$nick = $_SESSION['nome'];
		echo("<i style='font-family:Arial; font-size:12px;color:black;'><b>Login como: $nick </b></i>");
	?>
				</center>
			</td>
		</tr>
	</table>
</body>
</html>
