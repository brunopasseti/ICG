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
    private _mulArrayArray(a1: Array<Array<number>>, a2: Array<Array<number>>): Matrix{
        let a3 = a2;
        a3 = a1;
        a3.length;
        return;
    }

    // TODO:
    public mulVecMatrix(v: Vector): Matrix{
        v.asList();
        return;
    }

    // TODO:
    public mulMatrixVec(v: Vector): Matrix{
        v.asList();
        return;
    }

    // TODO:
    public toVec(): Vector{
        return;
    }

    public printAsTable(): void {
        console.table(this._data);
    }
}

export { Matrix };