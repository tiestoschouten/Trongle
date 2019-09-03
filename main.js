const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const gridSize = 50;
const speedReduction = 35;
const speed = gridSize / speedReduction;
const input = {player1: {left: 65, right: 68}, player2: {left: 37, right: 39}};

var playersAlive = true;

let grid = new Grid(gridSize, ctx, 'blue');
var lines = [];

var player1 = new Player(ctx, gridSize, 'red', speed, speedReduction, 200, 200);
// var player2 = new Player(ctx, gridSize, , speed, 600, 600);

Animate();

function Animate() {
  if(playersAlive) {
    requestAnimationFrame(Animate);
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    lines.splice(0, lines.length);

    grid.draw();



    player1.move();
    // player2.move();

    player1.draw();
    // player2.draw();
  }
}


document.addEventListener('keyup', CheckControls);

function CheckControls(e) {
  switch(e.keyCode) {
    case input.player1.left:
      player1.saveinput(-1); break;
    case input.player1.right:
      player1.saveinput(1);  break;
    // case input.player2.left:
    //   player2.saveinput(-1); break;
    // case input.player2.right:
    //   player2.saveinput(1);  break;
  }
}
