<!DOCTYPE HTML>
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
	<title>Base de Dados</title>
	<style type="text/css">	

	a:visited{
		color:white;;
	}
	a{
		color:white;;
	}
	</style>
</head>
<body style="background-color:#E0E0E0;color:white;">
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
				<div style="background:#009ee3;width:300px;height:300px;border-radius:23px;font-family:Arial;">
						<br />
						<b style="font-family:Arial; font-size:40px;">Login</b>
						<br /><br /><br /><br />
						
						<form method="get" action="checkLogin.php">
						<strong>Nick:</strong><input type="text" name="username"/>
						<input type="submit" value="Entrar"/>
						<br /><br /><br />
						<a href="register.php" style="text-decoration:none;"><strong>Não está registado?</strong></a>
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
