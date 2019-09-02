class Coordinate {

  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  set(x, y) {
    this.x = x;
    this.y = y;
  }

  get() {
    let cords = {x: this.x, y: this.y};
    return cords;
  }

}
