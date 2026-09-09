// it's also a single linked list but with additional prev prop.

export class _Node {
  //declare head: unknown;
  declare value: unknown;
  declare next: _Node | null;
  declare prev: _Node | null;

  constructor(value: unknown) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

export class DoubleLinkedList<T> {
  declare head: _Node | null;
  declare tail: _Node | null;
  declare length: number;

  constructor(value: T) {
    const newNode = new _Node(value);
    this.head = newNode;
    this.tail = newNode;
    this.length = 1;
  }

  public push(value: T) {
    const newNode = new _Node(value);
    if (!this.head || !this.tail) {
      this.head = newNode;
      this.tail = newNode;
    }
    this.tail.next = newNode;
    newNode.prev = this.tail;
    this.tail = newNode;

    this.length++;
    return this;
  }

  public pop() {
    if (!this.head || !this.tail) {
      console.error(new Error(`The Double Linked List is empty`));
      return null;
    }
    if (this.length === 1) {
      this.head == null;
      this.tail == null;
    }
    const oldTail = this.tail;
    this.tail = this.tail.prev!;
    this.tail.next = null;
    oldTail.prev = null;

    this.length--;
    return oldTail;
  }

  public unshift(value: T) {
    const newNode = new _Node(value);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    }
    newNode.next = this.head;
    this.head!.prev = newNode;
    this.head = newNode;
    this.length++;
    return this;
  }

  public shift() {
    const oldHead = this.head;
    if (this.length === 0) {
      console.error(
        new Error(
          `The operation cannot be completed as there's no Node inside the double linked list`
        )
      );
      return null;
    }
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length--;
      return oldHead;
    }
    this.head = this.head!.next;
    this.head!.prev = null;
    oldHead!.next = null;

    this.length--;
    return oldHead;
  }
}
