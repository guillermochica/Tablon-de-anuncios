//Cliente en node para el servicio de tablón de anuncios
/*Modo de empleo :
Para publicar un anuncio escribe en la consola node clienteNode post categoria nombre anuncio
donde categoría puede ser 'trabajo', 'vender' o 'transporte'
En el cliente en node, el nombre debe constar solo de una palabra

Para ver los anuncios publicados escribe node clienteNode get categoria */

var rest = require('restler'); //Cargo el módulo require que me permitirá hacer peticiones http (get, post...)
var url = 'http://127.0.0.1:8080/'; //CAMBIAR SI CAMBIAMOS DE URL
var accion = process.argv[2]?process.argv[2]:''; //La tercera palabra introducida por la terminal será la acción (Post o Get)
var categoria =  process.argv[3]?process.argv[3]:''; // La cuarta palabra introducida por la terminal será la categoría (trabajo, vender o transporte)
var nombre = process.argv[4]?process.argv[4]:''; //La quinta palabra introducida por la terminal será el nombre del anunciante (una sola palabra)
var arrayAnuncio = process.argv.slice(5); //El resto de palabras introducidas por la terminal serán el texto del anuncio
var anuncio = toString(arrayAnuncio); //Convertimos en un solo string el array que contiene todas las palabras del anuncio

if (accion == 'post') { //Si la acción demandada es publicar un anuncio
  rest.post(url + 'post/' + categoria + '/' + nombre + '/' + anuncio ).on('complete', function(data) {
    console.log(data);
  });
}

if (accion == 'get') { //Si la acción demandada es ver los anuncios de una categoría
  rest.get(url + 'node/' + categoria).on('complete', function(data) {
    console.log(data);
  });
}

//Función para pasar de array de strings a un solo string
function toString(array) {
  var string = '';
  for (i = 0 ; i<array.length ; i++) {
    string = string + array[i] + ' ';
  }
  return string;
}
