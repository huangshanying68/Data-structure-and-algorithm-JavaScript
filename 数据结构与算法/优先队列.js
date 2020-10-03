//每个元素不再是一个数据，包含数据的优先级 此算法 数字越低优先级越高
function priorityQueue() {
    this.itmes = [];

    function queueElement(element, priority) {
        this.element = element;
        this.priority = priority;
    }
    priorityQueue.enQueue = function(element, priority) {
            let t = new queueElement(element, priorityQueue);
            //数组为空
            if (this.itmes.length == 0) {
                this.itmes.push(t);
            } else {
                let judge = false;
                for (let i = 0; i < this.itmes.length; i++) {
                    if (t.priority < this.itmes[i].priority) {
                        this.itmes.splice(i, 0, t);
                        judge = true;
                        break;
                    }
                }
                //优先级最低
                if (!judge) {
                    this.itmes.push(t);

                }
            }
        }
        //其余的方法都和队列一样，自行参考队列
}