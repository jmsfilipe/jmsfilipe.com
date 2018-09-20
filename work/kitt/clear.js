function clearVars(){

sessvars.musica=0;
sessvars.angulos=0;
}

function clearTelefone(){

sessvars.mae=0;
sessvars.andreF=0;
sessvars.diogoL=0;
sessvars.francisco=0;
sessvars.joanaD=0;
sessvars.mariaP=0;
sessvars.nelson=0;
sessvars.paulo=0;
sessvars.contacto=0;
}

function repoeTopo(){
document.getElementById('nivel_o').style.visibility="visible";
document.getElementById('combustivel').style.visibility="visible";
document.getElementById('temperatura_m').style.visibility="visible";
document.getElementById('pressao_p').style.visibility="visible";
document.getElementById('conta_km').style.visibility="visible";

}


function ajuda(){

document.getElementById('nivel_o').style.visibility="hidden";
document.getElementById('combustivel').style.visibility="hidden";
document.getElementById('temperatura_m').style.visibility="hidden";
document.getElementById('pressao_p').style.visibility="hidden";
document.getElementById('conta_km').style.visibility="hidden";


}

function voltar(){

sessvars.n_back++;
sessvars.n_clicks++;

history.go(-1);
}

