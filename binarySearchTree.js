class BstNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  traverseTree(node, value) {
    if (node.value === value) {
      // return found node 
      return node;
    }
    if (value > node.value && node.right) {
      // right tree
      return this.traverseTree(node.right, value);
    }
    if (value < node.value && node.left) {
      // left tree
      return this. traverseTree(node.left, value);
    }
    return node;

  }

  insert(value) {
    const newNode = new BstNode(value);
    if (this.root === null) {
      this.root = newNode;
    } else {
      const traversedNode = this.traverseTree(this.root, value);
      if (value === traversedNode.value) {
        return console.log('duplicate node not allowed');
      }
      if (value < traversedNode.value) {
        traversedNode.left = newNode;
      } else {
        traversedNode.right = newNode;
      }
    }
  }

  lookup(value) {
    if (this.root === null) {
      return console.log('Empty tree');
    }
    const traversedNode = this.traverseTree(this.root, value);
    if (value === traversedNode.value) {
      return console.log(`${value}`,traversedNode);
    }
    if (traversedNode.left && value === traversedNode.left.value) {
      return console.log(`${value}`,traversedNode.left);
    }
    if (traversedNode.right && value === traversedNode.right.value) {
      return console.log(`${value}`,traversedNode.right);
    }
    return console.log(`${value}`,'Node not found');
  }

  printTree() {
    console.log('\n', JSON.stringify(tree.root));
  }
}

const tree = new BinarySearchTree();
tree.insert(9)
tree.insert(4)
tree.insert(6)
tree.insert(20)
tree.insert(170)
tree.insert(15)
tree.insert(1)
tree.insert(7)
tree.insert(16)
tree.insert(14)
tree.insert(172)
tree.insert(44)
tree.insert(0)
tree.insert(2)

tree.lookup(9)
tree.lookup(4)
tree.lookup(6)
tree.lookup(20)
tree.lookup(170)
tree.lookup(15)
tree.lookup(1)
tree.lookup(7)
tree.lookup(16)
tree.lookup(14)
tree.lookup(172)
tree.lookup(44)
tree.lookup(0)
tree.lookup(2)
tree.lookup(100)
// printTree();
