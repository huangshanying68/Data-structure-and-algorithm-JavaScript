function mergeSort(arr) {
    if (arr.length == 1) {
        return arr;
    }
    let leftArr = [];
    let rightArr = [];
    let mid = Math.floor(arr.length / 2);
    leftArr = arr.splice(0, mid);
    rightArr = arr; //剩下的部分
    return merge(mergeSort(leftArr), mergeSort(rightArr));
}

function merge(left, right) {
    let result = [];
    while (left.length > 0 && right.length > 0) {
        if (left[0] < right[0]) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }
    while (left.length) {
        result.push(left.shift());
    }
    while (right.length) {
        result.push(right.shift());
    }
    return result;

}