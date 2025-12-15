#  HTML Events Cheat Sheet

HTML events are **actions or occurrences** that happen in the browser, which JavaScript can **listen to and react to**.

They are commonly used with:

* `addEventListener()`
* Inline HTML attributes (not recommended for modern code)

---

## 🖱️ Mouse Events

Triggered by mouse interactions.

| Event         | Description                        |
| ------------- | ---------------------------------- |
| `click`       | Element is clicked                 |
| `dblclick`    | Element is double-clicked          |
| `mousedown`   | Mouse button is pressed            |
| `mouseup`     | Mouse button is released           |
| `mouseenter`  | Mouse enters element (no bubbling) |
| `mouseleave`  | Mouse leaves element (no bubbling) |
| `mouseover`   | Mouse enters element (bubbles)     |
| `mouseout`    | Mouse leaves element (bubbles)     |
| `mousemove`   | Mouse moves over element           |
| `contextmenu` | Right-click menu                   |

```js
button.addEventListener('click', () => {
  console.log('Button clicked');
});
```

---

## ⌨️ Keyboard Events

Triggered by keyboard input.

| Event      | Description                 |
| ---------- | --------------------------- |
| `keydown`  | Key is pressed              |
| `keyup`    | Key is released             |
| `keypress` | Key is pressed (deprecated) |

```js
document.addEventListener('keydown', (event) => {
  console.log(event.key);
});
```

---

## 📝 Form Events

Triggered by form interactions.

| Event    | Description                   |
| -------- | ----------------------------- |
| `submit` | Form is submitted             |
| `change` | Value changes and loses focus |
| `input`  | Value changes immediately     |
| `focus`  | Element gains focus           |
| `blur`   | Element loses focus           |
| `reset`  | Form is reset                 |

```js
form.addEventListener('submit', (event) => {
  event.preventDefault();
  console.log('Form submitted');
});
```

---

## 🧭 Window & Document Events

Triggered by page lifecycle and window actions.

| Event              | Description                   |
| ------------------ | ----------------------------- |
| `DOMContentLoaded` | HTML fully loaded (no images) |
| `load`             | Page fully loaded             |
| `resize`           | Window resized                |
| `scroll`           | Page scrolled                 |
| `beforeunload`     | Page is about to close        |

```js
document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM ready');
});
```

---

## 📱 Touch Events (Mobile)

Triggered by touch interactions.

| Event         | Description       |
| ------------- | ----------------- |
| `touchstart`  | Touch begins      |
| `touchend`    | Touch ends        |
| `touchmove`   | Finger moves      |
| `touchcancel` | Touch interrupted |

```js
element.addEventListener('touchstart', () => {
  console.log('Touch started');
});
```

---

## 🎥 Media Events

Used with `<audio>` and `<video>` elements.

| Event          | Description               |
| -------------- | ------------------------- |
| `play`         | Media starts              |
| `pause`        | Media pauses              |
| `ended`        | Media finishes            |
| `volumechange` | Volume changes            |
| `timeupdate`   | Playback position changes |

```js
video.addEventListener('play', () => {
  console.log('Video playing');
});
```

---

## 🧱 Drag & Drop Events

Used for draggable elements.

| Event       | Description      |
| ----------- | ---------------- |
| `dragstart` | Drag begins      |
| `dragend`   | Drag ends        |
| `dragover`  | Drag over target |
| `drop`      | Element dropped  |

```js
element.addEventListener('dragstart', () => {
  console.log('Dragging');
});
```

---

## ⚠️ Error & Clipboard Events

| Event   | Description     |
| ------- | --------------- |
| `error` | Resource failed |
| `copy`  | Content copied  |
| `cut`   | Content cut     |
| `paste` | Content pasted  |

```js
document.addEventListener('copy', () => {
  console.log('Copied');
});
```

---

## 🚫 Inline HTML Events (NOT Recommended)

❌ Avoid this pattern:

```html
<button onclick="alert('Clicked')">Click</button>
```

✅ Prefer this:

```js
button.addEventListener('click', handler);
```

---

## 🧠 Event Object (Important!)

Every event provides an **event object**:

```js
element.addEventListener('click', (event) => {
  console.log(event.target);
  console.log(event.type);
});
```

---

## ✅ Best Practices

✔ Use `addEventListener`
✔ Avoid inline event handlers
✔ Prefer `DOMContentLoaded` over `load`
✔ Remove listeners when necessary

---