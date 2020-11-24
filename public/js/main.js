$(document).ready(function(){

  const socket = io();


let coords = [{x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}];
//posición mouseX mouseY
  $(document).on('mousemove', function(e) {
    let posX = (e.clientX * 100)/ window.innerWidth;
    let posY = (e.clientY * 100)/ window.innerHeight;
    coords[0].x = posX;
    coords[0].y = posY;
    socket.emit('coords',coords);


  });

  $(document).on('touchmove', function(e) {
    for (let i = 0; i< e.targetTouches.length; i++){
      let posX = (e.targetTouches[i].clientX * 100)/ window.innerWidth;
      let posY = (e.targetTouches[i].clientY * 100)/ window.innerHeight;
      coords[i].x = posX;
      coords[i].y = posY;
    }
socket.emit('coords',coords);

  });

});
