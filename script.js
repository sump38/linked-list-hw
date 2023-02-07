class ListItem {
  constructor(data, next) {
    this.data = data;
    this._next = next ? next : null;
  }

  set next(item) {
    if(item instanceof ListItem) {
      this._next = item;
    } else {
      throw new Error('next can only be ListItem');
    }
  }

  get next() {
    return this._next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  push(data) {
    this.head = new ListItem(data, this.head);
  }

  pop() {
    if(this.head) {
      const itemToPop = this.head;
      this.head = itemToPop.next;
      return itemToPop.data;
    }
    return null;
  }

  get length() {
    let currentItem = this.head;
    let counter = 0;
    while(currentItem !== null) {
      counter++;
      currentItem = currentItem.next;
    }
    return counter;
  }

  toString() {
    //[data, data, data]
    let stringToPrint = '['
    let currentItem = this.head;
    while(currentItem !== null) {
      stringToPrint = stringToPrint + currentItem.data.toString();
      if(currentItem.next !== null) {
        stringToPrint += ',';
      }
      currentItem = currentItem.next;
    }
    stringToPrint += ']';
    return stringToPrint;
  }

}


const myList = new LinkedList();
myList.push(1);
myList.push(2);
myList.push(3);

console.log(myList.length);
console.log(myList.toString());