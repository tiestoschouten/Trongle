class Coordinate {

  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  set(x, y) {
    this.x = x;
    this.y = y;
  }

  setCoord(coord) {
    this.x = coord.x;
    this.y = coord.y;
  }

  get() {
    let coords = {x: this.x, y: this.y};
    return coords;
  }

}
