

tmonth=new Array("1","2","3","4","5","6","7","8","9","10","11","12");

                        function GetClock(){
                        date = new Date();
                        nday   = date.getDate();
                        nmonth = date.getMonth();
                        year = date.getFullYear();
                        nhour  = date.getHours();
                        nmin   = date.getMinutes();
                        if(nmin <= 9){nmin="0"+nmin}



document.getElementById('vol1').style.visibility="hidden";

document.getElementById('temperatura1').style.visibility="hidden";

                        document.getElementById('horas').innerHTML=" "+nhour+":"+nmin+" ";
                        document.getElementById('data').innerHTML=" "+nday+"/"+tmonth[nmonth]+"/"+year+" ";

                        setTimeout("GetClock()", 1000);
                        
                        
                     if(sessvars.ajuda){
                        
                        	document.getElementById('ajuda1').style.visibility="visible";
                        document.getElementById('ajuda').innerHTML = sessvars.ajuda_msg.toString();
                        
                        }


                         if(sessvars.musica){
												document.getElementById('vol1').style.visibility="visible";

				          var derp1 = document.getElementById("musica_a_tocar");
				document.getElementById('volume').innerHTML = sessvars.volume.toString();
document.getElementById('nome_musica').innerHTML = sessvars.nome_musica.toString();
				          derp1.src = "../../Imagens/Radios/speaker.png";}

                        
                         if(sessvars.arCondicionado ){
												document.getElementById('temperatura1').style.visibility="visible";

				       
				document.getElementById('temperatura_ac').innerHTML = sessvars.temperatura.toString();
				     				               
				     				                 
				
				          var derp4 = document.getElementById("ar_condicionado");
				
				          derp4.src = "../../Imagens/ar_condicionado.png";
				     				               
				     				               
				     				               }
				          				          if(sessvars.contacto){

				          var derp2 = document.getElementById("chamadaImagem");
				
				          derp2.src = "../../Imagens/Contactos/contacto.png";}

				          
				          if(sessvars.mae){

				          var derp2 = document.getElementById("chamadaImagem");
				
				          derp2.src = "../../Imagens/Contactos/mae.png";}
				          
				          if(sessvars.andreF){

				          var derp2 = document.getElementById("chamadaImagem");
				
				          derp2.src = "../../Imagens/Contactos/andreF.png";}
				          
				          				          if(sessvars.diogoL){

				          var derp2 = document.getElementById("chamadaImagem");
				
				          derp2.src = "../../Imagens/Contactos/diogoL.png";}
				          
				          				          if(sessvars.francisco){

				          var derp2 = document.getElementById("chamadaImagem");
				
				          derp2.src = "../../Imagens/Contactos/francisco.png";}
				          				          if(sessvars.joanaD){

				          var derp2 = document.getElementById("chamadaImagem");
				
				          derp2.src = "../../Imagens/Contactos/joanaD.png";}
				          				          if(sessvars.mariaP){

				          var derp2 = document.getElementById("chamadaImagem");
				
				          derp2.src = "../../Imagens/Contactos/mariaP.png";}
				          
				          				          if(sessvars.nelson){

				          var derp2 = document.getElementById("chamadaImagem");
				
				          derp2.src = "../../Imagens/Contactos/nelson.png";}
				          
				          				          if(sessvars.paulo){

				          var derp2 = document.getElementById("chamadaImagem");
				
				          derp2.src = "../../Imagens/Contactos/paulo.png";}







				          
				          				          if(sessvars.marcarNumero){

				          var derp2 = document.getElementById("chamadaImagem");
				
				          derp2.src = "../../Imagens/marcarNumero.png";}

				          
					          if(sessvars.tempoCasa){
							sessvars.tempoOutraCidade = 0;
				          var derp3 = document.getElementById("tempoImagem");
				
				          derp3.src = "../../Imagens/tempoCasa.png";}
				          
				          if(sessvars.tempoOutraCidade){
							sessvars.tempoCasa = 0;
				          var derp3 = document.getElementById("tempoImagem");
				
				          derp3.src = "../../Imagens/tempoOutraCidade.png";}
				          
if(!sessvars.ajuda){
				          				          if(sessvars.consumoCombustivel){
				
				          var derp4 = document.getElementById("consumo_combustivel");
				
				          derp4.src = "../../Imagens/combustivel.png";}
				          
				          				          				          if(sessvars.nivelOleo){
				
				          var derp4 = document.getElementById("nivel_oleo");
				
				          derp4.src = "../../Imagens/oleo.png";}
				          
				          				          				          if(sessvars.contaKm){
				
				          var derp4 = document.getElementById("conta_quilometros");
				
				          derp4.src = "../../Imagens/contador.png";}
				          
				          				          				          if(sessvars.temperaturaMotor){
				
				          var derp4 = document.getElementById("temperatura_motor");
				
				          derp4.src = "../../Imagens/temperatura.png";}
				          
				          				          				          if(sessvars.pressaoPneus){
				
				          var derp4 = document.getElementById("pressao_pneus");
				
				          derp4.src = "../../Imagens/pneus.png";}


}

				          
				        
				          
				
				          
				          				          				          if(sessvars.angulos){
				
				          var derp4 = document.getElementById("espelho_esq");
				
				          derp4.src = "../../Imagens/lateral_esq.png";
				          var derp5 = document.getElementById("espelho_dir");
				
				          derp5.src = "../../Imagens/lateral_dir.png";}


				          				          if(sessvars.destino){
				
				          var derp4 = document.getElementById("gps");
				
				          derp4.src = "../../Imagens/seta_frente.png";}
						  
				          
				          
                           if(sessvars.falarDestino){
				
				          var derp1 = document.getElementById("falar_destino");
				
				          derp1.src = "../../Imagens/a_ouvir.png";
				        
				          }
				          
				          				  				           				                                                            if(sessvars.falarNumero){
				
				          var derp1 = document.getElementById("falar_numero");
				
				          derp1.src = "../../Imagens/a_ouvir.png";
				          
				          }
				          
                       					    if(sessvars.falarCidade){

				          var derp1 = document.getElementById("falar_cidade");
				          derp1.src = "../../Imagens/a_ouvir.png";
				      
				         }
				         				      
					      if(sessvars.arCondicionado ){
				
				
				          var derp1 = document.getElementById("ligar");
				
				          derp1.src = "../../Imagens/Climatizacao/Ligar-desligar.png";}
				          
				          if(!sessvars.arCondicionado ){
				
				
				          var derp1 = document.getElementById("ligar");
				
				          derp1.src = "../../Imagens/Climatizacao/desligado.png";}

	

if(sessvars.consumoCombustivel){
				
				
				          var derp1 = document.getElementById("combustivel_icon");
				
				          derp1.src = "../../Imagens/Outros/fuel.png";}
				          
				           if(!sessvars.consumoCombustivel){
				
				
				          var derp1 = document.getElementById("combustivel_icon");
				
				          derp1.src = "../../Imagens/Outros/fuel_off.png";}
				          
				          	      if(sessvars.temperaturaMotor ){
				
				
				          var derp1 = document.getElementById("temperatura_icon");
				
				          derp1.src = "../../Imagens/Outros/termometro.png";}
				          
				           if(!sessvars.temperaturaMotor ){
				
				
				          var derp1 = document.getElementById("temperatura_icon");
				
				          derp1.src = "../../Imagens/Outros/termometro_off.png";}
				          
				           	      if(sessvars.contaKm ){
				
				
				          var derp1 = document.getElementById("quilometros_icon");
				
				          derp1.src = "../../Imagens/Outros/contakm.png";}
				          
				           if(!sessvars.contaKm ){
				
				
				          var derp1 = document.getElementById("quilometros_icon");
				
				          derp1.src = "../../Imagens/Outros/contakm_off.png";}

		           	      if(sessvars.nivelOleo ){
				
				
				          var derp1 = document.getElementById("oleo_icon");
				
				          derp1.src = "../../Imagens/Outros/oleo.png";}
				          
				           if(!sessvars.nivelOleo ){
				
				
				          var derp1 = document.getElementById("oleo_icon");
				
				          derp1.src = "../../Imagens/Outros/oleo_off.png";}
				          
				          
   	      if(sessvars.pressaoPneus ){
				
				
				          var derp1 = document.getElementById("pressao_icon");
				
				          derp1.src = "../../Imagens/Outros/pneu.png";}
				          
				           if(!sessvars.pressaoPneus ){
				
				
				          var derp1 = document.getElementById("pressao_icon");
				
				          derp1.src = "../../Imagens/Outros/pneu_off.png";} 						   				      
		
				          

}


						  
						  				    
                        window.onload=GetClock;
