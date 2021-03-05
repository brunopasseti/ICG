function quicksort(A, lo, hi) {
    if (lo < hi) {
        var p = partition(A, lo, hi);
        quicksort(A, lo, p - 1);
        quicksort(A, p + 1, hi);
    }
    return a;
}
function partition(A, lo, hi) {
    var pivot = A[hi];
    var i = lo;
    for (var j = lo; j < hi; j++) {
        if (A[j] < pivot) {
            var temp_1 = A[i];
            A[i] = A[j];
            A[j] = temp_1;
            i = i + 1;
        }
    }
    var temp = A[i];
    A[i] = A[hi];
    A[hi] = temp;
    return i;
}
