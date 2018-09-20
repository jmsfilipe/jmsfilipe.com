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
					<div style="background:#009ee3;width:500px;height:500px;border-radius:23px;font-family:Arial;">
							<br />
							<b style="font-family:Arial; font-size:40px;color:white;">Registo Utilizador</b>
							<br /><br /><br /><br />
							<center>
							<form method="get" action="checkRegister.php">							
							<table cellpadding="4" width="450px" height="200px">
								<tr >
									<td colspan="3">
										<strong>Nome:</strong><input id="texto" type="text" name="nome" required="required"/>
									</td>
								</tr>
								<tr>
									<td colspan="3">
										<strong>Nick:</strong><input id="texto" type="text" name="nick" required="required"/>
									</td>
								</tr>
								<tr>
									<td colspan="3">
										<strong>Número:</strong><input id="texto" type="text" name="numero" required="required"/>
									</td>
								</tr>
								<tr>
									<td colspan="3">
										<strong>Saldo:</strong><input id="texto" type="text" name="saldo" required="required"/>
									<td>
								</tr>
								<tr>
										<td style="text-align:center;">
											<strong>Funcionário:</strong><input	 type="radio" name="estado" value="funcionario"/>
										</td>
										<td width="33%" style="text-align:center;">
											<strong>Professor:</strong><input type="radio" name="estado" value="professor"/>
										</td>
										<td width="33%" style="text-align:center;">
											<strong>Aluno:</strong><input type="radio" name="estado" value="estudante"/>
										</td>
								</tr>
								<tr>
									<td colspan="3">
										<p><b>Se escolheu aluno:</b></p>
										Indique o seu curso:
											<select name="curso">
											<option value="Informática e Computadores">Informática e Computadores</option>
											<option value="Arquitectura">Arquitectura</option>
											<option value="Aeroespacial">Aeroespacial</option>
											<option value="Ambiente">Ambiente</option>
											<option value="Arquitectura Naval">Arquitectura Naval</option>
											<option value="Biológica">Biológica</option>
											<option value="Biomédica">Biomédica</option>
											<option value="Civil">Civil</option>
											<option value="Electrónica">Electrónica</option>
											<option value="Electrotéctica e de Computadores">Electrotécnica e de Computadores</option>
											<option value="Fisíca Tecnológica">Fisíca Tecnológica</option>
											<option value="Geológica e de Minas">Geológica e de Minas</option>
											<option value="Gestão Indústrial">Gestão Indústrial</option>
											<option value="Materiais">Materiais</option>
											<option value="Mecânica">Mecânica</option>
											<option value="Redes de Comunicações">Redes de Comunicações</option>
											<option value="Química">Química</option>
											<option value="Matemática Aplicada e Computação">Matemática Aplicada e Computação</option>
											</select>
									</td>
								</tr>
								<tr>
										<td width="33%" style="text-align:center;">
											<strong>Conduz?    Sim</strong><input type="radio" name="condutor" value="sim"/>
										</td>
										<td width="33%" style="text-align:center;">
											<strong>Não</strong><input type="radio" name="condutor" value="nao"/>
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
