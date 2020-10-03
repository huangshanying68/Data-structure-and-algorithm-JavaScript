/*
 1.后进先出 LIFO（Last in first out)
 2.栈顶进出
 */
function Stack() {
    this.items = [];
    //添加操作
    Stack.prototype.push = function(element) {
            this.items.push(element)
        }
        //返回最后一个元素
    Stack.prototype.pop = function() {
            return this.items.pop();
        }
        //查看栈顶元素
    Stack.prototype.peek = function() {
            return this.items[this.items.length - 1]
        }
        //判断栈顶是否为空
    Stack.prototype.isEmpty = function() {
            return this.items.length === 0
        }
        //获取栈中元素个数
    Stack.prototype.size = function() {
        return this.items.length;
    }
}

//栈的使用
//十进制转为二进制
function din(dinNumber) {
    let s = new Stack();
    while (dinNumber > 0) {
        s.push(dinNumber % 2);
        dinNumber = Math.floor(dinNumber / 2);

    }
    let t = '';
    while (!s.isEmpty()) {
        t += s.pop();
    }
    return t;

}