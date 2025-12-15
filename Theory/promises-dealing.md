Below is a **complete, practical, and didactic cheat sheet** showing **all major ways to work with Promises in JavaScript**, when to use each, and **why they exist**.

This is written with **learning + real-world usage + interview clarity** in mind.

---

# 🔮 JavaScript Promises — Usage Cheat Sheet

---

## 🧠 What is a Promise?

A **Promise** represents a value that will be available:

* **now** → fulfilled
* **later** → pending
* **never (error)** → rejected

```js
const promise = new Promise((resolve, reject) => {
  resolve('Success');
  // reject('Error');
});
```

---

## 🟡 Promise States

| State       | Meaning             |
| ----------- | ------------------- |
| `pending`   | Not resolved yet    |
| `fulfilled` | Operation succeeded |
| `rejected`  | Operation failed    |

---

## 1️⃣ `.then()` / `.catch()` (Classic Promise Handling)

### ✅ When to use:

* Simple chains
* Functional style
* Legacy or library-heavy code

```js
fetch('/api/users')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));
```

### ✔ Pros

* Explicit chaining
* No async function needed

### ❌ Cons

* Harder to read with many steps
* Nested chains become messy

---

## 2️⃣ `async / await` (Modern & Recommended)

### ✅ When to use:

* Most real projects
* Clean, readable async code
* Sequential logic

```js
async function getUsers() {
  try {
    const response = await fetch('/api/users');
    const data = await response.json();
    console.log(data);
  } catch (err) {
    console.error(err);
  }
}
```

### ✔ Pros

* Looks synchronous
* Easy error handling
* Easier debugging

### ❌ Cons

* Must be inside `async` function

---

## 3️⃣ Mixing `await` with `.then()` (⚠️ Avoid)

```js
const data = await fetch(url).then(r => r.json());
```

⚠️ Works, but:

* Reduces readability
* Confusing mental model

✔ Prefer:

```js
const response = await fetch(url);
const data = await response.json();
```

---

## 4️⃣ `Promise.all()` — Parallel Execution

### ✅ When to use:

* Independent requests
* Performance optimization

```js
const [users, posts] = await Promise.all([
  fetch('/users').then(r => r.json()),
  fetch('/posts').then(r => r.json())
]);
```

### ⚠️ Behavior

* If **one fails → all fail**

---

## 5️⃣ `Promise.allSettled()` — Parallel, Safe

### ✅ When to use:

* You want **all results**, even failures

```js
const results = await Promise.allSettled(promises);

results.forEach(r => {
  if (r.status === 'fulfilled') {
    console.log(r.value);
  } else {
    console.error(r.reason);
  }
});
```

---

## 6️⃣ `Promise.race()` — First to Finish

### ✅ When to use:

* Timeouts
* Fastest response wins

```js
Promise.race([
  fetch('/slow'),
  timeout(5000)
]);
```

---

## 7️⃣ `Promise.any()` — First Success

### ✅ When to use:

* Multiple fallbacks
* Redundant endpoints

```js
Promise.any([
  fetch('/server1'),
  fetch('/server2')
]);
```

⚠️ Rejects **only if all fail**

---

## 8️⃣ Sequential Execution (Await in Loop)

### ✅ When to use:

* Order matters
* Dependent async steps

```js
for (const id of ids) {
  const res = await fetch(`/item/${id}`);
  console.log(await res.json());
}
```

⚠️ Slower than parallel

---

## 9️⃣ Parallel in Loops (Correct Way)

❌ Wrong:

```js
ids.forEach(async id => {
  await fetch(id);
});
```

✔ Correct:

```js
await Promise.all(
  ids.map(id => fetch(id))
);
```

---

## 🔁 Error Handling Patterns

### `.catch()`

```js
promise.catch(err => console.error(err));
```

### `try / catch`

```js
try {
  await asyncFn();
} catch (err) {
  console.error(err);
}
```

✔ Prefer `try/catch` with `async/await`

---

## 🧪 Custom Promise Wrapper

```js
function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

await wait(1000);
```

---

## 🛑 Common Mistakes

### ❌ Forgetting `await`

```js
const data = fetch(url); // Promise, not data
```

---

### ❌ Using async inside forEach

```js
array.forEach(async () => { });
```

✔ forEach does not await

---

### ❌ Assuming Promise errors = HTTP errors

```js
fetch('/404').catch(...) // ❌ won't catch
```

✔ Must check `response.ok`

---

## 🧠 Mental Models

### Promise = IOU

> “I promise I’ll give you a value later.”

### `await` = pause function, not thread

> Only the async function pauses, not JS itself.

---

## 📊 Summary Table

| Pattern              | Use Case        |
| -------------------- | --------------- |
| `.then()`            | Simple chains   |
| `async/await`        | Default choice  |
| `Promise.all`        | Parallel + fast |
| `Promise.allSettled` | Partial success |
| `Promise.race`       | Timeouts        |
| `Promise.any`        | First success   |
| `try/catch`          | Error handling  |

---

## ✅ Best Practices

✔ Prefer `async / await`
✔ Use `Promise.all()` for parallel work
✔ Never use `async` inside `forEach`
✔ Always handle errors
✔ Keep promise chains flat

---
