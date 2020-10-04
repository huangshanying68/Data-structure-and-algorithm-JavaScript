/*
1.比较length-1轮
2.每次比较将最大值排到末尾，下一轮比较时去掉上一轮得出的最大值进行比较
3.O（n^2)
 */
function bubbleSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}