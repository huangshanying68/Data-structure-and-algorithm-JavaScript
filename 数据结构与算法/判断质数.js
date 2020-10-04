/*
 *质数：只能被1和自身整除,不能被2到(num-1)整除
 */
//普遍方法判断质数
function isPrime(num) {
    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            return false;
        }
    }
    return false;
}
/*
 *高效判断质数法
 *一个数不能被大于2且小于自身开平方根的数整除，即是质数
 */
function isPrime(num) {
    let t = parseInt(Math.sqrt(num));
    for (let i = 2; i < t; i++) {
        if (num % i == 0) {
            return false;
        }
    }
    return true;
}