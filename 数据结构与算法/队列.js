/*
1.先进先出 FIFO（first in first out)
2.队尾添加元素，队首删除元素
*/
function Queue() {
    this.items = [];
    //添加元素
    Queue.prototype.enQueue = function(element) {
            this.items.push(element)
        }
        //删除元素
    Queue.prototype.deQueue = function() {
            return this.items.shift()

        }
        //查看队首元素
    Queue.prototype.front = function() {
            return this.items[0]
        }
        //判断是否为空
    Queue.prototype.isEmpty = function() {
            return this.items.length === 0
        }
        //元素个数
    Queue.prototype.size = function() {
        return this.items.length
    }
}
//队列使用
//击鼓传花  最终剩下的那个人胜利   用数组表示参加的人，num表示哪个数字停

function passQueue(nameList, num) {
    let s = new Queue();
    for (let i = 0; i < nameList.length; i++) {
        s.enQueue(nameList[i])
    }
    while (s.size() > 1) {
        for (let i = 0; i < num - 1; i++) {
            s.enQueue(s.deQueue())
        }
        //移出的人
        s.deQueue();
    }
    //剩下一人为胜利的人
    let endPerson = s.front();
    //获取下标
    return nameList.indexOf(endPerson)
}