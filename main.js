const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const gridSize = 50;
const speed = 2.5;
const input = {player1: {left: 65, right: 68}, player2: {left: 37, right: 39}};

var player1 = new Player(ctx, gridSize, , speed, 200, 200);
var player2 = new Player(ctx, gridSize, , speed, 600, 600);

Animate();

function Animate() {
  requestAnimationFrame(Animate);
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  player1.move();
  player2.move();

  player1.draw();
  player2.draw();
}


window.addEventListener('keyup', CheckControls);

function CheckControls(e) {
  console.log(e.keyCode);
  switch(e.keyCode) {
    case input.player1.left:
      player1.saveinput(-1); break;
    case input.player1.right:
      player1.saveinput(1);  break;
    case input.player2.left:
      player2.saveinput(-1); break;
    case input.player2.right:
      player2.saveinput(1);  break;
  }
}
