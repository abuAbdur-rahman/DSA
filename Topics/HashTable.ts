// ! Hash Table ==> A Data structure used to store a key-value pair

// We're using Hash function ==> Like a translator, with input, size: any (key) and converting to fixed-size value (hash code)
// which can be used as index within the hash table's internal array.
// The process of maping arbitruary keys to fixed-length indices is caled Hashing!!

export default class HashTable {
  declare keyMap: Array<Array<[string, unknown]>>;

  constructor(size: number = 10) {
    this.keyMap = new Array(size);
  }

  _HashFunction(key: string) {
    let sum = 0;
    const PRIME_NUMBER = 31;

    for (let i = 0; i < Math.min(key.length, 100); i++) {
      const charCode = key.charCodeAt(i) - 96;

      sum = (sum * PRIME_NUMBER + charCode) % this.keyMap.length;
    }
    return sum;
  }

  set(key: string, value: unknown) {
    const index = this._HashFunction(key);

    if (!this.keyMap[index]) this.keyMap[index] = [];

    // Check if key already exists (for updating)
    for (let i = 0; i < this.keyMap[index].length; i++) {
      const [existingKey] = this.keyMap[index][i];
      if (existingKey === key) {
        // Update existing value
        this.keyMap[index][i][1] = value;
        return this;
      }
    }

    this.keyMap[index].push([key, value]);
    return this;
  }

  get(key: string) {
    const index = this._HashFunction(key);
    const bucket = this.keyMap[index];

    if (!bucket) return undefined;

    for (const [existingKey, value] of bucket) {
      if (existingKey === key) {
        return value;
      }
    }
    return undefined;
  }

  getAllKeys() {
    const keys: string[] = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (const j of this.keyMap[i]) {
          keys.push(j[0]);
        }
      }
    }
    return keys;
  }

  getAllValues() {
    const keys: unknown[] = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (const j of this.keyMap[i]) {
          keys.push(j[1]);
        }
      }
    }
    return keys;
  }
}
9;
