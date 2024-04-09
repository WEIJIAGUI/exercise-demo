class LinkedNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  append(node) {
    const nnode = new LinkedNode(node);
    if (this.head === null) {
      this.head = nnode;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = nnode;
    }
    this.size++;
  }
  insert(value, index) {
    if (index < 0 || index > this.size) return false;
    const nnode = new LinkedNode(value);
    if (index === 0) {
      node.next = this.head;
      this.head = node;
    } else {
      let current = this.head;
      let prev = null;
      for (let i = 0; i < index; i++) {
        prev = current;
        current = current.next;
      }
      prev.next = nnode;
      nnode.next = current;
    }
    this.size++;
    return true;
  }
  remove(index) {
    if (index < 0 || index > this.size) return false;
    let current = this.head;
    let prev = null;
    if (index === 0) {
      this.head = this.head.next;
    } else {
      for (let i = 0; i < index; i++) {
        prev = current;
        current = current.next;
      }
      prev.next = current.next;
    }
    this.size--;
    return current.value;
  }
  get(index) {
    if (index < 0 || index > this.size) return null;
    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    return current.value;
  }
  print() {
    let current = this.head;
    while (current !== null) {
      console.log(current.value);
      current = current.next;
    }
  }
}

const list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);
list.append(4);
list.insert(5, 2);
list.remove(2);
console.log(list.get(3));

list.print();
