import {Vector} from "./Vector";

class Matrix{
    private _data: Array<Array<number>>;
    constructor(matrix: Array<Array<number>>){
        this._data = [];
        for(const row of matrix){
            this._data.push(row);
        }
    }

    private _mulArrayArray(a1: Array<Array<number>>, a2: Array<Array<number>>): Matrix{
        let a3 = a2;
        a3 = a1;
        a3.length;
        return;
    }

    public mulVecMatrice(v: Vector): Matrix{
        v.asList()
        return;
    }

    public mulMatriceVec(v: Vector): Matrix{
        v.asList()
        return;
    }

    public toVec(): Vector{
        return;
    }

    public printAsTable(): void {
        console.table(this._data);
    }
}

export {Matrix};