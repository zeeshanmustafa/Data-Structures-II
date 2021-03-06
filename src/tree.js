/* eslint-disable no-trailing-spaces */
/* eslint-disable no-unused-vars */
class Tree {
  constructor(value) {
    this.value = value;
    this.children = [];
  }
  // Adds a new Tree node with the input value to the current Tree node 
  addChild(value) {
    const node = new Tree(value);
    this.children.push(node);
  }
  // Checks this node's children to see if any of them matches the given value
  // Continues recursively until the value has been found or all of the children
  // have been checked
  contains(value) {
    let result = false;
    const traverse = (node) => {
      if (node.value === value) result = true;
      for (let i = 0; i < node.children.length; i++) {
        traverse(node.children[i]);
      }
    };
    traverse(this);
    return result;
  }
}

module.exports = Tree;
