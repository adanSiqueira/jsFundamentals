**Complete, clean, and practical `.addEventListener()` cheat sheet**, designed for **learning**, **daily use**, and **interview readiness**.

---

# 📘 JavaScript `.addEventListener()` Cheat Sheet

> `.addEventListener()` attaches an event handler to a DOM element **without overwriting other handlers**.

```js
element.addEventListener(eventType, callback, options);
```

---

## 🔹 1. Basic Syntax

```js
button.addEventListener('click', function () {
  console.log('Clicked');
});
```

### With named function (best practice)

```js
function handleClick() {
  console.log('Clicked');
}

button.addEventListener('click', handleClick);
```

---

## 🔹 2. Most Common Event Types

### Mouse Events

```js
click
dblclick
mousedown
mouseup
mousemove
mouseenter
mouseleave
mouseover
mouseout
contextmenu
```

### Keyboard Events

```js
keydown
keyup
keypress (deprecated)
```

### Form Events

```js
submit
change
input
focus
blur
```

### Window / Document

```js
DOMContentLoaded
load
resize
scroll
```

---

## 🔹 3. Event Object (`event` / `e`)

```js
element.addEventListener('click', function (event) {
  console.log(event.target);
  console.log(event.type);
});
```

### Common properties

```js
event.target        // element clicked
event.currentTarget // element with listener
event.preventDefault()
event.stopPropagation()
```

---

## 🔹 4. Arrow Functions vs Regular Functions

### Arrow function

```js
button.addEventListener('click', () => {
  console.log(this); // ❌ NOT the element
});
```

### Regular function

```js
button.addEventListener('click', function () {
  console.log(this); // ✅ element
});
```

---

## 🔹 5. Multiple Listeners (Allowed!)

```js
button.addEventListener('click', fn1);
button.addEventListener('click', fn2);
```

✔ All listeners will execute
❌ Inline `onclick` would overwrite

---

## 🔹 6. Removing Event Listeners

```js
function handler() {
  console.log("Clicked");
}

button.addEventListener('click', handler);
button.removeEventListener('click', handler);
```

⚠️ Must pass the **same function reference**

---

## 🔹 7. Event Options (3rd Parameter)

```js
button.addEventListener('click', handler, {
  once: true,
  capture: false,
  passive: true
});
```

### Common options

| Option    | Meaning                     |
| --------- | --------------------------- |
| `once`    | Runs only once              |
| `capture` | Use capture phase           |
| `passive` | Improves scroll performance |

---

## 🔹 8. Event Propagation (Very Important)

### Bubbling (default)

```js
child → parent → document
```

### Capturing

```js
document → parent → child
```

```js
element.addEventListener('click', handler, true); // capture
```

---

## 🔹 9. Stop Bubbling

```js
event.stopPropagation();
```

---

## 🔹 10. Prevent Default Behavior

```js
form.addEventListener('submit', function (e) {
  e.preventDefault();
});
```

---

## 🔹 11. Event Delegation (Advanced & Best Practice)

### ❌ Bad (many listeners)

```js
buttons.forEach(btn => {
  btn.addEventListener('click', handler);
});
```

### ✅ Good (one listener)

```js
document.addEventListener('click', function (e) {
  if (e.target.matches('.btn')) {
    console.log('Button clicked');
  }
});
```

✔ Better performance
✔ Works for dynamic elements

---

## 🔹 12. DOMContentLoaded (Very Common)

```js
document.addEventListener('DOMContentLoaded', function () {
  // Safe to access DOM
});
```

---

## 🔹 13. Keyboard Example

```js
document.addEventListener('keydown', function (e) {
  if (e.key === 'Enter') {
    console.log('Enter pressed');
  }
});
```

---

## 🔹 14. Input Handling

```js
input.addEventListener('input', e => {
  console.log(e.target.value);
});
```

---

## 🔹 15. Window Events

```js
window.addEventListener('resize', () => {
  console.log(window.innerWidth);
});
```

---

## 🔹 16. Comparison with Inline Events

| Inline (`onclick`) | `addEventListener`     |
| ------------------ | ---------------------- |
| ❌ Bad practice     | ✅ Best practice        |
| One handler only   | Multiple handlers      |
| HTML + JS mixed    | Separation of concerns |
| Hard to remove     | Easy to manage         |

---

## 🧠 Mental Model

> `.addEventListener()`
> ✔ attaches behavior
> ✔ respects separation of concerns
> ✔ supports bubbling & delegation
> ✔ scales well

---

## ⭐ Best Practices

✔ Use named functions
✔ Prefer event delegation
✔ Avoid inline handlers
✔ Use `once` when needed
✔ Understand bubbling vs capturing

