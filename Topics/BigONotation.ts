/**
 * Big O Notation is used to describe the performance characteristics of an algorithm:
 * - Time Complexity: How the execution time grows with input size
 * - Space Complexity: How the memory usage grows with input size
 */

/**
 * O(1) - Constant Time Complexity
 * The algorithm takes the same amount of time regardless of input size
 *
 * Examples:
 * 1. Accessing an array element by index
 *    array[0] // O(1)
 *
 * 2. Push/pop operations on a stack
 *    stack.push(item) // O(1)
 *    stack.pop() // O(1)
 *
 * 3. Basic arithmetic operations
 *    let sum = a + b // O(1)
 */

/**
 * O(n) - Linear Time Complexity
 * The execution time grows linearly with input size
 *
 * Examples:
 * 1. Linear search in an array
 *    function linearSearch(arr: number[], target: number): number {
 *        for(let i = 0; i < arr.length; i++) {
 *            if(arr[i] === target) return i;
 *        }
 *        return -1;
 *    }
 *
 * 2. Summing all elements in an array
 *    function sum(arr: number[]): number {
 *        let total = 0;
 *        for(let num of arr) total += num;
 *        return total;
 *    }
 */

/**
 * O(n²) - Quadratic Time Complexity
 * The execution time grows quadratically with input size
 *
 * Examples:
 * 1. Nested loops for comparing array elements
 *    function findPairs(arr: number[]): void {
 *        for(let i = 0; i < arr.length; i++) {
 *            for(let j = 0; j < arr.length; j++) {
 *                console.log(arr[i], arr[j]);
 *            }
 *        }
 *    }
 *
 * 2. Bubble Sort
 *    function bubbleSort(arr: number[]): number[] {
 *        for(let i = 0; i < arr.length; i++) {
 *            for(let j = 0; j < arr.length - i - 1; j++) {
 *                if(arr[j] > arr[j + 1]) {
 *                    [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
 *                }
 *            }
 *        }
 *        return arr;
 *    }
 */

/**
 * O(log n) - Logarithmic Time Complexity
 * The execution time grows logarithmically with input size
 * Very efficient for large datasets
 *
 * Examples:
 * 1. Binary Search (on sorted array)
 *    function binarySearch(arr: number[], target: number): number {
 *        let left = 0;
 *        let right = arr.length - 1;
 *
 *        while(left <= right) {
 *            let mid = Math.floor((left + right) / 2);
 *            if(arr[mid] === target) return mid;
 *            if(arr[mid] < target) left = mid + 1;
 *            else right = mid - 1;
 *        }
 *        return -1;
 *    }
 */

/**
 * O(n log n) - Linearithmic Time Complexity
 * Common in efficient sorting algorithms
 *
 * Examples:
 * 1. Merge Sort
 *    function mergeSort(arr: number[]): number[] {
 *        if (arr.length <= 1) return arr;
 *
 *        const mid = Math.floor(arr.length / 2);
 *        const left = mergeSort(arr.slice(0, mid));
 *        const right = mergeSort(arr.slice(mid));
 *
 *        return merge(left, right);
 *    }
 *
 * 2. Quick Sort (average case)
 */

/**
 * O(2ⁿ) - Exponential Time Complexity
 * The execution time doubles with each additional input
 *
 * Example:
 * 1. Recursive Fibonacci without memoization
 *    function fibonacci(n: number): number {
 *        if (n <= 1) return n;
 *        return fibonacci(n - 1) + fibonacci(n - 2);
 *    }
 */

/**
 * Space Complexity Examples:
 *
 * 1. O(1) - Constant Space:
 *    function sum(arr: number[]): number {
 *        let total = 0;  // Only one extra variable
 *        for(let num of arr) total += num;
 *        return total;
 *    }
 *
 * 2. O(n) - Linear Space:
 *    function doubleArray(arr: number[]): number[] {
 *        return arr.map(x => x * 2);  // Creates new array same size as input
 *    }
 *
 * 3. O(n²) - Quadratic Space:
 *    function createMatrix(n: number): number[][] {
 *        return Array(n).fill(0).map(() => Array(n).fill(0));
 *    }
 */

/**
 * Important Rules and Takeaways:
 *
 * 1. Drop Constants:
 *    O(2n) = O(n)      // Constants don't affect growth rate
 *    O(1/2 n) = O(n)   // Coefficients are ignored
 *    O(100) = O(1)     // Any constant is O(1)
 *
 * 2. Drop Non-Dominant Terms:
 *    O(n² + n) = O(n²)           // n² grows faster than n
 *    O(n³ + n² + n) = O(n³)      // n³ is the dominant term
 *    O(2ⁿ + n²) = O(2ⁿ)          // Exponential beats polynomial
 *
 * 3. Common Time Complexities (from fastest to slowest):
 *    O(1)       - Constant:     Direct access, simple operations
 *    O(log n)   - Logarithmic: Divide and conquer algorithms
 *    O(n)       - Linear:      Single loop through data
 *    O(n log n) - Linearithmic: Efficient sorting algorithms
 *    O(n²)      - Quadratic:   Nested loops
 *    O(n³)      - Cubic:       Triple nested loops
 *    O(2ⁿ)      - Exponential: Recursive algorithms without memoization
 *    O(n!)      - Factorial:   Permutations, brute force
 *
 * 4. Adding vs Multiplying Time Complexities:
 *    - Sequential operations: ADD
 *      for(i) {...} followed by for(j) {...} => O(n + m)
 *    - Nested operations: MULTIPLY
 *      for(i) { for(j) {...} } => O(n * m)
 *
 * 5. Best Case vs Average Case vs Worst Case:
 *    Example - Quick Sort:
 *    - Best/Average Case: O(n log n)
 *    - Worst Case: O(n²)
 */
