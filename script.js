
var dragSound = document.getElementById('dragSound');
// Preloads audio file
document.addEventListener('DOMContentLoaded', function() {
  dragSound.load();
});

function onMouseDown(event) {
  dragSound.currentTime = 0;
  dragSound.play();
}

function onMouseDrag(event) {
  var baseSize = 4;
  var size = baseSize + event.delta.length;
  
  var path = new Path.Rectangle({
    center: event.point,
    size: [size, size]
  });
  
  var hue = (event.point.y / view.size.height) * 300;

  path.fillColor = {
    hue: hue,
    saturation: 0.7,
    brightness: 0.9
  }
}

function onMouseUp(event) {
  dragSound.pause();
  dragSound.currentTime = 0;
}
