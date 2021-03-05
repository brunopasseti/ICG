import { Matrix } from "../src/Matrix";

describe("Matrix:", () => {
    test("isIdentity", () => {
        const m1: Matrix = new Matrix([[1, 0, 0], [0, 1, 0], [0, 0, 1]]);
        expect(m1.isIdentity).toBe(true)
    })
})