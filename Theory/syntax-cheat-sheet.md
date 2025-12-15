Here is a **clean, practical, beginner-friendly JavaScript Syntax Cheat Sheet** with all the essentials you actually use daily.
Short, organized, and with examples. 🚀

---

# ⚡ **JavaScript Syntax Cheat Sheet (Modern JS)**

## 1. **Variables**

```js
let age = 23;       // block-scoped, reassignable
const PI = 3.14;    // block-scoped, NOT reassignable
var name = "Bob";   // function-scoped (legacy)
```

---

## 2. **Data Types**

```js
let number = 10;          // Number
let text = "Hello";       // String
let flag = true;          // Boolean
let nothing = null;       // null (intentional empty)
let missing;              // undefined (no value assigned)
let big = 123n;           // BigInt
let data = { a: 1 };      // Object
let items = [1, 2, 3];    // Array
let func = () => {};      // Function
```

---

## 3. **Operators**

### Arithmetic

```js
a + b; a - b; a * b; a / b; a % b; a ** b;
```

### Comparison

```js
5 == "5";   // true (loose)
5 === "5";  // false (strict)
5 !== 5;    // false
10 > 3;     // true
```

### Logical

```js
true && false; // false
true || false; // true
!true;         // false
```

### Nullish Coalescing

```js
let x = null ?? "default";  // "default"
```

### Optional Chaining

```js
user?.address?.city;
```

---

## 4. **Conditionals**

```js
if (age >= 18) {
  console.log("Adult");
} else if (age >= 13) {
  console.log("Teen");
} else {
  console.log("Kid");
}
```

### Ternary

```js
let status = age >= 18 ? "Adult" : "Minor";
```

### Switch

```js
switch (color) {
  case "red":
    console.log("Stop");
    break;
  case "green":
    console.log("Go");
    break;
  default:
    console.log("Unknown");
}
```

---

## 5. **Loops**

### `for`

```js
for (let i = 0; i < 5; i++) {
  console.log(i);
}
```

### `while`

```js
let n = 3;
while (n > 0) {
  n--;
}
```

### `for...of` (arrays)

```js
for (let item of ["a", "b"]) {
  console.log(item);
}
```

### `for...in` (objects)

```js
for (let key in user) {
  console.log(key, user[key]);
}
```

---

## 6. **Functions**

### Regular function

```js
function sum(a, b) {
  return a + b;
}
```

### Arrow function

```js
const sum = (a, b) => a + b;
```

### Default parameters

```js
function greet(name = "Guest") {
  console.log("Hello, " + name);
}
```

---

## 7. **Objects**

```js
const user = {
  name: "John",
  age: 25,
  greet() {
    console.log("Hi!");
  }
};

console.log(user.name);
user.greet();
```

### Object Destructuring

```js
let { name, age } = user;
```

---

## 8. **Arrays**

```js
const nums = [1, 2, 3];
nums.push(4);
```

### Array Destructuring

```js
const [first, second] = nums;
```

### Common Array Methods

```js
nums.map(x => x * 2);
nums.filter(x => x > 1);
nums.reduce((acc, x) => acc + x, 0);
nums.find(x => x === 2);
```

---

## 9. **Strings**

```js
const name = "John";
name.length;
name.toUpperCase();
```

### Template Literals

```js
let msg = `Hello, ${name}!`;
```

---

## 10. **Classes**

```js
class Person {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`Hi, I'm ${this.name}`);
  }
}

let p = new Person("Ana");
p.speak();
```

---

## 11. **Modules**

```js
// export.js
export const PI = 3.14;

// import.js
import { PI } from "./export.js";
```

---

## 12. **Promises & Async/Await**

### Promises

```js
fetchData()
  .then(result => console.log(result))
  .catch(err => console.error(err));
```

### Async/Await

```js
async function load() {
  try {
    const data = await fetchData();
    console.log(data);
  } catch (err) {
    console.error(err);
  }
}
```

---

## 13. **DOM Manipulation**

```js
document.querySelector("#btn").addEventListener("click", () => {
  console.log("Clicked!");
});
```

---

## 14. **JSON**

```js
let obj = JSON.parse('{"a":1}');
let str = JSON.stringify(obj);
```

---
