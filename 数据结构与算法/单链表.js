/*
1.内存空间不必是连续的
2.创建时不用固定大小
3.插入、删除数据，时间复杂度O(1)
4.有数据时head默认指向第一个，无数据时,head指向null
*/
function linkedList() {
    this.head = null;

    function Node(data) {
        this.data = data;
        //创建时不知道下一个指向谁，默认指向null
        this.next = null;
    }
    //记录列表长度
    this.length = 0;
    //添加数据
    linkedList.prototype.enData = function(data) {
            let newNode = new Node(data);
            //如果是第一个节点
            if (this.length == 0) {
                this.head = newNode;
            }
            //不是第一个节点，则找到最后一个节点，最后一个节点指向新节点
            else {
                let currentNode = this.head;
                while (currentNode.next) {
                    currentNode = currentNode.next;
                }
                currentNode.next = newNode;
            }
            this.length += 1;
        }
        //插入节点
    linkedList.prototype.insertData = function(position, data) {
            //越界判断
            if (position < 0 || position > this.length) {
                return false;
            }
            let newData = new Node(data);
            if (position == 0) {
                newNode.next = this.head;
                this.head = newNode;
            } else {
                let index = 0;
                let currentNode = this.head;
                let previous = null;
                while (index < position) {
                    previous = current;
                    currentNode = currentNode.next;
                    index += 1;

                }
                previous.next = newNode;
                newNode.next = currentNode;
            }
            this.length += 1;
            return true;

        }
        //根据位置找元素
    linkedList.prototype.getData = function(position) {
            //越界判断
            if (position < 0 || position >= this.length) {
                return null;
            }
            let index = 0;
            let currentNode = this.head;
            while (index < position) {
                currentNode = currentNode.next;
                index += 1;
            }
            return currentNode.data;

        }
        //根据元素查找对应下标
    linkedList.prototype.indexData = function(data) {
            let currentNode = this.head;
            let index = 0;
            while (currentNode) {
                if (currentNode.data == data) {
                    return index;
                } else {
                    currentNode = currentNode.next;
                    index += 1;
                }
            }
            //找不到
            return null;
        }
        //修改数据
    linkedList.prototype.updateData = function(position, element) {
            if (position < 0 || position >= this.length) {
                return false;
            }
            let index = 0;
            let currentNode = this.head;
            while (index < position) {
                currentNode = currentNode.next;
                index += 1;
            }
            currentNode.data = element;
            return true;

        }
        //根据位置删除元素
    linkedList.prototype.deData = function(position) {
            if (position < 0 || position >= this.length) {
                return null;
            }
            let currentNode = this.head;
            //删除第一个
            if (position == 0) {
                this.head = currentNode.next;
            } else {
                let index = 0;
                let previous = null;
                while (index < position) {
                    previous = currentNode;
                    currentNode = currentNode.next;
                }
                previous.next = currentNode.next;

            }
            this.length -= 1;
            //返回删除的节点数据
            return currentNode.data;
        }
        //根据元素删除数据
    linkedList.prototype.removeData = function(element) {
            let position = this.indexData(element);
            return this.deData(position);
        }
        //获取节点个数
    linkedList.prototype.isEmpty = function() {
        return this.length;
    }
}