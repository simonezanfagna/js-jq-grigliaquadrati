function numeriRandom(min, max) {
  numeroRandom = Math.floor(Math.random() * (max - min + 1) ) + min;
  return numeroRandom;
}

for (var i = 0; i < 64; i++) {
  $('.container').append('<div class="quadrato"></div>');
}

var lista_green = [];
var lista_red = [];

while (lista_green.length < 49) {
  var numero_green = numeriRandom(0,63);
  if (!lista_green.includes(numero_green)) {
    lista_green.push(numero_green);
  }
}

console.log(lista_green);

while (lista_red.length < 15) {
  var numero_red = numeriRandom(0,63);

  if (!lista_red.includes(numero_red) && !lista_green.includes(numero_red)) {
    lista_red.push(numero_red);
  }
}

console.log(lista_red);

$('.container .quadrato').click(function () {
  var indice = $(this).index();
  if (lista_green.includes(indice)) {
    $(this).addClass('color-green');
  }
  else {
    $(this).addClass('color-red');
  }

})
