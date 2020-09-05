const express = require('express');
const app = express();
const path = require('path');
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const PORT = process.env.PORT || 5500;


 app.use(express.static(path.join(__dirname, 'public')));
  app.set('views', path.join(__dirname, 'views'));
  app.set('view engine', 'ejs');
  app.get('/home', (req, res) => res.render('pages/index'));
  //app.listen(PORT, () => console.log(`Listening on ${ PORT }`));

  http.listen(PORT, () => {
  console.log('go to htto//localHost:5500');
})

// agregar rutas
  app.get('/', (req, res) => {
  res.send('<h1>Hello world</h1>');
});

io.on('connection', (socket) => {
  console.log('a user connected');
});
