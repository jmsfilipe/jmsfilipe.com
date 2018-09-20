<!DOCTYPE HTML>
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
	<title>Base de Dados</title>
	<style type="text/css">	

	a:visited{
		color:white;
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
		
		$BdUser = "ist169471";
		$host = "db.ist.utl.pt";
		$port = 5432;
		$password = "ksln3638";
		$dbname = $BdUser;

		$connection = pg_connect("host=$host port=$port user=$BdUser password=$password dbname = $dbname") or die(pg_last_error());  
		session_start();
		$nick = $_SESSION['nome'];
		
		$sql="SELECT DISTINCT * FROM Condutor WHERE nick = '$nick'";
		$result= pg_query($sql) or die(pg_last_error());
		
		$count2 =  pg_num_rows($result);

	
		if($count2 == 0){
			
			header("location:notDriver2.php");
		}
		
		$custo_passageiro = $_GET["custo_passageiro"];
		$data_hora = date(date($_GET["data"]) . " " . date($_GET["horas"] . ":" . $_GET["minutos"]));
		
		$string = $_GET["trajecto"];
		$trajecto = explode("|", $string);
		$nome_origem = $trajecto[0];
		$nome_destino = $trajecto[1];
		$data_termino = $_GET['data_termino'];
		$_SESSION['data_termino'] = $data_termino;
		$_SESSION['data_hora'] = date($data_hora);
		$_SESSION['nome_origem'] = $nome_origem;
		$_SESSION['nome_destino'] = $nome_destino;
		$_SESSION['custo_passageiro'] = $custo_passageiro;
		
		$frequencia = $_GET["frequencia"];
		$_SESSION['frequencia'] = $frequencia;
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
					<div style="background:#009ee3;width:500px;height:425px;border-radius:23px;font-family:Arial;">
							<br />
							<b style="font-family:Arial; font-size:40px;color:white;">Criar Boleia</b>
							<br /><br /><br /><br />
							<center>
							<form method="get" action="checkRegisterDriver2.php">							
							<table cellpadding="4" width="450px" height="200px">			
								<tr>
									<td colspan="3">	
										<center>
											<b>Viatura:</b>	
											<select name="matricula">
												<?php 
													$sql = "SELECT DISTINCT matricula, marca, modelo FROM Viatura WHERE nick = '$nick' ";

													$result = pg_query($sql) or die(pg_last_error());

													while ($row_array = pg_fetch_assoc($result)){
													echo ("<option value='".$row_array['matricula']."'>" . $row_array['marca'] . " " . $row_array['modelo'] . " ".  $row_array['matricula'] ."</option>");
													}
												?>
										</select>
									</center>		
								
								</td>
							</tr>
							<tr>									
								<td colspan="3">
										<center>
											<input type="button" value="Voltar" onClick="history.go(-1);return true;">
											<input type="submit" value="Registar"/>
										</center>
									</td>
								</tr>

							</table>
							</center>
							</form>
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
