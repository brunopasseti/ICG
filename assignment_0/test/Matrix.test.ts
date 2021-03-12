import { Matrix } from "../src/Matrix";
import { Vector } from "../src/Vector";

describe("Matrix:", () => {
    test("isIdentity", () => {
        const m1: Matrix = new Matrix([[1, 0, 0], [0, 1, 0], [0, 0, 1]]);
        expect(m1.isIdentity).toBe(true)
    })
    test("Matrix-Vec multiplication", () => {
        const v1 = new Vector(5,5,5);
        const m2 = new Matrix([[5, 2, 3], [4, 5, 6], [7, 8, 5]]);
        const m3 = m2.mulMatrixVec(v1);
        expect(m3).toStrictEqual(new Matrix([[50], [75], [100]]));
    })
    test("3x3 matrix determinant", () => {
        const m1 = new Matrix([[5, 2, 3], [4, 5, 6], [7, 8, 5]]);
        expect(m1.determinant).toBe(-80);
    })
    test("Matrix-Matrix multiplication", () => {
        const v1 = new Vector(5,5,5);
        const m1 = new Matrix(v1.asList());
        const m2 = new Matrix([[5, 2, 3], [4, 5, 6], [7, 8, 5]]);
        const m3 = m2.mulMatrix(m1);
        expect(m3).toStrictEqual(new Matrix([[50], [75], [100]]));
    })
    test("size", () => {
        const m1 = new Matrix([[5, 2], [4, 5], [7, 8]]);
        expect(m1.size).toStrictEqual([3,2]);
    })
})