// Queues is also a storage of nodes with FIFO principles- Fist In First Out!

// * It implement a node folder/Holder and it behaves like a queue.

// !Node
export class _Node<T> {
  declare value: T;
  declare next: _Node<T> | null;

  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}

export class Queue<T> {
  declare first: _Node<T> | null;
  declare last: _Node<T> | null;
  declare length: number;

  constructor(value: T) {
    const newNode = new _Node(value);
    this.first = newNode;
    this.last = newNode;
    this.length = 1;
  }

  enqueue(value: T) {
    const newNode = new _Node(value);
    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
      this.length++;
      return this;
    }

    this.last!.next = newNode;
    this.last = newNode;
    this.length++;
    return this;
  }

  dequeue() {
    const oldLast = this.first;
    if (this.length === 0) {
      console.log();
      return null;
    }
    if (this.length === 1) {
      this.first = null;
      this.last = null;
      this.length--;
      return oldLast;
    }
    // let temp = this.first!;
    // let prev = this.first!;
    // while (temp.next) {
    //   prev = temp;
    //   temp = temp.next;
    // }

    // this.last = prev;
    // this.last.next = null;
    this.first = this.first!.next;
    oldLast!.next = null;
    this.length--;
    return oldLast;
  }
}
