//A linked list is a linear data structure where wlwmwnts called nodes, are not stored contiguosly in memory.
//Instead, each node contains data and a reference, or link, to the next node in the sequence
//  Head                         unknownail
// node1 ==> node2 ==> node3 ==> node4 ==> null

export class _Node {
  //declare head: unknown;
  declare value: unknown;
  declare next: _Node | null;

  constructor(value: unknown) {
    this.value = value;
    this.next = null;
  }
}

export class LinkedList {
  declare head: _Node | null;
  declare tail: _Node | null;
  declare length: number;
  constructor(value?: unknown) {
    this.head = value ? new _Node(value) : null;
    this.tail = this.head;
    this.length = value ? 1 : 0;
  }

  push(value: unknown) {
    const newNode = new _Node(value);
    if (!this.head || !this.tail) {
      this.head = newNode;
      this.tail = newNode;
      this.length++;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
      this.length++;
    }
    return this;
  }

  pop() {
    //no Node in the LinkedList
    if (!this.head) {
      console.error(new Error('The LinkedList Contain no element'));
      return null;
    }
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length--;
      return this;
    }
    let temp = this.head;
    let prev = this.head;

    while (temp.next) {
      prev = temp;
      temp = temp.next;
    }

    this.tail = prev!;
    this.tail.next = null;
    this.length--;
    return temp;
  }

  pushMany(...Values: unknown[]) {
    for (let value of Values) {
      this.push(value);
    }
    return this;
  }

  unshift(value: unknown) {
    const newNode = new _Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }
    newNode.next = this.head;
    this.head = newNode;

    this.length++;
    return this;
  }

  shift() {
    const prevHead = this.head;
    if (!this.head) {
      console.error(new Error('This LinkedList is headless - Empty!!'));
      return null;
    }
    this.head = this.head.next;
    this.length--;

    if (this.length === 0) {
      this.tail = null;
    }
    return prevHead;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    return this.tail;
  }

  get(index: number) {
    if (index >= this.length) {
      console.error(
        new Error(
          `index ${index} is above the the range of LinkedList: ${this.length}`
        )
      );
      return null;
    }

    let temp = this.head;

    let i = 0;

    while (temp) {
      if (i === index) {
        return temp;
      }

      i++;
      temp = temp.next;
    }

    // for (let i = 1; i <= index; i++) {
    //   if (!temp) {
    //     return null;
    //   }
    //   temp = temp.next;
    // }

    return temp;
  }

  set(index: number, value: unknown) {
    const setNode = this.get(index);
    if (!setNode) return null;
    setNode.value = value;
    return setNode;
  }

  insert(index: number, value: unknown) {
    const newNode = new _Node(value);
    if (index >= this.length) {
      console.error(new Error(`Node at index ${index - 1} does not exist`));
      return null;
    }
    if (index === 0) {
      return this.unshift(value);
    }
    if (index === this.length - 1) {
      return this.push(value);
    }

    const temp = this.get(index - 1);
    newNode.next = temp!.next;
    temp!.next = newNode;
    this.length++;
    return this;
  }

  delete(index: number) {
    if (index >= this.length) {
      console.error(new Error(`Node at index ${index} does not exist`));
      return null;
    }
    if (index === 0) {
      return this.shift();
    }
    if (index === this.length - 1) {
      return this.pop();
    }

    const prevNode = this.get(index - 1);
    const deletedNode = prevNode!.next;
    prevNode!.next = deletedNode!.next;
    this.length--;
    return deletedNode;
  }

  clear() {
    this.head = null;
    this.tail = null;
    this.length = 0;
    return this;
  }

  reverse() {
    if (this.length === 0) {
      console.error(
        new Error(
          `The operation cannot be completed as there's no Node inside the double linked list`
        )
      );
      return null;
    }
    if (this.length === 1) {
      return this;
    }

    let temp = this.head;
    this.head = this.tail;
    this.tail = temp;
    let next = temp;
    let prev = null;

    //Using for loop
    // for (let i = 0; i <= this.length; i++) {
    //   if (!temp) break;
    //   next = temp.next;
    //   temp.next = prev;
    //   prev = temp;
    //   temp = next;
    // }

    //using while loop
    while (temp) {
      next = temp.next;
      temp.next = prev;
      prev = temp;
      temp = next;
    }
    return this;
  }
}
