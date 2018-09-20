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
            <b style="font-family:Arial; font-size:40px;color:white;">Condutor com maior
            lucro em boleias frequentes com origem no IST-Tagus</b><br />
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

                <table cellpadding="2" width="450px" height="200px">

                  <tr>
                    <td><b>Condutor</b></td>

                    <td><b>Media</b></td>
                  </tr><?php 
                          $sql = "WITH naoFrequentesTagus AS(
                  SELECT DISTINCT B.nick AS nick_tagus, B.custo_passageiro as custo_passageiro, I.nick_passageiro as nick_passageiro, B.nick_condutor AS nick_condutor, B.data_hora AS data
                  FROM Boleia B, BoleiaUnica U, Inscricaop I
                  WHERE   U.nick = B.nick AND 
                          U.nick = I.nick_organizador AND 
                          B.nick = I.nick_organizador AND 
                          I.data_hora = B.data_hora AND
                          I.data_hora = U.data_hora AND
                          U.data_hora = B.data_hora AND
                          (nome_origem = 'IST-Tagus' OR nome_destino = 'IST-Tagus')
                  ),

                  maiorQuantia AS(
                  SELECT SUM(custo_passageiro) AS custo, nick_condutor
                  FROM naoFrequentesTagus
                  GROUP BY nick_condutor, data),

                  media AS(
                  SELECT AVG(custo) AS media, nick_condutor as condutor
                  FROM maiorQuantia
                  GROUP BY nick_condutor
                  )

                  SELECT condutor, media
                  FROM media M
                  WHERE media = (
                                  SELECT MAX(M2.media) AS maximo
                                  FROM media M2);";

                  $result = pg_query($sql) or die(pg_last_error());
                  session_start();
                  while ($row_array = pg_fetch_assoc($result)){
		              echo("<tr>");
		              echo("<td>{$row_array['condutor']}</td>");
		              echo("<td>{$row_array['media']}</td>");
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

