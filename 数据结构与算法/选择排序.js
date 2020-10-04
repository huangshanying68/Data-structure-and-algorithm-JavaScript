/*
1.从数组第一个数开始，将元素与其他元素进行比较，检查完所有元素后，将元素与最小元素进行位置交换，接着进行从下一个元素开始
2. O(n^2)
*/
function selectSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let min = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[min] > arr[j]) {
                min = j;
            }
        }
        let temp = arr[min];
        arr[min] = arr[i];
        arr[i] = temp;
    }
    return arr;
}