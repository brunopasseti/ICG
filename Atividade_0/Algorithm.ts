function quicksort(A: Array<number>, lo: number, hi: number) {
    if(lo < hi){
        let p = partition(A, lo, hi);
        quicksort(A, lo, p - 1);
        quicksort(A, p + 1, hi);
    }
    return a;
}
function partition(A: Array<number>, lo: number, hi: number){
    let pivot = A[hi];
    let i = lo;
    for (let j = lo; j < hi; j++) {
        if (A[j] < pivot) {
            let temp = A[i];
            A[i] = A[j];
            A[j] = temp;
            i = i + 1;
        }
    }
    let temp = A[i];
    A[i] = A[hi];
    A[hi] = temp;
    return i;
}