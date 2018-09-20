<html xmlns="http://www.w3.org/1999/xhtml">
<head>
  <meta name="generator" content=
  "HTML Tidy for Linux/x86 (vers 11 February 2007), see www.w3.org" />
  <meta http-equiv="Content-Type" content="text/html; charset=us-ascii" />

  <title>Base de Dados</title>
  <style type="text/css">
/*<![CDATA[*/


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
  /*]]>*/
  </style>
</head>

<body style="background-color:#E0E0E0;color:white;">
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
    <tr height="150px">
      <td width="40%"><a href="http://www.ist.utl.pt"><img src="ist.png" height=
      "133px" /></a></td>

      <td width="60%"><i style="font-family:Arial; font-size:40px;color:black;"><b>Car
      Pooling</b></i></td>
    </tr>

    <tr height="450px">
      <td colspan="2" height="450px">
        <center>
          <div style=
          "background:#009ee3;width:950px;height:425px;border-radius:23px;font-family:Arial;">
          <br />
            <b style="font-family:Arial; font-size:40px;color:white;">Juntar-se a boleia
            como passageiro</b><br />
            <br />
            <br />
            <br />

            <center>
              <form method="get" action="checkEnterPassenger.php">
                <script type="text/javascript">
//<![CDATA[
                function clicou(var derp){
                alert(derp);
                document.getElementById('boleia').value = derp;


                }
                //]]>
                </script>

                <table cellpadding="4" width="850px" height="200px">
                  <tr>
                    <td></td>
                  </tr>

                  <tr>
                    <td><b>Nick</b></td>

                    <td><b>Data e hora</b></td>

                    <td><b>Custo/passageiro</b></td>

                    <td><b>Origem</b></td>

                    <td><b>Destino</b></td>

                    <td><b>Condutor</b></td>

                    <td><b>Matricula</b></td>

                    <td><b>Escolher</b></td>
                  </tr><?php 
                                                          $sql = "SELECT DISTINCT nick, data_hora, custo_passageiro, nome_origem, nome_destino, nick_condutor, matricula FROM Boleia";

                                                          $result = pg_query($sql) or die(pg_last_error());
                  session_start();
                                                          while ($row_array = pg_fetch_assoc($result)){

                                  $boleia = $row_array['nick'] . "|" . $row_array['data_hora'];

                                  $_SESSION['boleia'] = $boleia;
                                                          echo("<tr>");
                                  echo("<td>{$row_array['nick']}</td>");
                                  echo("<td>{$row_array['data_hora']}</td>");
                                  echo("<td>{$row_array['custo_passageiro']}</td>");
                                  echo("<td>{$row_array['nome_origem']}</td>");
                                  echo("<td>{$row_array['nome_destino']}</td>");
                                  echo("<td>{$row_array['nick_condutor']}</td>");
                                  echo("<td>{$row_array['matricula']}</td>");
                                  echo("<td> <input type='radio' name='estado'  value='");
                                  echo("$boleia");
                                  echo("' onchange='clicou(this.value)'/> </td>");

                                  echo("</tr>");
                                                          }



                                                          ?>

                  <tr>
                    <td colspan="8">
                      <center>
                        <input type="button" value="Voltar" onclick=
                        "history.go(-1);return true;" /> <input type="submit" value=
                        "Registar" />
                      </center>
                    </td>
                  </tr>
                </table>
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
  </table>

  <form>
    <input type='hidden' name='boleia' value='' />
  </form>
</body>
</html>

