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
	  session_start();
	  $nick_organizador = $_SESSION['nick_organizador'];
	  $data_hora = $_SESSION['data_hora'];
	  $nick = $_SESSION['nome'];
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
          "background:#009ee3;width:500px;height:425px;border-radius:23px;font-family:Arial;">
          <br />
            <b style="font-family:Arial; font-size:40px;color:white;">Criar
            Boleia</b><br />
            <br />
            <br />
            <br />
            <center>
              <form method="get" action="checkEnterDriver2.php">
                <table cellpadding="1" width="450px" height="200px">
                  <tr>
                    <td colspan="1"><center>	<b>Carro:</b> <select name="matricula">
                      <?php 
                         $sql = "SELECT DISTINCT matricula, marca, modelo FROM Viatura WHERE nick = '$nick' ";

                         $result = pg_query($sql) or die(pg_last_error());

                          while ($row_array = pg_fetch_assoc($result)){
                     	 	$matricula = $row_array['matricula'];
                          	echo ("<option value='".$row_array['matricula']."'>" . $row_array['marca'] . " " . $row_array['modelo'] . " ".  $row_array['matricula'] ."</option>");
                           }
         					$_SESSION['matricula'] = $matricula;
                     ?>
                    </select></center>	</td>
                  </tr>

                  <tr>
                    <td colspan="1">
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
</body>
</html>
