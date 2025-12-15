Here it is — a **clean, modern, and practical JavaScript String Methods Cheat Sheet** with the most important methods you will actually use daily.
Organized by category, with short examples. 🚀

---

# ⚡ **JavaScript String Methods Cheat Sheet**

## 🎯 **1. Checking & Searching**

### `.includes(substring)`

Checks if a string contains something.

```js
"JavaScript".includes("Script"); // true
```

### `.startsWith(prefix)`

```js
"Hello".startsWith("He");  // true
```

### `.endsWith(suffix)`

```js
"photo.jpg".endsWith(".jpg");  // true
```

### `.indexOf(substring)`

Returns the index or `-1`.

```js
"hello".indexOf("l");  // 2
```

### `.lastIndexOf()`

```js
"hello".lastIndexOf("l"); // 3
```

### `.search(regex)`

```js
"abc123".search(/\d/);  // 3
```

---

## ✂️ **2. Cutting & Extracting**

### `.slice(start, end)`

The most used: supports negative indexes.

```js
"JavaScript".slice(0, 4);   // "Java"
"JavaScript".slice(-6);     // "Script"
```

### `.substring(start, end)`

Like `slice`, but **no negative indexes**.

```js
"Hello".substring(1, 4); // "ell"
```

### `.substr(start, length)` (deprecated)

```js
"Hello".substr(1, 3); // "ell"
```

---

## 🧱 **3. Changing Case**

### `.toUpperCase()`

```js
"hello".toUpperCase(); // "HELLO"
```

### `.toLowerCase()`

```js
"HELLO".toLowerCase(); // "hello"
```

---

## 🔧 **4. Modifying Strings**

### `.trim()`

```js
"  hi  ".trim(); // "hi"
```

### `.trimStart()` / `.trimEnd()`

```js
"  hi".trimStart(); // "hi"
```

### `.repeat(n)`

```js
"ha".repeat(3); // "hahaha"
```

### `.replace(what, with)`

```js
"Hello Bob".replace("Bob", "John"); // "Hello John"
```

### `.replaceAll()`

```js
"aa_bb_cc".replaceAll("_", "-"); // "aa-bb-cc"
```

### `.padStart(length, char)`

```js
"5".padStart(3, "0"); // "005"
```

### `.padEnd()`

```js
"5".padEnd(3, "0"); // "500"
```

---

## 🧩 **5. Splitting & Joining**

### `.split(separator)`

Creates an array.

```js
"1,2,3".split(","); // ["1", "2", "3"]
```

### `.join()` (Array method but used with strings)

```js
["a", "b"].join("-"); // "a-b"
```

---

## 🔤 **6. Accessing Characters**

### `.charAt(index)`

```js
"ABC".charAt(1); // "B"
```

### Access by index

```js
"ABC"[1]; // "B"
```

### `.charCodeAt(index)`

```js
"A".charCodeAt(0); // 65
```

---

## 🧪 **7. Regular Expressions Support**

### `.match()`

```js
"abc123".match(/\d+/); // ["123"]
```

### `.matchAll()`

```js
[... "a1b2".matchAll(/\d/g)]; // ["1", "2"]
```

### `.replace(regex, newValue)`

```js
"abc123".replace(/\d/g, "*"); // "abc***"
```

---

## 🚀 **8. Converting Strings**

### `String(value)`

```js
String(123); // "123"
```

### `.toString()`

```js
(99).toString(); // "99"
```

---

# 🔥 **Most Common Real-World Patterns**

### 1. Capitalizing first letter

```js
name = name[0].toUpperCase() + name.slice(1);
```

### 2. Cleaning user input

```js
input.trim().toLowerCase();
```

### 3. Splitting and trimming

```js
" a, b , c ".split(",").map(s => s.trim());
```

### 4. Masking IDs or phones

```js
"123456789".slice(-4).padStart(9, "*"); // "*****6789"
```

---

# Want more?

I can generate:
✔ a cheat sheet for arrays
✔ a cheat sheet comparing JavaScript strings vs Python strings
✔ a printable PDF version
✔ exercises to practice these string methods

Just tell me!
