// alert("Hello World") // 1
var a = [];
for (var i = 0; i < 10; i++) {
    a.push(Math.floor(Math.random() * (100 - 0)));
} // 2
console.log(quicksort(a, 0, 9)); // 3
var v1 = new Vector(1, 2, 3);
var v2 = new Vector(3, 2, 1);
v1.add(v2);
v1.add(new Vector(1, 1, 1));
console.log("v1: ", v1);
console.log("v2: ", v2);
console.log("Dot: ", v1.dot(v2));
console.log("Angle between v1 and v2;", v1.angle(v2));
console.log("Cross: ", v1.cross(v2));
var m1 = new Matrix(v1.asList());
m1.print_as_table();
var m2 = new Matrix([[1, 0, 0], [0, 1, 0], [0, 0, 1]]);
m2.print_as_table();
