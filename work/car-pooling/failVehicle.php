<!DOCTYPE HTML>
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
	<title>Base de Dados</title>
	<style type="text/css">	

	a:visited{
		color:black;
	}
	</style>
</head>
<body style="background-color:#E0E0E0; color:white;">
	<?php
		session_start();
	?>
	<table height="500px" width="100%">
		<tr height="150px" >
			<td width="40%">
				<a href="http://www.ist.utl.pt"><img src="ist.png" height="133px"/></a>
			</td>
			<td width="60%">
				<i style="font-family:Arial; font-size:40px;color:black;"><b>Car Pooling</b></i>
			</td>
		</tr>
		<tr>
			<td colspan="2" height="300px">
			<center>
				<div style="background:#009ee3;width:250px;height:150px;border-radius:23px;font-family:Arial;">
						<center>
						<br>
						<form action="registerVehicle.php">
							<p style="font-size:18px;"><b>Matricula já existente!</b></p><p p style="font-size:18px;"><b>A matricula já existe.</b></p>
							<input type="submit" value="Voltar">
						</form>
						</center>
				</div>
	<?php
	
		$nick = $_SESSION['nome'];
		echo("<i style='font-family:Arial; font-size:12px;color:black;'><b>Login como: $nick </b></i>");
	?>
			</center>
			</td>
		</tr>
		<tr>
		</tr>
	</table>
</body>
</html>
