/*
1.BST Binary Search Tree
2.可以为空
3.不为空时，左子树的所有键值小于根节点键值，右子树所有键值大于根节点键值
3.左右子树本身也都是二叉搜索树
*/
function binarySearchTree() {
    this.root = null;

    function Node(key) {
        this.key = key;
        this.left = null;
        this.right = null;

    }
    //插入节点
    binarySearchTree.prototype.enNode = function(key) {
        let newNode = new Node(key);
        //没有节点
        if (this.root == null) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode)
        }
    }
    binarySearchTree.prototype.insertNode = function(node, newNode) {
            if (newNode.key < node.key) {
                if (node.left == null) {
                    node.left = newNode;
                } else {
                    this.insertNode(node.left, newNode);

                }
            } else {
                if (node.right == null) {
                    node.right = newNode;
                } else {
                    this.insertNode(node.right, newNode)
                }
            }
        }
        //先序遍历 根 左 右
    binarySearchTree.prototype.preOrder = function(node, t) {
            if (node != null) {
                t += node.key + "";
                this.preOrder(node.left, t);
                this.preOrder(node.right, t);

            }

        }
        //中序遍历 左 根 右
    binarySearchTree.prototype.inOrder = function(node, t) {
            if (node != null) {
                this.inOrder(node.left, t);
                t += node.key + "";
                this.inOrder(node.right, t);

            }
        }
        //后序遍历  左 右 根
    binarySearchTree.prototype.postOrder = function(node, t) {
            if (node != null) {
                this.postOrder(node.left, t);
                this.postOrder(node.right, t)
                t += node.key + "";
            }
        }
        //查找给定值
    binarySearchTree.prototype.search = function(key) {
            let currentNode = this.root;
            while (currentNode) {
                if (key < currentNode.key) {
                    currentNode = currentNode.left;
                } else if (currentNode.key < key) {
                    currentNode = currentNode.right;

                } else {
                    return true;
                }
            }
            return false;
        }
        //查找最小值
    binarySearchTree.prototype.min = function() {
            let currentNode = this.root;
            while (currentNode.left) {
                currentNode = currentNode.left;
            }
            return currentNode.key;
        }
        //查找最大值
    binarySearchTree.prototype.max = function() {
            let currentNode = this.root;
            while (currentNode.right) {
                currentNode = currentNode.right;
            }
            return currentNode.key;
        }
        //删除节点
    binarySearchTree.prototype.remove = function(key) {
        let currentNode = this.root; //要删除的节点
        let parent = null; //删除节点的父节点
        let isLeft = false;
        while (currentNode.key != key) {
            parent = currentNode;
            if (key < currentNode.key) {
                isLeft = true;
                currentNode = currentNode.left;
            } else {
                isLeft = false;
                currentNode = currentNode.right;

            }
            if (currentNode == null) {
                return false;
            }
        }
        //找到要删除的节点
        //删除节点无叶节点
        if (currentNode.left == null && currentNode.right == null) {
            //删除的是根节点
            if (currentNode == root) {
                this.root = null;
            }
            //删除的是左节点
            else if (isLeft) {
                parent.left = null;
            }
            //删除的是右节点
            else {
                parent.right = null;

            }

        }
        //要删除的节点有节点
        //删除的节点有左节点，即无右节点
        else if (currentNode.right == null) {
            if (this.root == currentNode) {
                this.root = currentNode.left;
            }
            //删除的是左节点
            else if (isLeft) {
                parent.left = currentNode.left;
            } else {
                //删除的是右节点
                parent.right = currentNode.left
            }

        } else if (currentNode.left == null) {
            if (this.root == currentNode) {
                this.root = currentNode.right;
            } else if (isLeft) {
                parent.left = currentNode.right;
            } else {
                parent.right = currentNode.right;
            }
        }
        //删除的节点有两个节点 暂时不会
        else {

        }


    }

}