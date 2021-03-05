class Vector{
    private x: number;
    private y: number;
    private z: number;
    constructor(x: number, y: number, z = 0){
        this.x = x;
        this.y = y;
        this.z = z;
    }

    public add(v: Vector): Vector{
        this.x += v.x;
        this.y += v.y;
        this.z += v.z;
        return this;
    }

    public sub(v: Vector): Vector{
        this.x -= v.x;
        this.y -= v.y;
        this.z -= v.z;
        return this;
    }

    public multByScalar(s: number): Vector{
        const scaledVector = new Vector(this.x * s, this.y * s, this.z * s);
        return scaledVector;
    }

    public cross(b: Vector): Vector {
        const a = this;
        const sx = a.y*b.z - a.z*b.y;
        const sy = a.z*b.x - a.x*b.z;
        const sz = a.x*b.y - a.y*b.x;
        const cross = new Vector(sx, sy, sz);
        return cross;
    }

    public dot(b: Vector): number {
        const dot = this.x*b.x + this.y*b.y + this.z*b.z;
        return dot;
    }

    public angle(b: Vector): number{
        const magA = this.mag;
        const magB = b.mag;
        return Math.acos(this.dot(b)/(magA*magB));
    }

    public get mag(): number {
        const mag = Math.sqrt(this.magSqr);
        return mag;
    }
    public get magSqr(): number {
        const mag = (this.x*this.x + this.y*this.y + this.z*this.z);
        return mag;
    }
    public get unit(): Vector {
        const unit: Vector = new Vector(this.x/this.mag, this.y/this.mag, this.y/this.mag);
        return unit;
    }

    public asList(): Array<Array<number>>{
        return [
            [this.x],
            [this.y],
            [this.z]
        ];
    }
}

export { Vector };