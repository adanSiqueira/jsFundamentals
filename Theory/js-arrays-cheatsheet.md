Below is a **clear, complete, and practical JavaScript Array (List) Manipulation Cheat Sheet**, focused on **real-world usage**, **immutability vs mutation**, and **interview-relevant methods**.

---

# 📘 JavaScript Array (List) Manipulation Cheat Sheet

> In JavaScript, a “list” is called an **Array**

```js
let arr = [1, 2, 3, 4, 5];
```

---

## 🔹 1. Creating Arrays

```js
let a = [1, 2, 3];
let b = new Array(3);       // [empty × 3]
let c = Array.of(1, 2, 3); // [1, 2, 3]
let d = Array.from("abc"); // ['a', 'b', 'c']
```

---

## 🔹 2. Accessing & Modifying Elements

```js
arr[0];          // first element
arr[arr.length - 1]; // last element

arr[1] = 99;     // modify element
```

---

## 🔹 3. Adding & Removing Elements (Mutates Array)

### ➕ Add

```js
arr.push(6);     // add to end
arr.unshift(0); // add to start
```

### ➖ Remove

```js
arr.pop();       // remove from end
arr.shift();    // remove from start
```

---

## 🔹 4. Slice vs Splice (Very Important)

### `slice()` → **does NOT mutate**

```js
let newArr = arr.slice(1, 4);
```

### `splice()` → **mutates**

```js
arr.splice(1, 2);         // remove 2 elements
arr.splice(1, 0, 99);     // insert
arr.splice(1, 1, 88);     // replace
```

---

## 🔹 5. Iteration Methods

### `forEach()` (no return)

```js
arr.forEach(x => console.log(x));
```

### `map()` (transforms → returns new array)

```js
let doubled = arr.map(x => x * 2);
```

### `filter()` (selects)

```js
let evens = arr.filter(x => x % 2 === 0);
```

### `reduce()` (accumulates)

```js
let sum = arr.reduce((acc, val) => acc + val, 0);
```

---

## 🔹 6. Searching

```js
arr.includes(3);     // true / false
arr.indexOf(3);      // index or -1
arr.find(x => x > 3); // first match
arr.findIndex(x => x > 3);
```

---

## 🔹 7. Sorting & Reversing

### Default (lexicographic ⚠️)

```js
[10, 2, 5].sort(); // [10, 2, 5]
```

### Numeric sort (correct)

```js
arr.sort((a, b) => a - b);
```

### Reverse

```js
arr.reverse();
```

---

## 🔹 8. Joining & Splitting

```js
arr.join(", ");        // "1, 2, 3"
"1,2,3".split(",");    // ["1", "2", "3"]
```

---

## 🔹 9. Combining Arrays

```js
let a = [1, 2];
let b = [3, 4];

let c = a.concat(b);
let d = [...a, ...b]; // modern best practice
```

---

## 🔹 10. Checking & Utility

```js
Array.isArray(arr); // true
arr.length;         // size
```

---

## 🔹 11. Copying Arrays (Avoid Reference Bugs)

### ❌ Wrong (shared reference)

```js
let b = a;
```

### ✅ Correct

```js
let b = [...a];
let b = a.slice();
let b = Array.from(a);
```

---

## 🔹 12. Flattening Arrays

```js
let nested = [1, [2, [3]]];
nested.flat();     // [1, 2, [3]]
nested.flat(2);    // [1, 2, 3]
```

---

## 🔹 13. Mutating vs Non-Mutating (Interview Favorite)

### 🔥 Mutates original array

* `push`
* `pop`
* `shift`
* `unshift`
* `splice`
* `sort`
* `reverse`

### ✅ Returns new array

* `map`
* `filter`
* `slice`
* `concat`
* `flat`

---

## 🔹 14. Common Patterns

### Remove duplicates

```js
let unique = [...new Set(arr)];
```

### Get max / min

```js
Math.max(...arr);
Math.min(...arr);
```

### Count occurrences

```js
let count = arr.reduce((acc, v) => {
  acc[v] = (acc[v] || 0) + 1;
  return acc;
}, {});
```

---

## 🧠 Mental Model

> **Arrays are objects passed by reference**
> Mutating methods change the original
> Functional methods return new arrays

---

## ⭐ Market Best Practices

✔ Prefer `map`, `filter`, `reduce`
✔ Avoid mutating arrays in React / functional code
✔ Use spread (`...`)
✔ Always define sort comparators

---
