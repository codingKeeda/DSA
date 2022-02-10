class CustomNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList { 
  constructor(value) {
    this.head = new CustomNode(value);
    this.tail = this.head;
    this.length = 1;
  }

  printList() {
    let currentNode = this.head;
    let output = '';
    while (currentNode !== null) {
      output += `-->${currentNode.value}`
      currentNode = currentNode.next;
    }
    console.log(output);
  }

  append(value) {
    const newNode = new CustomNode(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this.printList();
  }

  prepend(value) {
    const newNode = new CustomNode(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this.printList();
  }

  insert(index, value) {
    if (index <= 0) {
      return this.prepend(value);
    }
    if (index >= this.length) {
      return this.append(value);
    }
    const previousNode = this.getPreviousNode(index);

    const newNode = new CustomNode(value);
    newNode.next = previousNode.next;
    previousNode.next = newNode;
    this.length++;
    return this.printList();
  }

  remove(index) {
    if (index >= this.length || index < 0) {
      console.log('index not found');
      return;
    }
    const previousNode = this.getPreviousNode(index);
    previousNode.next = previousNode.next.next;
    this.length--;
    return this.printList();
  }

  getPreviousNode(index) {
    let previousNode = this.head;
    let counter = 1;
    while (counter !== index) {
      previousNode = previousNode.next;
      counter++;
    }
    return previousNode;
  }

  reverse() {
    if (this.length <= 1) {
      return this.printList();
    }
    let first = this.head;
    this.tail = first;
    let second = first.next;
    while (second) {
      const temp = second.next;
      second.next = first;
      first = second;
      second = temp;
    }
    this.head.next = null;
    this.head = first;
    return this.printList();
  }
}

const linkedList = new LinkedList(10);
linkedList.append(20);
linkedList.append(30);
linkedList.prepend(3);
linkedList.prepend(2);
linkedList.insert(100, 100);
linkedList.remove(-1);
linkedList.reverse();
