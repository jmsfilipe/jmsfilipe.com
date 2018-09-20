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
			<td colspan="2" height="450px" >
				<center>
					<div style="background:#009ee3;width:650px;height:425px;border-radius:23px;font-family:Arial;">
							<br />
							<b style="font-family:Arial; font-size:40px;color:white;">Criar Boleia</b>
							<br /><br /><br /><br />
							<center>
								<form method="get" action="checkRegisterDriver.php">							
									<table cellpadding="4" width="550px" height="200px">	
										<tr>
											<td colspan="3">
												<label><b>Data:</b></label>	
													
														<input type="date" name="data">
												
											</td>
										</tr>

										<tr>
											<td colspan="3">
												<label><b>Horas:Minutos </b></label><input type="number" name="horas" min="0" max="23"> <b>:</b> <input type="number" name="minutos" min="0" max="60">
											</td>
										</tr>

										<tr>
											<td colspan="3">
												<label><b>Custo passageiro(€):</b></label> <input type="number" name="custo_passageiro" min="1" max="10">
											</td>
										</tr>

										<tr>
											<td colspan="3">
												<label><b>Trajecto:</b></label>				
												<select name="trajecto">
															<?php 
															$sql = "SELECT DISTINCT nome_origem, nome_destino FROM Trajecto";

															$result = pg_query($sql) or die(pg_last_error());

															while ($row_array = pg_fetch_assoc($result)){
															echo ("<option value='".$row_array['nome_origem']."|".$row_array['nome_destino']."'>" . $row_array['nome_origem'] . " / " . $row_array['nome_destino'] ."</option>");
															}
															?>
												</select>
											</td>
										</tr>

<tr>
											<td colspan="3">
												<label><b>Frequência:</b></label>				
												<select name="frequencia">
												<option>Única</option>
												<option>Diária</option>
												<option>Semanal</option>
												<option>Mensal</option>		
												</select>
											</td>
										</tr>
								<tr>
									<td colspan="3">
										<label><b>Data termino:</b></label>	
		
												<input type="date" name="data_termino">

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
