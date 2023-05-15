function load(){
  apireloj();
}

setInterval(apireloj, 1000);

function toggleDarkMode() {
  var style = $('#style');
  if (style.attr('href').match('css/styles.css')) {
    style.attr('href', 'css/stylesdark.css');
  } else {
    style.attr('href', 'css/styles.css');
  }
}

$(document).ready(function() {
  $('#toggle-theme').click(function() {
    toggleDarkMode();
  });
});

//FILTRAR POR SKU
$(function(){
    $("#btnBuscar").on('click', function(){
        let valor = $("#buscar").val().toLowerCase();
        $("table tbody tr").filter(function(){
            $(this).toggle($(this).find('td:eq(1)').text().toLowerCase().indexOf(valor) > -1);
            //.find('td:eq(1)') FILTRAR POR NUMERO DE COLUMNA (SKU)
        })
    })
})

var botonesEliminar = document.querySelectorAll("table #eliminar");

botonesEliminar.forEach(function(boton) {
  boton.addEventListener("click", function() {
    var fila = boton.parentNode.parentNode;
    fila.parentNode.removeChild(fila);
  });
});


$("#eliminar").on("click",function(){
    $(".descuento").slideUp();
})





function apireloj(){
    fetch('http://worldtimeapi.org/api/ip')
    .then(response => response.json())
    .then(data => {
      const datetime = new Date(data.datetime);
      const hour = datetime.getHours();
      const minute = datetime.getMinutes();
      const second = datetime.getSeconds();
      const StringHora = `${hour < 10 ? "0" + hour : hour}:${minute < 10 ? "0" + minute : minute}:${second < 10 ? "0" + second : second}`
      let hora = document.getElementById("reloj");
      hora.innerText = StringHora;
    })
}

