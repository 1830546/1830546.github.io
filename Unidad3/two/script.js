let paisSeleccionado = document.getElementById("paises");
let estadoSeleccionado = document.getElementById("estados");
let municipioSeleccionado = document.getElementById("municipios");
paisSeleccionado.addEventListener("change", function() {
    eliminarOpciones(estadoSeleccionado)
    eliminarOpciones(municipioSeleccionado)
    cargarvalor1(estadoSeleccionado, paisSeleccionado, 'estados', 'idpais')
})
estadoSeleccionado.addEventListener("change", function() {
    eliminarOpciones(municipioSeleccionado)
    cargarvalor1(municipioSeleccionado, estadoSeleccionado, 'municipios', 'idestado')
})
function cargarvalor1(selector, selectorAnterior, tabla, idBuscar) {
    let xhr = new XMLHttpRequest();
    let valor1 = selectorAnterior.value;

    selector.disabled = false;
    xhr.open('GET', 'servidor.php?valor1=' + valor1 + '&tabla=' + tabla + '&idBuscar=' + idBuscar, true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            let json = JSON.parse(xhr.responseText);
            
            for (let key in json) {
                let option = document.createElement('option');
                option.text = key
                option.setAttribute('value', json[key])
                selector.add(option);
            }
        } 
    }
    xhr.send();
}
function eliminarOpciones(selector) {
    for (let i = selector.options.length - 1; i >= 0; i--) {
        selector.remove(i);
    }
}