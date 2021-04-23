class Canvas {
    constructor(canvas_id) {
      this.canvas = document.getElementById(canvas_id);
      this.context = this.canvas.getContext("2d");
      this.clear_color = 'rgba(0,0,0,255)';
    }
  
    clear() {
      this.context.fillStyle = this.clear_color;
      this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }
  
    putPixel(x, y, color) {
      this.context.fillStyle = 'rgba(' + color[0] + ',' + color[1] + ',' + color[2] + ',' + color[3] + ')';
      this.context.fillRect(x, (this.canvas.height - 1) - y, 1, 1);
    }

    getWidth(){
      return this.canvas.width;
    }

    getHeight(){
      return this.canvas.height;
    }

    MidPointLineAlgorithm(x0, y0, x1, y1, color_0, color_1){
      let dx = Math.abs(x1-x0); 
      let dy = Math.abs(y1-y0);

      let isAxisChanged = dy > dx;
      if(isAxisChanged){
        let aux = dx;
        dx = dy;
        dy = aux;
      }
      
      let delta = 2*dy - dx;
      const incr_east = 2*dy;
      const incr_northwest = 2*(dy - dx);

      let signalX = Math.sign((x1 - x0));
      let signalY = Math.sign((y1 - y0));

      let x = x0, y = y0;
      let r = color_0[0], g = color_0[1], b = color_0[2], a = color_0[3];
      const varR = (color_1[0] - color_0[0])/dx;
      const varG = (color_1[1] - color_0[1])/dx;
      const varB = (color_1[2] - color_0[2])/dx;
      const varA = (color_1[3] - color_0[3])/dx;
      this.putPixel(x, y, [r,g,b])
      for (let i = 0; i < dx; i++){
          r += varR;
          g += varG;
          b += varB;
          a += varA;
          
          if(delta <= 0){
              delta+=incr_east;
              if(isAxisChanged)
                y += signalY;
              else
                x += signalX;
          }else{  
              delta+=incr_northwest;
              x += signalX;
              y += signalY;
          }
          this.putPixel(x,y, [r,g,b,a])
      }
    }

    DrawTriangle(x0, y0, x1, y1, x2, y2, color_0, color_1, color_2){
      this.MidPointLineAlgorithm(x0, y0, x1, y1, color_0, color_1);
      this.MidPointLineAlgorithm(x1, y1, x2, y2, color_1, color_2)
      this.MidPointLineAlgorithm(x2, y2, x0, y0, color_2, color_0)
    }
  }
  