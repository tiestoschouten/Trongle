class Trail {

  constructor(ctx, color, width, x, y) {
    this.ctx = ctx;
    this.coordinates = [];

    this.color = color;
    this.width = width;

    this.addCoord(x, y);
    this.addCoord(x, y);
  }

  addCoord(x, y) {
    this.coordinates.push(new Coordinate(x, y));
  }

  updateLastCoord(coord) {
    this.coordFollow = this.coordinates[this.coordinates.length-1].setCoord(coord);
  }

  draw() {
    this.ctx.beginPath();
    this.ctx.lineWidth = this.width;
    this.ctx.strokeStyle = this.color;

    this.ctx.lineJoin = "miter";
    this.ctx.miterLimit = 1;

    let start = this.coordinates[0].get();
    this.ctx.moveTo(start.x, start.y);

    for(let i = 1; i < this.coordinates.length; i++) {
      let coords = this.coordinates[i].get();

      this.ctx.lineTo(coords.x, coords.y)
    }

    this.ctx.stroke();
    this.ctx.closePath();
  }

  changeColor(color) {
    this.color = color;
  }

  reset() {
    this.coordinates.splice(0, this.coordinates.length);
  }

}
