import {Vector} from "../src/Vector"
describe("Vector", function () {
    test('Constructor without z', function () {
        let v1 = new Vector(1, 2);
        let v2 = new Vector(1, 2, 0);
        expect(v1).toStrictEqual(v2);
    });
    test('Add', function () {
        let v1 = new Vector(1, 2, 3);
        let v2 = new Vector(3, 2, 1);
        v1.add(v2);
        expect(v1 == new Vector(4, 4, 4));
    });
    test('Sub', function () {
        let v1 = new Vector(1, 2, 3);
        let v2 = new Vector(3, 2, 1);
        v1.sub(v2);
        expect(v1 == new Vector(-2, 0, 2));
    });
    test('MultByScalar', function () {
        let v1 = new Vector(1, 2, 3);
        let v2 = v1.multByScalar(2);
        expect(v2 == new Vector(2, 4, 6));
    });
    test('Cross', function () {
        let v1 = new Vector(5, 5, 5);
        let v2 = new Vector(3, 2, 1);
        let v3 = v1.cross(v2);
        expect(v3 == new Vector(-5, 10, -5));
    });
    test('Dot', function () {
        let v1 = new Vector(5, 5, 5);
        let v2 = new Vector(3, 2, 1);
        let v3 = v1.dot(v2);
        expect(v3).toBe(30);
    });
    test('As List', function () {
        let expected = [ [5], [5], [5] ];
        let v1 = new Vector(5, 5, 5);
        let result = v1.asList();
        expect(result).toStrictEqual(expected)
    });
    test('Angle', function () {
        let result = 0.38759668665518104;
        let v1 = new Vector(5, 5, 5);
        let v2 = new Vector(3, 2, 1);
        let angle = v1.angle(v2);
        expect(angle).toBe(result)
    });
    test('Unit Vector', function () {
        let expected = new Vector(0.5773502691896257, 0.5773502691896257, 0.5773502691896257);
        let v1 = new Vector(5, 5, 5);
        let result = v1.unit;
        expect(expected).toStrictEqual(result)
    });
});
