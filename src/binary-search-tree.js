const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class BinarySearchTree {

  constructor(data) {
    this._root = null;
  }  

  root() {
    return this._root;
  }

  add(data) {
    this._root = addNode(this._root, data);
    function addNode(node, data) {
      if (!node) {
        return new Node(data);
      }
      if (node.data === data) {
        return node;
      }
      if (data < node.data) { 
        node.left = addNode(node.left, data);
      } else {
        node.right = addNode(node.right, data);
      }
      return node;
    }
}

  has(data) {
    return searchNode(this._root, data);
    function searchNode (node,data){
      if(!node){
        return false;
      }
      if(node.data === data){
        return true;
      }
      return data < node.data ? searchNode(node.left, data) : searchNode(node.right, data)
    }
  }

  find(data) {
    return searchNode(this._root, data);
    function searchNode (node,data){
      if(!node){
        return null;
      }
      if(node.data === data){
        return node;
      }
      return data < node.data ? searchNode(node.left, data) : searchNode(node.right, data)
    }
  }

  remove(data) {
    this._root = removeNode(this._root, data);
    function removeNode(node, data){
       if(!node){
         return null;
       }
       if(data < node.data){
         node.left = removeNode(node.left, data);
         return node;
       }else if(node.data < data){
         node.right = removeNode(node.right, data);
         return node;
       }else{
         if(!node.left && !node.right){
           return null;
         }
         if(!node.left){
           node = node.right;
           return node;
         }
         if(!node.right){
           node = node.left;
           return node;
         }
         let maxFromLeft = node.left;
         while(maxFromLeft.right){
           maxFromLeft = maxFromLeft.right;
         }
         node.data = maxFromLeft.data;
         node.left = removeNode(node.left, maxFromLeft.data)
         return node;
       }
    }
  }

  min() {
    if(!this._root){
      return null;
    }
    let node = this._root;
    while(node.left){
      node = node.left;
    }
    return node.data;
  }

  max() {
    if(!this._root){
      return null;
    }
    let node = this._root;
    while(node.right){
      node = node.right;
    }
    return node.data;
  }
}


module.exports = {
  BinarySearchTree
};