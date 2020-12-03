function Multiplicar(){
let tab=document.getElementById("tabla").value;
let res=document.getElementById("resultados").value;

var body =document.getElementsByTagName("body")[0];
var tabla=document.createElement("table");
var tabla_body=document.createElement("table_body");

for(var contador =0; res;contador++){

    document.write("aqui");

    var trr=document.createElement("tr");


    for( var columna=0; columna<5; columna++){
        var celda =document.createElement("td");
        if(columna==0){
            let multiplicado=document.createTextNode(tab);
            celda.appendChild(multiplicado);
            trr.appendChild(celda);
        }

        if(columna==1){
            let multiplicado=document.createTextNode("X");
            celda.appendChild(multiplicado);
            trr.appendChild(celda);
        }
        if(columna==2){
            let multiplicado=document.createTextNode(contador+1);
            celda.appendChild(multiplicado);
            trr.appendChild(celda);
        }
        if(columna==3){
            let multiplicado=document.createTextNode("=");
            celda.appendChild(multiplicado);
            trr.appendChild(celda);
        }
        if(columna==4){
            let resultado= tab*(contador+1);
            let multiplicado=document.createTextNode(resultado);
            celda.appendChild(multiplicado);
            trr.appendChild(celda);
        }   

    }

    trr.appendChild(celda);
    tabla_body.appendChild(trr);


}

tabla.appendChild(tabla_body);
body.appendChild(tabla);
tabla.setAttribute("border","2");






}