/*window.addEventListener('load', () => {
  console.log("ready!");
  //alert("ready");
});*/

//quando mudar o range coloca o valor no input
document.getElementById('muda_cores').oninput = function () {
  campo_valor = event.target;

  if (campo_valor.type == "range") {
    //se mexeu no range atualiza no range
    document.getElementById(campo_valor.name + "_valor").value = campo_valor.value;

  } else {
    //se mexeu no text atualiza aqui
    document.getElementById("range_" + campo_valor.name).value = campo_valor.value;
  }

  //pega as cores finais dos campos
  ciano_final = document.getElementById('ciano_valor').value;
  magenta_final = document.getElementById('magenta_valor').value;
  yellow_final = document.getElementById('yellow_valor').value;
  black_final = document.getElementById('black_valor').value;

  //poem a cor no input e guarda variavel
  bg = document.getElementById("cmykcss").value = "cmyk(" + ciano_final + "%, " + magenta_final + "%, " + yellow_final + "%, " + black_final + "%)"

  //muda a cor de fundo da div baseado na variavel
  const divcor = document.querySelector("#exibir_cor");
  divcor.setAttribute('style', "width:300px;height:300px;background: " + bg);

  console.log(bg)

  //mostra tipo do campo + valor do campo + id do campo
  //console.log(campo_valor.type + " " + campo_valor.value + " " + campo_valor.id);
}