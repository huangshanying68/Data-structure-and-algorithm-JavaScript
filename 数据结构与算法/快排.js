/*
 *分而治之
 */
function quickSort(arr) {
    if (arr.length == 0) {
        return []; //要返回数组
    }
    let mid = arr[0];
    let leftArr = [];
    let rightArr = [];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < mid) {
            leftArr.push(arr[i]);
        } else {
            rightArr.push(arr[i]);
        }
    }
    return quickSort(leftArr).concat(mid, quickSort(rightArr))
}