let numeroProducto = 1;
let subtotal = 0;
let iva = 0;

function iniciar(){

    

    let nomProdu = document.getElementById("productos");
    let seleccionado = nomProdu.options[nomProdu.selectedIndex].text;
    let precio = document.getElementById("precio").value; 
    let cantidad = document.getElementById("cantidad").value;

    
    let tbody = document.getElementById("lista");


    let fila = document.createElement("tr");
    let numero = document.createElement("th");
    let producto = document.createElement("th");
    let precioUnitario = document.createElement("th");
    let unidades = document.createElement("th");
    let monto = document.createElement("th");

    producto.innerText=seleccionado;
    numero.innerText=numeroProducto;
 
    numeroProducto++;
    precioUnitario.innerText=precio;
    unidades.innerText=cantidad;
    monto.innerText=parseFloat(precio*cantidad);

    tbody.appendChild(fila);
    tbody.appendChild(numero);
    tbody.appendChild(producto);
    tbody.appendChild(precioUnitario);
    tbody.appendChild(unidades);
    tbody.appendChild(monto);

    subtotal += parseFloat(precio*cantidad);
    iva += parseFloat((subtotal)*0.16);
    let montosubtotal = document.getElementById("montosubtotal");
    let montoiva = document.getElementById("montoiva");
    let montototal = document.getElementById("montototal");

    montosubtotal.innerText=subtotal.toFixed(2);
    montoiva.innerText=iva.toFixed(2);
    montototal.innerText=parseFloat(subtotal+iva).toFixed(2);
    
}
