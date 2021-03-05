var Matrix = /** @class */ (function () {
    function Matrix(matrix) {
        this._data = [];
        for (var _i = 0, matrix_1 = matrix; _i < matrix_1.length; _i++) {
            var row = matrix_1[_i];
            [
                this._data.push(row)
            ];
        }
    }
    Matrix.prototype._mulArrayArray = function (a1, a2) {
    };
    Matrix.prototype.mulVecMatrice = function (v) {
    };
    Matrix.prototype.mulMatriceVec = function (v) {
    };
    return Matrix;
}());
 > Vector;
{
}
print_as_table();
{
    console.table(this._data);
}
