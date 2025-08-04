// Stacks is also a storage of nodes with LIFO principles- Last In First Out!

// * It implement a node folder/Holder and it behaves like a stack.

// !Node
export class _Node {
  declare value: number;
  declare next: _Node | null;

  constructor(value: number) {
    this.value = value;
    this.next = null;
  }
}

// !Stack
export class Stack {
  declare top: _Node | null;
  declare length: number;

  constructor(value: number) {
    this.top = new _Node(value);
    this.length = 1;
  }

  public push(value: number) {
    const newNode = new _Node(value);
    newNode.next = this.top;
    this.top = newNode;
    this.length++;
    return this;
  }

  public pop() {
    if (this.length === 0) {
      console.error(
        new Error(
          `The operation cannot be completed as there's no Node inside the double linked list`
        )
      );
      return null;
    }
    if (this.length === 1) {
      this.top = null;
    }
    const oldTop = this.top;
    this.top = this.top!.next;
    oldTop!.next = null;
    this.length--;
    return oldTop;
  }

  public min() {
    if (this.length === 0) {
      console.error(
        new Error(
          `The operation cannot be completed as there's no Node inside the double linked list`
        )
      );
      return null;
    }

    let temp = this.top!;
    let min = this.top!.value;

    while (temp.next) {
      min = Math.min(min, temp.value);
      temp = temp.next;
    }

    return min;
  }
}
