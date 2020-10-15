var canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var c = canvas.getContext("2d")
c.fillStyle = "rgba(255, 0, 0, 0.5)"
c.fillRect(100, 100, 100, 100);
c.fillStyle = "rgba(0, 0, 255, 0.5)"
c.fillRect(250, 100, 100, 100);
c.fillStyle = "rgba(0, 255, 0, 0.5)"
c.fillRect(100, 250, 100, 100);
console.log(canvas);
//line
c.beginPath();
c.moveTo(50, 300);
c.lineTo(300, 100);
c.lineTo(400, 300);
c.strokeStyle = "#fa34a3"
c.stroke();
//ark
//multiple circles
for (var i = 0; i < 20; i++) {
    var x = Math.random() * window.innerWidth; 
    var y = Math.random() * window.innerHeight;                                                                       
c.beginPath();
c.arc(x, y, 30, 0, Math.PI * 2, false);
c.strokeStyle = "blue"
c.stroke();

}