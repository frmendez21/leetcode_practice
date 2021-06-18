// Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.

// Implement the LRUCache class:

// LRUCache(int capacity) Initialize the LRU cache with positive size capacity.
// int get(int key) Return the value of the key if the key exists, otherwise return -1.
// void put(int key, int value) Update the value of the key if the key exists. Otherwise, add the key-value pair to the cache. If the number of keys exceeds the capacity from this operation, evict the least recently used key.
// The functions get and put must each run in O(1) average time complexity.

class LRUCache {
    constructor(capacity) {
        this.cache = {};
        this.capacity = capacity;
        this.tail = null;
        this.head = null;
        this.length = 0;
    };

    put(key, value) {
        const node = this.cache[key];
        if(node) {
            this.remove(node);
            this.length --;
        } else if(this.length >= this.capacity) {
            delete this.cache[this.tail.key];
            this.remove(this.tail);
            this.length --;
        }

        const newNode = new Node(key, value);
        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        };
        this.cache[key] = this.head;
        this.length ++;
    };

    get(key) {
        const node = this.cache[key];
        if(node) {
            if(this.head !== node) {
                this.put(node.key, node.value)
            }
            return node.value;
        } else {
            return -1;
        }
    }

    remove(node) {
        if(node.prev !== null) {
            node.prev.next = node.next;
        } else {
            this.head = node.next;
        }

        if(node.next !== null) {
            node.next.prev = node.prev;
        } else {
            this.tail = node.prev;
        }
    }
};

class Node {
    constructor(key, value, next=null, prev=null) {
        this.key = key;
        this.value = value;
        this.next = next;
        this.prev = prev;
    };
};
let obj = new LRUCache(2);
obj.put(1, 1);
obj.put(2, 2);
console.log(obj.get(1))
obj.put(3, 3);
console.log(obj.get(2))
obj.put(4, 4);
console.log(obj.get(1))
console.log(obj.get(3))
console.log(obj.get(4))
// console.log(obj)


// Example 1:

// Input
// ["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get", "get"]
// [[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]
// Output
// [null, null, null, 1, null, -1, null, -1, 3, 4]

// Explanation
// LRUCache lRUCache = new LRUCache(2);
// lRUCache.put(1, 1); // cache is {1=1}
// lRUCache.put(2, 2); // cache is {1=1, 2=2}
// lRUCache.get(1);    // return 1
// lRUCache.put(3, 3); // LRU key was 2, evicts key 2, cache is {1=1, 3=3}
// lRUCache.get(2);    // returns -1 (not found)
// lRUCache.put(4, 4); // LRU key was 1, evicts key 1, cache is {4=4, 3=3}
// lRUCache.get(1);    // return -1 (not found)
// lRUCache.get(3);    // return 3
// lRUCache.get(4);    // return 4