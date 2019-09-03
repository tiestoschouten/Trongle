class Player {

  constructor(ctx, gridSize, color, speed, speedReduction, x, y) {
    this.ctx = ctx;
    this.gridSize = gridSize;
    this.color = color;
    this.speed = speed;
    this.speedReduction = speedReduction;

    this.position = new Coordinate(x, y);
    this.trail = new Trail(this.ctx, this.color, 2, x, y);

    this.directionAngle = 0;
    this.nextDirection = 0;

    this.lastCell = new Coordinate(x, y);
  }

  die() {
    playersAlive = false;
  }

  move() {
    this.position.x += (this.speed * Math.cos(this.directionAngle * Math.PI / 180));
    this.position.y += (this.speed * Math.sin(this.directionAngle * Math.PI / 180));

    this.checkGridPoint();
    this.trail.updateLastCoord(this.position);
  }

  checkGridPoint() {
    if(this.position.x % this.gridSize == 0 && this.position.y % this.gridSize == 0) {
      if(this.position.x == this.lastCell.x && this.position.y == this.lastCell.y) {
        this.trail.updateLastCoord(this.position);
        this.lastCell = new Coordinate(this.position.x, this.position.y);
        this.turn();
      }
    }
    else {
      let closeX = this.position.x, closeY = this.position.y;
      let distanceX, distanceY;
      // find closest X point
      if(this.position.x % this.gridSize < this.gridSize/2) {
        closeX = this.position.x - (this.position.x % this.gridSize);
      }
      else if(this.position.x % this.gridSize > this.gridSize/2) {
        closeX = this.position.x - (this.position.x % this.gridSize) + this.gridSize;
      }
      // find closest Y point
      if(this.position.y % this.gridSize < this.gridSize/2) {
        closeY = this.position.y - (this.position.y % this.gridSize);
      }
      else if(this.position.y % this.gridSize > this.gridSize/2) {
        closeY = this.position.y - (this.position.y % this.gridSize) + this.gridSize;
      }

      distanceX = closeX - this.position.x;
      distanceY = closeY - this.position.y;

      if(distanceX < 0) distanceX = -distanceX;
      if(distanceY < 0) distanceY = -distanceY;


      if(closeX !== this.lastCell.x || closeY !== this.lastCell.y) {
        if(distanceX < 2 && distanceY < 2) {
          this.position.x = closeX;
          this.position.y = closeY;
          this.trail.updateLastCoord(this.position);
          this.lastCell = new Coordinate(this.position.x, this.position.y);
          this.turn();
        }
      }
    }
  }

  turn() {
    if(this.nextDirection !== 0) {
      this.trail.addCoord(this.position.x, this.position.y);
      this.directionAngle += (45 * this.nextDirection);
      this.nextDirection = 0;
    }
  }

  draw() {
    this.trail.draw();
  }

  // Save player direction for next trongle turn
  saveinput(direction) {
    if(this.nextDirection + direction >= -2 && this.nextDirection + direction <= 2) this.nextDirection += direction;
  }

}
