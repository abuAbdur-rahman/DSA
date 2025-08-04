// import { MyArray } from "./Topics/MyArrays";
// import { FindFromArray, findPairs } from "./Topics/FindFromArray";

// import { Stack } from './Topics/Stack';
import { twoSum } from './Topics/LeetcodeProb';

// import {
//   chunk,
//   FizzBuzz,
//   ispallindrome,
//   MaxProfit,
//   reverseInteger,
//   reverseString,
//   sentenceCapitalization,
//   twoSum,
// } from "./Topics/MString";

//const names = ["john", "eric", "micheal"];

console.log('Welcome To DSA!!');

//Warming Up
// FindFromArray(names, "john")
// FindFromArray(names, "abdulazeez")
// findPairs()

//Custom Array
// const newArray = new MyArray()
// newArray.push('hello')
// newArray.push('world')
// newArray.push('Abdulazeez')
// newArray.push('Badmus')
// newArray.push('Adekiilekun')
// console.log(newArray)
// console.log(newArray.get(0),newArray.get(1))
// console.log(newArray.pop())
// console.log(newArray.shift())
// console.log(newArray)
// console.log(newArray.deleteByIndex(1), newArray.deleteByIndex(1))
// newArray.deleteByIndex(91)
// console.log(newArray)

// // Strings...
// const myString = "Hello";
// console.log(reverseString(myString));
// console.log(ispallindrome("bab"));
// console.log(reverseInteger(1234));
// console.log(sentenceCapitalization("hello world"));
// //FizzBuzz(20);

// const stockPrices = [1000, 31, 5, 7, 12, 9, 800, 7, 5, 80];
// console.log(MaxProfit(stockPrices));
// console.log(chunk([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3));
// console.log(chunk([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2));
// console.log(chunk([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 1));
// console.log(chunk([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5));
// console.log(chunk([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 10));
// console.log(chunk([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 20));

// //
// console.log("Two Sum");
// console.log(twoSum([1, 2, 3, 4], 3));
// console.log(twoSum([1, 2, 3, 4], 7));
// console.log(twoSum([1, 2, 3, 4, 5, 6, 7], 16))s;

// const MyLinkedList = new LinkedList(2);
// //console.log(MyLinkedList);
// //console.log(MyLinkedList.push(4));
// //console.log(MyLinkedList.pop());
// //console.log(MyLinkedList.unshift(10));
// MyLinkedList.push(4);
// MyLinkedList.push(6);
// MyLinkedList.push(8);
// console.log('🚀 ~ MyLinkedList:', MyLinkedList.reverse());
// console.log('🚀 ~ MyLinkedList:', MyLinkedList.get(1));
// console.log('🚀 ~ MyLinkedList:', MyLinkedList.get(2));

//MyLinkedList.shift();
// //console.log(MyLinkedList.get(0));
// //MyLinkedList.shift();
// // console.log(MyLinkedList.get(1));
// // console.log(MyLinkedList.get(2));
// // console.log(MyLinkedList.get(3));
// //console.log(MyLinkedList.set(0, 5));
// MyLinkedList.insert(0, 5);
// MyLinkedList.insert(1, 20);
// MyLinkedList.insert(5, 4);
// console.log(MyLinkedList.get(1), MyLinkedList.get(0), MyLinkedList.get(5));

// const MyDoubleLinkedList = new DoubleLinkedList<number>(2);
// MyDoubleLinkedList.push(4);
// MyDoubleLinkedList.pop();
// // console.log('🚀 ~ MyDoubleLinkedList:', MyDoubleLinkedList);
// MyDoubleLinkedList.unshift(6);
// // console.log('🚀 ~ MyDoubleLinkedList:', MyDoubleLinkedList);
// MyDoubleLinkedList.shift();
// //MyDoubleLinkedList.shift();
// console.log('🚀 ~ MyDoubleLinkedList:', MyDoubleLinkedList);

// Stack
// const MyStack = new Stack(2);
// MyStack.push(-4);
// MyStack.push(4);
// MyStack.push(0);
// console.log('🚀 ~ MyStack ~ _Node:', MyStack.min());

// const LinkedList1 = new LinkedList(2);
// LinkedList1.pushMany(3, 4, 5, 6, 7);
// console.log('🚀 ~ LinkedList1:', LinkedList1);

// const MyQueue = new Queue('Abdulazeez');
// MyQueue.enqueue('Adekiilekun');
// MyQueue.dequeue();
// MyQueue.dequeue();
// console.log('🚀 ~ MyQueue:', MyQueue);

// ! LeetCode
// const case1 = isValidParenthesis('[{}]');
// console.log('🚀 ~ case1:', case1);
// const case2 = isValidParenthesis('(){}[]');
// console.log('🚀 ~ case2:', case2);
// const case3 = isValidParenthesis('}(){}{');
// console.log('🚀 ~ case3:', case3);

//console.log(reverseString('Hello World'));

// const sentense = 'Hello Hello there welcome welcome';
// console.log('🚀 ~ sentense:', wordCounter(sentense));

console.log(twoSum([2, 7, 9, 11], 9));
console.log(twoSum([2, 7, 9, 11], 11));
console.log(twoSum([2, 6, 5, 6], 12));

// ! Hash Table

// const MyHashTable = new HashTable();
// console.log('🚀 ~ MyHashTable:', MyHashTable);
// MyHashTable.set('john', '12345');
// MyHashTable.set('abdulazeez', '97890');
// MyHashTable.set('hxn', '01234');

// console.log('🚀 ~ MyHashTable:', MyHashTable);
// //console.log(MyHashTable.get('john'));
// console.log('🚀 ~ All Keys:', MyHashTable.getAllValues());
