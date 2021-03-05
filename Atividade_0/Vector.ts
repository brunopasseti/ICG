class Vector{
    private x: number;
    private y: number;
    private z: number;
    constructor(x: number, y: number, z: number = 0){
        this.x = x;
        this.y = y;
        this.z = z;
    }

    public add(v: Vector){
        this.x += v.x;
        this.y += v.y;
        this.z += v.z;
    }

    public sub(v: Vector){
        this.x -= v.x;
        this.y -= v.y;
        this.z -= v.z;
    }

    public multByScalar(s: number) : Vector{
        let scaledVector = new Vector(this.x * s, this.y * s, this.z * s);
        return scaledVector;
    }

    public cross(b: Vector) : Vector {
        let a = this;
        let sx = a.y*b.z - a.z*b.y;
        let sy = a.z*b.x - a.x*b.z;
        let sz = a.x*b.y - a.y*b.x;
        let cross = new Vector(sx, sy, sz)
        return cross;
    }

    public dot(b: Vector) : number {
        let dot = this.x*b.x + this.y*b.y + this.z*b.z; 
        return dot
    }
    
    public angle(b: Vector){
        let magA = this.mag;
        let magB = b.mag;
        return Math.acos(this.dot(b)/(magA*magB));
    }

    public get mag() : number {
        let mag = Math.sqrt(this.magSqr);
        return mag;
    }
    public get magSqr() : number {
        let mag = (this.x*this.x + this.y*this.y + this.z*this.z);
        return mag;
    }
    public get unit() : Vector {
        let normie: Vector = new Vector(this.x/this.mag, this.y/this.mag, this.y/this.mag);
        return normie;
    }
    
    public asList() : Array<Array<number>>{
        return [
            [this.x],
            [this.y],
            [this.z]
        ]
    }
}