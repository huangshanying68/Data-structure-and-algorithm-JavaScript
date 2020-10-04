/*
1.集合元素没有顺序
2.集合元素不能重复，即元素唯一
*/
function setData() {
    this.items = {};
    //判断集合是否有元素
    setData.prototype.hasOwn = function(value) {
            return this.items.hasOwnProperty(value);
        }
        //添加元素
    setData.prototype.enData = function(value) {
            if (this.hasOwn(value)) {
                //存在
                return false;
            } else {
                this.items[value] = value;
                return true;
            }
        }
        //删除元素
    setData.prototype.deData = function(value) {
            if (this.hasOwn(value)) {
                delete this.items[value];
                return true;
            } else {
                return false;
            }
        }
        //获取元素所有元素
    setData.prototype.values = function() {
            return Object.keys(this.items);
        }
        //元素个数
    setData.prototype.size = function() {
            return Object.keys(this.items).length;
        }
        //清除集合
    setData.prototype.clear = function() {
        this.items = {};
    }
}