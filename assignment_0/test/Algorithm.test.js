import * as Algorithm from "../src/Algorithm"
describe("Alg: Quicksort", function () {
    test('Sorting a unsorted array', function () {
        var sorted_arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        var unsorted_arr = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
        var new_array = Algorithm.quicksort(unsorted_arr, 0, unsorted_arr.length - 1);
        expect(sorted_arr == new_array);
    });
    test('Sorting a sorted array', function () {
        var sorted_arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        var unsorted_arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        var new_array = Algorithm.quicksort(unsorted_arr, 0, unsorted_arr.length - 1);
        expect(sorted_arr == new_array);
    });
});
