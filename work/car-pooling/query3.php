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
          "background:#009ee3;width:800px;height:425px;border-radius:23px;font-family:Arial;">
          <br />
            <b style="font-family:Arial; font-size:40px;color:white;">Utentes que
            participaram em todos os trajectos com origem num dado local</b><br />
            <br />
            <br />

            <center>
              <form method="get" action="checkEnterPassenger.php">
                <table cellpadding="2" width="450px" height="50px">


                  <tr>
                    <td><b>Nick</b></td>

                    <td><b>Origem</b></td>
                  </tr><?php 
                                                          $sql = "WITH UtentesInscritos AS(
                  SELECT nome_origem, nome_destino, data_hora, nick as organizador, nick_condutor as nick
                  FROM Boleia

                  UNION

                  SELECT nome_origem, nome_destino, B.data_hora, I.nick_organizador as organizador, I.nick_passageiro as nick
                  FROM Boleia B, Inscricaop I
                  WHERE B.nick=I.nick_organizador AND
                          B.data_hora=I.data_hora)

                  SELECT DISTINCT U.nick, U.nome_origem
                  FROM UtentesInscritos U
                          WHERE NOT EXISTS ( 
                          SELECT B.nick, B.data_hora
                          FROM Boleia B
                                  WHERE B.nome_origem = U.nome_origem AND NOT EXISTS (
                                          SELECT U2.organizador, U2.data_hora
                                          FROM UtentesInscritos U2
                                          WHERE   B.nick = U2.organizador AND
                                                  U2.data_hora = B.data_hora AND
                                                  U.nick = U2.nick));";

                                                          $result = pg_query($sql) or die(pg_last_error());
                  session_start();
                                                          while ($row_array = pg_fetch_assoc($result)){

                          
                                                          echo("<tr>");
                                  echo("<td>{$row_array['nick']}</td>");
                                  echo("<td>{$row_array['nome_origem']}</td>");
                                  echo("</tr>");
                                                          }



                                                          ?>
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
</body>
</html>

