Here’s a **clear, practical, and interview-ready `fetch()` cheat sheet**, focused on how it actually behaves in the browser and how you should use it in real projects.

---

# 🌐 `fetch()` Cheat Sheet (JavaScript)

## 📌 What is `fetch()`?

`fetch()` is the **modern JavaScript API** for making HTTP requests (AJAX) from the browser (and Node.js).

✔ Promise-based
✔ Replaces `XMLHttpRequest`
✔ Works with REST APIs
✔ Uses HTTP semantics directly

---

## Basic Syntax

```js
fetch(url, options)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));
```

Or with **async / await** (recommended):

```js
try {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
} catch (err) {
  console.error(err);
}
```

---

##  Making Requests

### 🔹 GET (default)

```js
fetch('/api/users');
```

---

### 🔹 POST (sending JSON)

```js
fetch('/api/users', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    name: 'Ana',
    age: 28
  })
});
```

---

### 🔹 PUT / PATCH

```js
fetch('/api/users/1', {
  method: 'PUT', // or PATCH
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ age: 29 })
});
```

---

### 🔹 DELETE

```js
fetch('/api/users/1', {
  method: 'DELETE'
});
```

---

## 📬 Response Handling

### 🔹 Checking HTTP Status

```js
const response = await fetch(url);

if (!response.ok) {
  throw new Error(`HTTP error: ${response.status}`);
}
```

✔ `response.ok` → status 200–299
✔ Fetch does **NOT** reject on HTTP errors automatically

---

### 🔹 Reading Response Body

```js
await response.json();   // JSON
await response.text();   // Plain text
await response.blob();   // Files
await response.formData();
```

⚠️ Can be read **only once**

---

## 📤 Sending Data Types

### 🔹 JSON

```js
headers: { 'Content-Type': 'application/json' }
body: JSON.stringify(data)
```

---

### 🔹 FormData (file uploads)

```js
const formData = new FormData(form);

fetch('/upload', {
  method: 'POST',
  body: formData
});
```

✔ Do NOT set `Content-Type` manually

---

## 🔐 Headers

```js
headers: {
  'Authorization': 'Bearer TOKEN',
  'Accept': 'application/json'
}
```

---

## 🍪 Credentials (Cookies)

```js
fetch('/api/profile', {
  credentials: 'include'
});
```

| Value         | Meaning            |
| ------------- | ------------------ |
| `omit`        | No cookies         |
| `same-origin` | Default            |
| `include`     | Cross-site cookies |

---

## 🕒 Timeout (Manual)

Fetch has **no built-in timeout**.

```js
const controller = new AbortController();

setTimeout(() => controller.abort(), 5000);

fetch(url, { signal: controller.signal });
```

---

## ❌ Aborting Requests

```js
const controller = new AbortController();

fetch(url, { signal: controller.signal });
controller.abort();
```

---

## ⚠️ Common Mistakes

### ❌ Forgetting `await response.json()`

```js
const data = response.json(); // Promise, not data
```

✔ Always await it

---

### ❌ Assuming fetch rejects on 404/500

```js
fetch('/404')
  .then(res => console.log('Still runs!'));
```

✔ Must check `response.ok`

---

### ❌ Forgetting to stringify JSON

```js
body: { name: 'Ana' } // ❌
```

---

## 🔁 Chaining Requests

```js
const user = await fetch('/user').then(r => r.json());
const posts = await fetch(`/posts?user=${user.id}`).then(r => r.json());
```

---

## 🔄 Parallel Requests

```js
const [users, posts] = await Promise.all([
  fetch('/users').then(r => r.json()),
  fetch('/posts').then(r => r.json())
]);
```

---

## 🌍 CORS Basics

Fetch is subject to **CORS rules**.

✔ Browser enforces it
✔ Server must allow it
✔ Not a JS error — a browser security feature

---

## 🧪 Full Example (Best Practice)

```js
async function getUsers() {
  try {
    const response = await fetch('/api/users');

    if (!response.ok) {
      throw new Error(`Error ${response.status}`);
    }

    return await response.json();
  } catch (err) {
    console.error(err);
  }
}
```

---

## 🧠 Mental Model (Important)

> `fetch()`
> → sends request
> → resolves when headers arrive
> → body must be read manually
> → HTTP errors ≠ JS errors

---

## 📊 Fetch vs Axios (Quick)

| Feature              | fetch | axios |
| -------------------- | ----- | ----- |
| Built-in             | ✔     | ❌     |
| Auto JSON parse      | ❌     | ✔     |
| Reject on HTTP error | ❌     | ✔     |
| Interceptors         | ❌     | ✔     |

---

## ✅ Summary

✔ Promise-based HTTP client
✔ Requires manual error handling
✔ Powerful but low-level
✔ Foundation of modern frontend networking

---
