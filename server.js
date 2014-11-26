/*Guillermo Chica Sabariego
Servidor express para una aplicación web de tablón de anuncios
En la página de inicio se pueden publicar anuncios en distintas categorías y acceder a estas categorías
Los anuncios se muestran en su página correspondiente siguiendo un orden LIFO
También tiene un cliente en node*/

var express = require('express'); //Cargo el modulo express, que me permite crear un servidor (necesario instalar express)
var app = express(); //Creo una instancia de express en una variable que me servirá para controlar el servidor
var port = process.argv[2]?process.argv[2]:'8080'; //Puerto por defecto

var fs = require('fs'); //Cargo el módulo para trabajar con ficheros (módulo incluido por defecto en node)
var inicio = fs.readFileSync('inicio.html', 'utf8'); //Cargo el documento html de la página de inicio en una variable para usarla después

//En la posición i estara el nombre y en la i + 1 el anuncio de ese nombre (donde i=numero par positivo)
var trabajo  = new Array; //vector donde guardar los anuncios de trabajo
var transporte = new Array; //vector donde guardar los anuncios de transportes
var vender = new Array; //vector donde guardar los anuncios de ventas

//String que contiene parte del código HTML común a todas las páginas que servirá el servidor
var string = '<html><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8"<title>Tablón de anuncios</title></head><body align="center">';

app.get('/', function (req, res) {
  console.log('Request received');
  res.send(inicio);
});

app.get('/trabajo/', function (req, res) {
  console.log('Request received');
  //Guardo en una variable intermedia el string con el documento HTML a crear
  var data = string + '<h1> Tablón de anuncios de trabajo</h1><p>Todo tipo de anuncios relacionados con el trabajo.  </p><a href="/"> Ir a la página de inicio. </a><p>Anuncios:  </p>';

  for (i = (trabajo.length-1) ; i> 0 ; i=i-2) { //Voy rellenando ese string con los anuncios que hay para mostrar
    data = data + '<p><b>' +trabajo[i-1]+ '</b>: ' + trabajo[i] + '</p>';
  }
  data = data + '</body></html>';

  fs.writeFileSync('trabajo.html', data); //Creo un documento html y lo relleno con el string para cargarlo en el navegador
  var trabajoHTML = fs.readFileSync('trabajo.html', 'utf8');
  res.send(trabajoHTML); //Envio el documento html
});

app.get('/transporte/', function (req, res) {
  console.log('Request received');
  //Guardo en una variable intermedia el string con el documento HTML a crear
  var data = string + '<h1> Tablón de anuncios de transporte</h1><p>Todo tipo de anuncios relacionados con el transporte. Ofrece tu coche para un viaje y comparte gastos.  </p><a href="/"> Ir a la página de inicio. </a><p>Anuncios:  </p>';

  for (i = (transporte.length-1) ; i> 0 ; i=i-2) { //Voy rellenando ese string con los anuncios que hay para mostrar
    data = data + '<p><b>' +transporte[i-1]+ '</b>: ' + transporte[i] + '</p>';
  }
  data = data + '</body></html>';

  fs.writeFileSync('transporte.html', data); //Creo un documento html y lo relleno con el string para cargarlo en el navegador
  var transporteHTML = fs.readFileSync('transporte.html', 'utf8');
  res.send(transporteHTML); //Envio el documento html
});

app.get('/vender/', function (req, res) {
  //Guardo en una variable intermedia el string con el documento HTML a crear
  var data = string + '<h1> Tablón de anuncios de ventas</h1><p>Todo tipo de anuncios relacionados con las ventas de segunda mano.  </p><a href="/"> Ir a la página de inicio. </a><p>Anuncios:  </p>';
  for (i = (vender.length-1) ; i> 0 ; i=i-2) { //Voy rellenando ese string con los anuncios que hay para mostrar
    data = data + '<p><b>' +vender[i-1]+ '</b>: ' + vender[i] + '</p>';
  }
  data = data + '</body></html>';

  fs.writeFileSync('vender.html', data); //Creo un documento html y lo relleno con el string para cargarlo en el navegador
  var venderHTML = fs.readFileSync('vender.html', 'utf8');
  res.send(venderHTML); //Envio el documento html
});

app.post('/post/:categoria/:nombre/:anuncio/', function (req, res) {

  //Guardo los datos publicados del anuncio en el vector que le corresponda

  if(req.params.categoria == 'trabajo') {
    trabajo.push(req.params.nombre, req.params.anuncio);
  }
  if(req.params.categoria == 'transporte') {
    transporte.push(req.params.nombre, req.params.anuncio);
  }
  if(req.params.categoria == 'vender') {
    vender.push(req.params.nombre, req.params.anuncio);
  }

  res.send('Publicado anuncio');
  console.log('Publicado anuncio');
});


app.listen(port);
console.log('Server running at http://127.0.0.1:'+port);
