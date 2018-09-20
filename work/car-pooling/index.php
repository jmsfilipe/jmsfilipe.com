<!DOCTYPE HTML>
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
	<title>Car Pooling</title>
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
			<td colspan="2" height="450px">
				<center>
					<div style="background:#009ee3;width:500px;height:400px;border-radius:23px;font-family:Arial;text-align:center;">
							<br />
							<b style="font-family:Arial; font-size:40px;">Home</b>
							<br /><br /><br /><br />
							<center>
							<form method="get" action="checkRegister.php">							
							<table cellpadding="4" width="450px" height="200px">
								<tr >
									<td align="center">
										<a href="registerVehicle.php"><strong>Registar Viatura</strong></a>
									</td>
								</tr>
								<tr >
									<td align="center">
										<a href="createRide.php"><strong>Criar Boleia</strong></a>
									</td>
								</tr>
								<tr >
									<td align="center">
										<a href="enterRide.php"><strong>Inscrever-se em Boleia</strong></a>
									</td>
								</tr>
								<tr >
									<td align="center">
										<a href="consulta.php"><strong>Consultas</strong></a>
									</td>
								</tr>
								<tr >
									<td align="center">
										<a href="logout.php"><strong>Logout</strong></a>
									</td>
								</tr>
							</table>
							</center>
							</form>
						</div>
		<?php
	
		$nick = $_SESSION['nome'];
		echo("<i style='font-family:Arial; font-size:12px;color:black;'><b>Login como: $nick </b></i>");
	?>			</center>
			</td>
		</tr>
	</table>
</body>
</html>
