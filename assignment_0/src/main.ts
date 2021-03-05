import { Vector } from "./Vector";
import { Matrix } from "./Matrix";
import { quicksort } from "./Algorithm";
// alert("Hello World") // 1

const a: Array<number> = [];
for(let i = 0; i < 10; i++){
    a.push(Math.floor(Math.random() * (100 - 0)));
} // 2
const sorted: Array<number> = quicksort(a, 0, 9);
console.log(sorted); // 3

const v1 = new Vector(1,2,3);
const v2 = new Vector(3,2,1);
v1.add(v2);
v1.add(new Vector(1,1,1));
console.log("v1: ", v1);
console.log("v1 unit vector: ", v1.unit);
console.log("v2: ", v2);
console.log("Dot: ", v1.dot(v2));
console.log("Angle between v1 and v2;", v1.angle(v2));
console.log("Cross: ", v1.cross(v2));
const m1 = new Matrix(v1.asList())
m1.printAsTable()
const m2 = new Matrix([[1, 0, 0], [0, 1, 0], [0, 0, 1]])
m2.printAsTable()