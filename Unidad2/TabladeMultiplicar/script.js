function multiplicar(){
    let num1 = document.getElementById("numero1").value;
    let num2 = document.getElementById("numero2").value;
    
    
    var body = document.getElementsByTagName("body")[0];

    var tabla = document.createElement("table");
    var tblBody = document.createElement("tbody");

    for(var i = 0; i<num2; i++){
        var hilera = document.createElement("tr");
        
            for(var j = 0; j<5; j++){
                var celda = document.createElement("td");
                if (j==0){
                let textonumero = document.createTextNode(num1);
                celda.appendChild(textonumero);
                hilera.appendChild(celda);
                }
                if (j==1){
                    let textonumero = document.createTextNode("X");
                    celda.appendChild(textonumero);
                    hilera.appendChild(celda);
                }
                if (j==2){
                    let textonumero = document.createTextNode(i+1);
                    celda.appendChild(textonumero);
                    hilera.appendChild(celda);
                }
                if (j==3){
                    let textonumero = document.createTextNode("=");
                    celda.appendChild(textonumero);
                    hilera.appendChild(celda);
                }
                if (j==4){
                    let num3 = num1*(i+1);
                    let textonumero = document.createTextNode(num3);
                    celda.appendChild(textonumero);
                    hilera.appendChild(celda);
                }
            }
            hilera.appendChild(celda);
            tblBody.appendChild(hilera);
            
        }  
        
    
    tabla.appendChild(tblBody);
    body.appendChild(tabla);
    tabla.setAttribute("border", "2");
    
    }
