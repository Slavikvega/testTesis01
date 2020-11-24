const express = require('express');
const app = express();
const path = require('path');
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const shortid = require('shortid');
const PORT = process.env.PORT || 5500;


 app.use(express.static(path.join(__dirname, 'public')));
  app.set('views', path.join(__dirname, 'views'));
  app.set('view engine', 'ejs');
  app.get('/', (req, res) => res.render('pages/index'));
  //app.listen(PORT, () => console.log(`Listening on ${ PORT }`));

  http.listen(PORT, () => {
  console.log('go to htto//localHost:5500');
})

// agregar rutas
  app.get('/', (req, res) => {
  res.send('<h1>Hello world</h1>');
});
app.get('/test1', (req, res) => {
res.send('<h1> este es un test</h1>');
});



io.on('connection', (socket) => {
  socket.id = shortid.generate();
  socket.on('coords', (msg) => {
    for( let i = 0; i < msg.length; i++){
      if(msg[i].x  !== 0 || msg[i].y  !== 0 ){
        let mensaje = socket.id + ',' + [i] + ',' + msg[i].x + ',' + msg[i].y;
        console.log(mensaje);
        socket.emit('aTouchDesigner', mensaje);
      }else{

      }
    }
  });
})
