import * as Algorithm from "../src/Algorithm"
describe("Alg: Quicksort", function () {
    test('Sorting a unsorted array', function () {
        const sortedArr: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        const unsortedArr: Array<number> = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
        const newArray: Array<number> = Algorithm.quicksort(unsortedArr, 0, unsortedArr.length - 1);
        expect(sortedArr === newArray);
    });
    test('Sorting a sorted array', function () {
        const sortedArr: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        const unsortedArr: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        const newArray: Array<number> = Algorithm.quicksort(unsortedArr, 0, unsortedArr.length - 1);
        expect(sortedArr === newArray);
    });
});
