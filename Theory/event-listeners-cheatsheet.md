Here is a **complete, practical, ultra-useful cheat sheet** for **JavaScript Event Listeners** in DOM manipulation — with syntax, patterns, advanced techniques, and common events.

---

# 🌟 JavaScript DOM Event Listeners — Complete Cheat Sheet

---

# ✅ 1. Basic Event Listener Syntax

```js
element.addEventListener(eventType, callback);
```

* `eventType`: string, like `"click"`, `"input"`, `"keyup"`, `"mouseover"`, etc.
* `callback`: function to run when event fires.

Example:

```js
document.querySelector('#btn').addEventListener('click', () => {
    console.log('Button clicked!');
});
```

---

# ✅ 2. Removing Event Listeners

You **must pass the same function reference** to remove it.

```js
function greet() {
    console.log('hi');
}

btn.addEventListener('click', greet);
btn.removeEventListener('click', greet);
```

---

# ✅ 3. Common DOM Events (by category)

---

## 🎯 Mouse Events

| Event         | Description                          |
| ------------- | ------------------------------------ |
| `click`       | Fired when element is clicked        |
| `dblclick`    | Double click                         |
| `mousedown`   | Mouse button pressed                 |
| `mouseup`     | Mouse button released                |
| `mousemove`   | Pointer moves over element           |
| `mouseenter`  | Pointer enters element (no bubbling) |
| `mouseover`   | Pointer enters element (bubbles)     |
| `mouseleave`  | Pointer leaves element (no bubbling) |
| `mouseout`    | Pointer leaves element (bubbles)     |
| `contextmenu` | Right-click                          |

Example:

```js
box.addEventListener('mousemove', (e) => {
    console.log(`Mouse at ${e.clientX}, ${e.clientY}`);
});
```

---

## 🎹 Keyboard Events

| Event      | Description             |
| ---------- | ----------------------- |
| `keydown`  | Key pressed             |
| `keyup`    | Key released            |
| `keypress` | Deprecated; use keydown |

Example:

```js
document.addEventListener('keydown', (e) => {
    console.log(e.key);
});
```

---

## ⌨ Form & Input Events

| Event    | Description                                   |
| -------- | --------------------------------------------- |
| `input`  | Runs on every typed character                 |
| `change` | Runs when input loses focus AND value changed |
| `submit` | Form submitted                                |
| `focus`  | Element focused                               |
| `blur`   | Element lost focus                            |

Example:

```js
input.addEventListener('input', () => {
    console.log(input.value);
});
```

---

## 🧱 Window Events

| Event          | Description               |
| -------------- | ------------------------- |
| `load`         | Page fully loaded         |
| `scroll`       | User scrolling            |
| `resize`       | Window dimensions changed |
| `beforeunload` | Page about to close       |

Example:

```js
window.addEventListener('scroll', () => console.log("scrolling"));
```

---

## 📁 File Events

| Event       | Description                     |
| ----------- | ------------------------------- |
| `drag`      | Element is dragged              |
| `dragstart` | Drag begins                     |
| `dragover`  | Drag object is over a drop zone |
| `drop`      | Dropped into drop zone          |

---

# ✅ 4. Event Object (`event` / `e`)

Whenever an event is fired, a special object is passed to the handler:

```js
element.addEventListener('click', function (event) {
    console.log(event.target);  // Element that triggered event
    console.log(event.type);    // Event type
});
```

Useful properties:

* `event.target` → element clicked
* `event.currentTarget` → element *with listener*
* `event.key` → key pressed
* `event.clientX / event.clientY` → mouse coordinates
* `event.preventDefault()` → stops default browser behavior

---

# ✅ 5. Event Bubbling & Capturing

### Default phase: **bubbling**

Event travels:
**child → parent → document**

Add listener in capturing phase:

```js
element.addEventListener('click', handler, true);  // useCapture = true
```

Stop propagation:

```js
event.stopPropagation();
```

---

# ✅ 6. Event Delegation (IMPORTANT)

Use **one listener for many child elements**.

Instead of:

```js
document.querySelectorAll('li').forEach(li => {
    li.addEventListener('click', ()=> console.log('clicked'));
});
```

Use delegation:

```js
document.querySelector('ul').addEventListener('click', e => {
    if (e.target.tagName === 'LI') {
        console.log('Item clicked:', e.target.textContent);
    }
});
```

Advantages:

* fewer listeners
* works for dynamically created elements

---

# ✅ 7. Once, Passive & Other Options

Third parameter can be an object:

```js
element.addEventListener('click', handler, {
    once: true,
    passive: true, // improves scroll performance
    capture: false
});
```

---

# ✅ 8. Inline Events vs addEventListener

❌ Inline (bad practice)

```html
<button onclick="sayHi()">Hi</button>
```

✔ Preferred

```js
btn.addEventListener('click', sayHi);
```

Reasons:

* separates concerns (HTML clean)
* easier to remove listeners
* prevents global namespace pollution
* supports multiple listeners

---

# ✅ 9. Preventing Default Behavior

Example: prevent form refresh

```js
form.addEventListener('submit', e => {
    e.preventDefault();
    console.log('Form submitted without reload');
});
```

Example: prevent link navigation

```js
link.addEventListener('click', e => {
    e.preventDefault();
});
```

---

# ✅ 10. Listening for Multiple Events at Once

Manual approach:

```js
['click', 'mouseover'].forEach(evt =>
    element.addEventListener(evt, handler)
);
```

---

# ⭐ BONUS: Handy Real-world Examples

## Toggle a class on click

```js
btn.addEventListener('click', () => {
    box.classList.toggle('active');
});
```

---

## Detect Enter key

```js
input.addEventListener('keydown', e => {
    if (e.key === "Enter") {
        console.log("Enter pressed");
    }
});
```

---

## Mouse position inside element

```js
div.addEventListener('mousemove', e => {
    const x = e.offsetX;
    const y = e.offsetY;
});
```

---

## Delegation for delete buttons

```js
document.addEventListener('click', e => {
    if (e.target.matches('.delete-btn')) {
        e.target.parentElement.remove();
    }
});
```

---
