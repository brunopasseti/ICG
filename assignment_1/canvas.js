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
      this.context.fillStyle = 'rgb(' + color[0] + ',' + color[1] + ',' + color[2] + ')';
      this.context.fillRect(x, (this.canvas.height - 1) - y, 1, 1);
    }

    getWidth(){
        return this.canvas.width;
    }

    getHeight(){
        return this.canvas.height;
    }

    MidPointLineAlgorithm(xi, yi, xf, yf, color_i, color_f){
        const dx = xf-xi, dy = yf-yi;
        let delta = 2*dy - dx;
        const incr_east = 2*dy;
        const incr_northwest = 2*(dy - dx);

        let x = xi, y = yi;
        let r = color_i[0], g = color_i[1], b = color_i[2];
        const varR = (color_f[0] - color_i[0])/dx
        const varG = (color_f[1] - color_i[1])/dx
        const varB = (color_f[2] - color_i[2])/dx
        this.putPixel(x, y, [r,g,b])
        while(x < xf){
            r += varR;
            g += varG;
            b += varB;
            if(delta <= 0){
                delta+=incr_east;
                x++
            }else{  
                delta+=incr_northwest;
                x++;
                y++;
            }
            console.log(`putting pixel (${x},${y} with color [${r}, ${g}, ${b}]`);
            this.putPixel(x,y, [r,g,b])
        }
        this.putPixel(x,y, color_f)
    }
  }
  