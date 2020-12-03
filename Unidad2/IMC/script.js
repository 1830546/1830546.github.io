function calculaIMC(){
    let vcategoria=document.getElementById('categoria');
    let vcolor=document.getElementById('color');
    let vPeso= document.getElementById('peso').value;
    let vAltura=document.getElementById('altura').value;

    let resultado=vPeso/(vAltura*vAltura);


    let vIMC= document.getElementById('imc');

    vIMC.innerText=resultado;

    vIMC.innerText=resultado;

    

    if (resultado <= "18.4"){
       vcategoria.innerText="Bajo";  
       vcategoria.style.backgroundColor = "#0182FA";
    }

    if (resultado >= "18.5" && resultado <= "24.9") {
       vcategoria.innerText="Normal";    
       vcategoria.style.backgroundColor = "#0FCA07";
    }



    if (resultado >="25.0" && resultado <="29.9") {
        vcategoria.innerText="Sobrepeso";  
        vcategoria.style.backgroundColor = "#F5D803";
    }

    
    if (resultado >="30.0") {
        vcategoria.innerText="Obeso";   
        vcategoria.style.backgroundColor = "#F50F03";
    }
  
   

    /*vIMC

   vIMC.setAttribute("class","titulo-principal");
    vIMC.classList.add();
    vIMG.className=*/

}