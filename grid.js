class Grid {

  constructor(gridSize, ctx, color) {
    this.gridSize = gridSize;
    this.ctx = ctx;
    this.color = color;
  }

  draw() {
    let x, y;
    x = this.ctx.canvas.width / this.gridSize;
    y = this.ctx.canvas.height / this.gridSize;

    this.ctx.strokeStyle = this.color;
    this.ctx.lineWidth = 1;
    for(let i = 0; i < x; i++) {
      for(let c = 0; c < y; c++) {
        ctx.beginPath();
        ctx.moveTo(i*this.gridSize, c*this.gridSize);
        ctx.lineTo((i+1)*this.gridSize, (c+1)*this.gridSize);
        ctx.moveTo((i+1)*this.gridSize, c*this.gridSize);
        ctx.lineTo(i*this.gridSize, (c+1)*this.gridSize);

        ctx.stroke();
        ctx.closePath();

      }
    }
    for(let i = 0; i < x; i++) {
      ctx.beginPath();
      ctx.moveTo(i*this.gridSize, 0);
      ctx.lineTo(i*this.gridSize, y*this.gridSize);
      ctx.stroke();
      ctx.closePath();
    }
    for(let i = 0; i < y; i++) {
      ctx.beginPath();
      ctx.moveTo(0, i*this.gridSize);
      ctx.lineTo(x*this.gridSize, i*this.gridSize);
      ctx.stroke();
      ctx.closePath();
    }


// |  |  |  |

  }

}
