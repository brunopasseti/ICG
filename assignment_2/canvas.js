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

    MidPointLineAlgorithm(xi, yi, xf, yf, color_i, color_f){
      let dx = Math.abs(xf-xi); 
      let dy = Math.abs(yf-yi);

      let isAxisChanged = false;

      if(dy > dx){
        let aux = dx;
        dx = dy;
        dy = aux;
        isAxisChanged = true;
      }
      
      let delta = 2*dy - dx;
      const incr_east = 2*dy;
      const incr_northwest = 2*(dy - dx);

      let signalX = Math.sign((xf - xi));
      let signalY = Math.sign((yf - yi));

      let x = xi, y = yi;
      let r = color_i[0], g = color_i[1], b = color_i[2], a = color_i[3];
      const varR = (color_f[0] - color_i[0])/dx
      const varG = (color_f[1] - color_i[1])/dx
      const varB = (color_f[2] - color_i[2])/dx
      const varA = (color_f[3] - color_i[3])/dx

      this.putPixel(x, y, [r,g,b])
      let count = 0;
      while(count < dx){
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
          count++;
      }
      
      this.putPixel(xf,yf, color_f)
    }

    DrawTriangle(x0, y0, x1, y1, x2, y2, color_0, color_1, color_2){
      this.MidPointLineAlgorithm(x0, y0, x1, y1, color_0, color_1);
      this.MidPointLineAlgorithm(x1, y1, x2, y2, color_1, color_2)
      this.MidPointLineAlgorithm(x2, y2, x0, y0, color_2, color_0)
    }
  }

  export default { Canvas };