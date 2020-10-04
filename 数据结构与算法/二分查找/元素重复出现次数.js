//前提：数组有序
function binSearch(arr, data) {
    let low = 0;
    let high = arr.length - 1;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (data < arr[mid]) {
            high = mid - 1;
        } else if (data > arr[mid]) {
            low = mid + 1;
        } else {
            return mid;
        }
    }
    return -1;
}
//计算重复次数
function count(arr, data) {
    let position = binSearch(arr, data);
    let count = 0;
    if (position > -1) {
        count += 1;
        for (let i = position - 1; i >= 0; i--) {
            if (arr[i] == data) {
                count += 1;
            } else {
                break;
            }

        }
        for (let i = position + 1; i < arr.length; i++) {
            if (arr[i] == data) {
                count += 1;
            } else {
                break;
            }
        }
    }
    return count;

}