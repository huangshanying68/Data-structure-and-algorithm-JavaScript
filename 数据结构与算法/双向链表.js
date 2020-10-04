/*
1.从头遍历到尾，也可以从尾遍历到头
2.头部、尾部指针
3.节点有前后指向
*/
function doubleLinkedList() {
    this.head = null;
    this.tail = null;
    this.length = 0;

    function Node(data) {
        this.data = data;
        this.prev = null;
        this.next = null;
    }
    //添加元素
    doubleLinkedList.prototype.enData = function(data) {
            let newNode = new Node(data);
            if (this.length == 0) {
                this.head = newNode;
                this.tail = newNode;
            } else {
                this.tail.next = newNode;
                newNode.prev = this.tail;
                this.tail = newNode;
            }
            this.length += 1;
        }
        //插入元素
    doubleLinkedList.prototype.insertData = function(position, data) {
            if (position < 0 || position > this.length) {
                return false;
            }
            let newNode = new Node(data);
            if (position == 0) {
                this.head.prev = newNode;
                newNode.next = this.head;
                this.head = newNode;
            } else if (position == this.length) {
                this.tail.next = newNode;
                newNode.prev = this.tail;
                this.tail = newNode;
            } else {
                let index = 0;
                let currentNode = this.head;
                while (index < position) {
                    currentNode = currentNode.next;
                    index += 1;
                }
                currentNode.prev.next = newNode;
                newNode.prev = currentNode.prev;
                currentNode.prev = newNode;
                newNode.next = currentNode;
            }
            this.length += 1;
            return true;
        }
        //根据位置获取元素数据
    doubleLinkedList.prototype.getData = function(position) {
            if (position < 0 || position >= this.length) {
                return null;
            }
            let currentNode = null;
            let index = 0;
            let t = Math.floor(this.length / 2);
            if (position < t) {
                //从头开始找
                currentNode = this.head;
                while (index < position) {
                    currentNode = currentNode.next;
                    index += 1;
                }
            } else {
                //从尾部开始找
                currentNode = this.tail;
                index = this.length - 1;
                while (position < index) {
                    currentNode = currentNode.prev;
                    index -= 1;
                }
            }
            return currentNode.data;

        }
        //根据元素获取下标
    doubleLinkedList.prototype.indexData = function(data) {
            let index = 0;
            let currentNode = this.head;
            while (currentNode) {
                if (currentNode.data == data) {
                    return index;
                } else {
                    currentNode = currentNode.next;
                    index += 1;
                }
            }
            return null;

        }
        //修改数据
    doubleLinkedList.prototype.updateData = function(position, element) {
            if (position < 0 || position >= this.length) {
                return false;
            }
            let index = 0;
            let currentNode = this.head;
            let t = Math.floor(this.length / 2);
            if (position < t) {
                currentNode = this.head;
                while (index < position) {
                    currentNode = currentNode.next;
                    index += 1;
                }
            } else {
                currentNode = this.tail;
                index = this.length - 1;
                while (position < index) {
                    currentNode = currentNode.prev;
                    index -= 1;
                }
            }
            currentNode.data = element;
            return true;

        }
        //根据位置删除元素
    doubleLinkedList.prototype.deData = function(position) {
            if (position < 0 || position >= this.length) {
                return false;
            }
            //只有一个节点并且删除
            if (this.length == 1) {
                this.head = null;
                this.tail = null;
            } else {
                //删除的是第1个节点
                if (position == 0) {
                    this.head.next.prev = null;
                    this.head = this.head.next;
                }
                //删除的是最后一个节点
                else if (position == this.length - 1) {
                    this.tail.prev.next = null;
                    this.tail = this.tail.prev;
                } else {
                    let index = 0;
                    let currentNode = this.head;
                    while (index < position) {
                        currentNode = currentNode.next;
                    }
                    currentNode.prev.next = currentNode.next;
                    currentNode.next.prev = currentNode.prev;
                }
            }
            this.length -= 1;
            return currentNode.data;
        }
        //根据元素删除数据
    doubleLinkedList.prototype.removeData = function(data) {
            let t = this.indexData(data);
            return this.deData(t);
        }
        //获取第一个元素
    doubleLinkedList.prototype.getHead = function() {
            return this.head.data;
        }
        //获取最后元素
    doubleLinkedList.prototype.getHead = function() {
        return this.tail.data;
    }


}