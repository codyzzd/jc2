window.addEventListener('load', () => {
  console.log("ready!");
  //alert("ready");
});

//guardando a cor C em variavel
var color_ciano = document.getElementById('ciano');
//guardando a cor M em variavel
var color_magenta = document.getElementById('magenta');
//guardando a cor Y em variavel
var color_yellow = document.getElementById('yellow');
//guardando a cor B em variavel
var color_black = document.getElementById('black');

//quando mudar o range coloca o valor no input
document.getElementById('muda_cores').onchange = function () {
  campo_valor = event.target;

  if (campo_valor.type == "range") {
    //se mexeu no range atualiza no range
    document.getElementById(campo_valor.name + "_valor").value = campo_valor.value;
  } else {
    //se mexeu no text atualiza aqui
    document.getElementById("range_" + campo_valor.name).value = campo_valor.value;
  }
  //mostra tipo do campo + valor do campo + id do campo
  console.log(campo_valor.type + " " + campo_valor.value + " " + campo_valor.id);

}