//数组去重
function de(arr) {
    let array = [];
    for (let i = 0; i < arr.length; i++) {
        if (array.indexOf(arr[i]) == -1) {
            array.push(arr[i]);
        }
    }
    return array;
}

//数组中重复出现的数
function de(arr) {
    let array = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr.indexOf(arr[i]) != arr.lastIndexOf(arr[i]) && array.indexOf(arr[i]) == -1) {
            array.push(arr[i]);
        }
    }
    return array;
}