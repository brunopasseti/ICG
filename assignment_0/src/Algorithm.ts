export function partition(arr: Array<number>, lo: number, hi: number): number{
    const pivot = arr[hi];
    let i = lo;
    for (let j = lo; j < hi; j++) {
        if (arr[j] < pivot) {
            const temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
            i = i + 1;
        }
    }
    const temp = arr[i];
    arr[i] = arr[hi];
    arr[hi] = temp;
    return i;
}

export function quicksort(arr: Array<number>, lo: number, hi: number): Array<number> {
        if(lo < hi) {
            const p: number = partition(arr, lo, hi);
            quicksort(arr, lo, p - 1);
            quicksort(arr, p + 1, hi);
        }
        return arr;
}
