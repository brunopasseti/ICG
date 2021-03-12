import {Vector} from "./Vector";

class Matrix{
    private _data: Array<Array<number>>;
    private _isSquared: boolean;
    constructor(matrix: Array<Array<number>>){
        this._data = [];
        for(const row of matrix){
            this._data.push(row);
        }
        if(matrix.length === matrix[0].length){
            this._isSquared = true;
        } else {
            this._isSquared = false;
        }
    }

    public get isSquared(): boolean {
        return this._isSquared;
    }

    // TODO: Is Upper Triangular Matrix
    public get isUTriangular(): boolean {
        return this._isSquared;
    }

    // TODO: Is Lower Triangular Matrix
    public get isLTriangular(): boolean {
        return this._isSquared;
    }

    // Is Identity Matrix
    public get isIdentity(): boolean {
        let isIdentity = true;
        for(let i = 0; i < this._data.length; i++){
            if(i === i && this._data[i][i] !== 1){
                isIdentity = false;
                break;
            }
            for(let j = 0; j < this._data[i].length; j++){
                if(i !== j && this._data[i][j] !== 0){
                    isIdentity = false;
                    break;
                }
            }
        }
        return this._isSquared && isIdentity;
    }

    // eslint-disable-next-line @typescript-eslint/naming-convention
    public get T(): Matrix{
        return new Matrix(this._data[0].map((x,i) => this._data.map(x => x[i])));
    }

    // TODO:
    public get determinant(): number{
        return 0;
    }

    // TODO:
    private _mulArrayArray(a: Array<Array<number>>, b: Array<Array<number>>): Matrix{
        if(a[0].length != b.length){
            throw Error("Different sizes");
        }
        let m = a.length;
        let n = a[0].length;
        let p = b[0].length;
        let c = Array<Array<number>>(m);
        for(let i = 0; i < m; i++){
            c[i] = Array<number>(p);
        }
        for(let i = 0; i < m; i++){
            for(let j = 0; j < p; j++){
                c[i][j] = 0;
                for(let k = 0; k < n; k++){
                    c[i][j] += a[i][k]*b[k][j];
                }
            }
        }
        let result = new Matrix([...c]);
        result.printAsTable();
        // TODO: WARN ESSE RETURN ESTA FUNCIOANDO
        return new Matrix([...c]);
    }
    public mulMatrix(m: Matrix): Matrix{
        this._mulArrayArray(this._data, m._data);
        return;
    }
    public mulVecMatrix(v: Vector): Matrix{
        this._mulArrayArray(v.asList(), this._data);
        return;
    }
    
    public mulMatrixVec(v: Vector): Matrix{
        this._mulArrayArray(this._data, v.asList());
        return;
    }

    public toVec(): Vector{
        if((this._data.length === 3) && (this._data[1].length === 1)){
            throw Error();
        }
        return new Vector(this._data[0][0], this._data[0][1], this._data[0][2]);
    }

    public printAsTable(): void {
        console.table(this._data);
    }
}

export { Matrix };