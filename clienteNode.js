//Cliente node

var rest = require('restler');
var url = 'http://127.0.0.1:8080/'; //CAMBIAR SI CAMBIAMOS DE URL
var accion = process.argv[2]?process.argv[2]:'';
var categoria =  process.argv[3]?process.argv[3]:'';
var nombre = process.argv[4]?process.argv[4]:'';
var arrayAnuncio = process.argv.slice(5);
var anuncio = toString(arrayAnuncio);

if (accion == 'post') {
  rest.post(url + 'post/' + categoria + '/' + nombre + '/' + anuncio ).on('complete', function(data) {
    console.log(data);
  });
}

if (accion == 'get') {
  rest.get(url + 'node/' + categoria).on('complete', function(data) {
    console.log(data);
  });
}

function toString(array) {
  var string = '';
  for (i = 0 ; i<array.length ; i++) {
    string = string + array[i] + ' ';
  }
  return string;
}
