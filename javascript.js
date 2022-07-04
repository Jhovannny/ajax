$(document).ready(function () {
    $("#leer").click(function (e) { 
        e.preventDefault();
    $.get("archivo.txt", 
        function (data, textStatus, jqXHR) {
            console.log(data);
       
       console.log(textStatus);
       console.log(jqXHR);
       
        }   );
    });
$('#empleados').click(function(e){
e.preventDefault();
$.get("empleados.json", function(data){
console.log(data);
$('#empleados').html(`
Nombre: ${data.nombre} <br>
Puesto: ${data.puesto} <br>
Edad: ${data.edad} <br>
`
);
$('leerArray').click(function(e){
e.preventDefault();
$.get("empleados.json",function(data){
console.data(data);
$.each(data, function (index, item) { 
    $('#leerArraylista').html($('#leerArraylista').html()+`
    <li> ${item.nombre} -- ${item.puesto} </li>
    `);
});
});
});
});
});
});
