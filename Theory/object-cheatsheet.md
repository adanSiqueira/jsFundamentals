Below is a **complete, structured, and market-oriented JavaScript Objects Cheat Sheet**, focused on **syntax**, **usage**, **best practices**, and **common pitfalls**.

---

# 📘 JavaScript Objects Cheat Sheet

> Objects are **key–value collections** used to represent structured data.

```js
const user = {
  name: "Alice",
  age: 30,
  isAdmin: true
};
```

---

## 🔹 1. Creating Objects

### Object literal (most common)

```js
const obj = { a: 1, b: 2 };
```

### Using `new Object()`

```js
const obj = new Object();
obj.a = 1;
```

### Factory function

```js
function createUser(name) {
  return { name, role: "user" };
}
```

### Constructor function

```js
function User(name) {
  this.name = name;
}
const u = new User("Bob");
```

---

## 🔹 2. Accessing Properties

### Dot notation

```js
user.name;
```

### Bracket notation (dynamic keys)

```js
user["age"];

const key = "name";
user[key];
```

---

## 🔹 3. Adding, Updating & Deleting

```js
user.email = "a@b.com";   // add
user.age = 31;            // update
delete user.isAdmin;      // delete
```

---

## 🔹 4. Checking Properties

```js
"user" in obj;               // true / false
obj.hasOwnProperty("name");  // safer
```

---

## 🔹 5. Iterating Over Objects

### `for...in`

```js
for (let key in user) {
  console.log(key, user[key]);
}
```

### `Object.keys()`

```js
Object.keys(user); // ['name', 'age']
```

### `Object.values()`

```js
Object.values(user); // ['Alice', 30]
```

### `Object.entries()`

```js
Object.entries(user);
// [['name', 'Alice'], ['age', 30]]
```

---

## 🔹 6. Destructuring Objects

```js
const { name, age } = user;
```

### Renaming

```js
const { name: username } = user;
```

### Default values

```js
const { role = "guest" } = user;
```

---

## 🔹 7. Spread Operator (`...`)

### Copy object

```js
const copy = { ...user };
```

### Merge objects

```js
const merged = { ...a, ...b };
```

⚠️ **Shallow copy only**

---

## 🔹 8. Methods (Functions inside Objects)

```js
const car = {
  brand: "Tesla",
  drive() {
    console.log("Driving");
  }
};
```

---

## 🔹 9. `this` Keyword

```js
const person = {
  name: "Ana",
  greet() {
    console.log(this.name);
  }
};
```

⚠️ `this` depends on **call context**, not location.

---

## 🔹 10. Object Comparison (Important!)

### ❌ Reference comparison

```js
{} === {} // false
```

### ✅ Compare values

```js
JSON.stringify(a) === JSON.stringify(b);
```

(or deep comparison library)

---

## 🔹 11. Freezing & Sealing

### `Object.freeze()` (immutable)

```js
Object.freeze(user);
user.age = 99; // ignored
```

### `Object.seal()` (no new properties)

```js
Object.seal(user);
```

---

## 🔹 12. Prototype Basics

```js
const obj = {};
Object.getPrototypeOf(obj); // Object.prototype
```

```js
obj.__proto__; // legacy
```

---

## 🔹 13. Optional Chaining

```js
user.address?.city;
```

---

## 🔹 14. Nullish Coalescing

```js
let role = user.role ?? "guest";
```

---

## 🔹 15. Common Patterns

### Check if object is empty

```js
Object.keys(obj).length === 0;
```

### Convert object to array

```js
Object.entries(obj);
```

### Remove property immutably

```js
const { age, ...rest } = user;
```

---

## 🔹 16. Mutability Summary

| Operation         | Mutates           |
| ----------------- | ----------------- |
| `obj.a = 1`       | ✅                 |
| `delete obj.a`    | ✅                 |
| `{ ...obj }`      | ❌                 |
| `Object.assign()` | ⚠️ target mutates |

---

## 🧠 Mental Model

> Objects are **mutable**, **passed by reference**,
> keys are **strings (or symbols)**,
> order is **mostly preserved** (but don’t rely on it).

---

## ⭐ Best Practices

✔ Prefer `const` for objects
✔ Use destructuring
✔ Avoid mutating shared objects
✔ Use optional chaining
✔ Prefer immutability in React & state logic

---
