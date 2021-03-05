class Matrix{
    private _data: Array<Array<number>>;
    constructor(matrix: Array<number>[]){
        this._data = []
        for(let row of matrix)[
            this._data.push(row)
        ]
    }

    private _mulArrayArray(a1: Array<Array<number>>, a2: Array<Array<number>>){

    }

    public mulVecMatrice(v: Vector){

    }

    public mulMatriceVec(v: Vector){

    }

    public toVec() > Vector{
        
    }

    public print_as_table(){
        console.table(this._data);
    }
}