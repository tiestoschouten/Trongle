class Player {

  constructor(ctx, gridSize, color, speed, x, y) {
    this.ctx = ctx;
    this.gridSize = gridSize;
    this.color = color;
    this.speed = speed;

    this.position; // Coordinate class // = new Coordinate(x, y);
    this.trail; //Trail class

    this.directionAngle = 0;
    this.nextDirection = 0;
  }

  move() {

  }

  draw() {

  }

  turn() {
    if(this.nextDirection !== 0) this.directionAngle += (45 * this.nextDirection);
  }

  // Save player direction for next trongle turn
  saveinput(direction) {
    if(this.nextDirection + direction >= -2 && this.nextDirection + direction <= 2) this.nextDirection += direction;
  }

}
