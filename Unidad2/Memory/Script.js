var variable1 = setInterval(Contador,1000);
let minutos=3;
let segundos=00;
var temporal;
var imagen_temporal;
var esperando= false;
let vidas =4;
let entra=0;

var imagenes=["buo.jpg","buo.jpg","gato.jpg","gato.jpg",
              "mapache.jpg","mapache.jpg","marrano.jpg","marrano.jpg",
              "mono.jpg","mono.jpg","oso.jpg","oso.jpg",
              "osoGrisli.jpg","osoGrisli.jpg","panda.jpg","panda.jpg"
            ];


function Contador(){
    
  if(minutos==0&&segundos==0){
    window.clearInterval(variable1);
    alert("Se acabo el tiempo");
    location.reload();
}else{
    segundos=segundos-1;        
    if(segundos<0){
        minutos--;
        segundos=59;
    }
    document.getElementById("tiempo").innerHTML = "Tiempo: "+minutos+":"+segundos;
    
}
  
}




function shuffle(){
  
  var i,j, temp;

  for(i=imagenes.length-1;i>0;i--){
    j=Math.floor(Math.random()*(i+1));
    temp=imagenes[i];
    imagenes[i]=imagenes[j];
    imagenes[j]=temp;
    
  }
  

}


function borra(img1,img2){
  entra=entra+  1;
  document.getElementById(img1).src="kaisa.jpg";
  document.getElementById(img2).src="kaisa.jpg";
  document.getElementById(img1).removeAttribute("onclick");
  document.getElementById(img2).removeAttribute("onclick");
  if(entra==8){
    alert("Felicidades ha ganado!!");
    location.reload();
  }
  
}

function regresa(img1,img2){

 
 
  document.getElementById(img1).src="Madera.png";
  document.getElementById(img2).src="Madera.png";
 

  
  
  if(vidas==3){
    document.getElementById("vida4").src="kaisa.jpg";
  }
  if(vidas==2){
    document.getElementById("vida3").src="kaisa.jpg";
  }
  if(vidas==1){
    document.getElementById("vida2").src="kaisa.jpg";
  }
  if(vidas==0){
    document.getElementById("vida1").src="kaisa.jpg";
    alert("Ha sido eliminado");
    location.reload();
  }
  vidas=vidas-1;
  
  
  
}


function f14(img,p){
  document.getElementById(img.id).src=imagenes[p];

  
  if (!esperando){
    temporal=imagenes[p];
    imagen_temporal=img.id;
    esperando=true;
    
  }else{
    if(temporal==imagenes[p]){

      setTimeout(function(){borra(img.id,imagen_temporal)},500);
    }else{

      setTimeout(function(){regresa(img.id,imagen_temporal),500});
    }

    esperando=false;
  }
}