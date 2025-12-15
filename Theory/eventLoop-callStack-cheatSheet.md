Below is a **complete, didactic, and theory-first cheat sheet** on the **Call Stack** and **Event Loop**, written to give you a **solid mental model** (this is *core knowledge* for JS interviews and real-world debugging).

---

# 🔁 JavaScript Event Loop & Call Stack — Cheat Sheet

---

## Big Picture (One Sentence)

> **JavaScript is single-threaded**, but it feels asynchronous because the **Event Loop** coordinates **queues of tasks** with the **Call Stack**.

---

## 1️⃣ Call Stack

### 📌 What is the Call Stack?

The **Call Stack** is a **LIFO** (Last In, First Out) data structure that keeps track of **function execution**.

Every time a function is called:

* It’s **pushed** onto the stack
* When it finishes, it’s **popped** off

---

### 📦 Example

```js
function a() {
  b();
}

function b() {
  c();
}

function c() {
  console.log('Hello');
}

a();
```

**Call Stack flow:**

```
| c() |
| b() |
| a() |
|_____|  ← bottom
```

---

### ⚠️ Stack Overflow

```js
function infinite() {
  infinite();
}
```

❌ Too many function calls → stack runs out of space.

---

## 2️⃣ JavaScript Is Single-Threaded

✔ One call stack
✔ One thing executing at a time
✔ No true parallel execution (in main thread)

This prevents:

* Race conditions
* Memory corruption

But creates a problem…

---

## 3️⃣ Blocking the Call Stack

```js
while (true) {}
```

❌ Freezes the browser
❌ UI cannot render
❌ Events cannot be processed

→ JS must **never block the stack**

---

## 4️⃣ Web APIs (Browser Environment)

JavaScript delegates async work to **Web APIs**:

| API        | Examples                    |
| ---------- | --------------------------- |
| Timers     | `setTimeout`, `setInterval` |
| Networking | `fetch`, `XHR`              |
| DOM        | Events                      |
| Others     | `requestAnimationFrame`     |

These are **not part of JS itself**, but of the runtime.

---

## 5️⃣ Task Queue (Macrotask Queue)

Stores **callbacks** ready to run after async operations finish.

Examples:

* `setTimeout`
* `setInterval`
* DOM events

---

### Example

```js
setTimeout(() => console.log('timeout'), 0);
console.log('sync');
```

Output:

```
sync
timeout
```

Because:

* `setTimeout` callback goes to **task queue**
* Stack must be empty first

---

## 6️⃣ Microtask Queue (Higher Priority)

Used for **Promises** and related APIs.

Examples:

* `Promise.then`
* `queueMicrotask`
* `MutationObserver`

✔ Microtasks run **before** macrotasks

---

### Example

```js
setTimeout(() => console.log('timeout'), 0);

Promise.resolve().then(() => console.log('promise'));

console.log('sync');
```

Output:

```
sync
promise
timeout
```

---

## 7️⃣ Event Loop (The Orchestrator)

### 📌 What is the Event Loop?

The **Event Loop** constantly:

1. Checks if the call stack is empty
2. Executes all **microtasks**
3. Takes **one macrotask**
4. Repeats forever

---

### 🔁 Event Loop Cycle

```
Call Stack → Microtask Queue → Macrotask Queue
```

Microtasks always **drain completely** before next macrotask.

---

## 8️⃣ Visual Execution Timeline

```js
console.log('A');

setTimeout(() => console.log('B'), 0);

Promise.resolve().then(() => console.log('C'));

console.log('D');
```

### Execution Order:

```
A
D
C
B
```

---

## 9️⃣ Why Promises Are “Faster” Than setTimeout

Not faster — **higher priority**.

Promises:

* Go to microtask queue
* Executed before timers

---

## 🔄 requestAnimationFrame

Runs **before repaint**, after stack clears.

Used for:

* Animations
* UI updates

```js
requestAnimationFrame(() => {
  console.log('paint frame');
});
```

---

## 10️⃣ Common Interview Traps

### ❌ “setTimeout 0 runs immediately”

→ No. It waits for the stack + microtasks

---

### ❌ “Promises run asynchronously”

→ The **executor runs sync**, `.then()` is async

```js
new Promise(() => console.log('sync'));
```

---

### ❌ “JS runs async”

→ JS is synchronous; the **runtime is async**

---

## 11️⃣ Mental Models (Very Important)

### 🧠 Call Stack

> “What JS is doing *right now*”

### 🧠 Event Loop

> “Who gets to run next?”

### 🧠 Microtask Queue

> “High priority callbacks”

### 🧠 Macrotask Queue

> “Regular callbacks”

---

## 12️⃣ When This Knowledge Matters

✔ Debugging async bugs
✔ Avoiding UI freezes
✔ Writing correct Promise code
✔ Performance optimization
✔ Interviews (VERY common topic)

---

## 📊 Summary Table

| Component       | Role                  |
| --------------- | --------------------- |
| Call Stack      | Executes functions    |
| Web APIs        | Handle async work     |
| Microtask Queue | Promises              |
| Macrotask Queue | Timers & events       |
| Event Loop      | Coordinates execution |

---

## ✅ Golden Rules

✔ Never block the stack
✔ Prefer Promises over timers
✔ Understand execution order
✔ Microtasks always run first

---

## 🧪 One-Line Rule to Remember

> **“Empty stack → run microtasks → run one macrotask → repeat.”**

