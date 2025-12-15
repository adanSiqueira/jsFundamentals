<h1 align="center"> JavaScript Fundamentals</h1>

<p align="center">
  <img src="https://img.shields.io/badge/JavaScript-ES6+-yellow?logo=javascript&logoColor=black" />
  <img src="https://img.shields.io/badge/HTML5-orange?logo=html5&logoColor=white" />
  <img src="https://img.shields.io/badge/CSS3-blue?logo=css3&logoColor=white" />
  <img src="https://img.shields.io/badge/DOM-Manipulation-green" />
  <img src="https://img.shields.io/badge/Frontend-Fundamentals-purple" />
</p>


A **study-focused repository** dedicated to **JavaScript fundamentals**, covering core concepts such as **arrays**, **objects**, **loops**, **DOM manipulation**, **events**, and **basic frontend architecture**.

This repository is meant to serve as personal learning notebook, conceptual reference and sandbox for experimentation

---

## 🗂️ Repo Structure

```text
js-fundamentals/
│
├── index.html
├── styles.css
├── scriptArraysObjectsLoops.js
├── scriptDomManipulation.js
├── tree.txt
├── .editorconfig
│
└── Theory/
    ├── addEventListener-cheatsheet.md
    ├── create-server.md
    ├── event-listeners-cheatsheet.md
    ├── js-arrays-cheatsheet.md
    ├── jsObject-vs-pythonObject.md
    ├── mainpulate-dom-cheatsheet.md
    ├── object-cheatsheet.md
    ├── security-on-frontend.md
    ├── String(value)-vs-value-dot-toString().md
    ├── string-methods-cheat-sheet.md
    └── syntax-cheat-sheet.md
```

---

## File Overview

### 🔹 `index.html`

A simple HTML page used as a **playground for DOM manipulation and event handling**.

Key points:

* Uses `defer` to safely load JavaScript
* Contains basic elements (`div`, `button`, `p`) for JS interaction
* Keeps HTML simple to focus on JavaScript behavior

---

### 🔹 `styles.css`

Basic CSS file to:

* Demonstrate **CSS selectors**
* Show interaction between JS and CSS
* Provide visual feedback when manipulating the DOM

---

### 🔹 `scriptArraysObjectsLoops.js`

Focuses on **core JavaScript data structures and iteration**.

Covered concepts:

* Arrays and their characteristics
* Array mutation (`push`, `sort`)
* Array transformation (`map`, `filter`)
* Iteration patterns:

  * `forEach`
  * `for...of`
* Objects:

  * Key–value structure
  * Nested objects and arrays
  * `Object.keys()`
  * `Object.entries()`

This file emphasizes:

* **Mutation vs immutability**
* **Declarative vs imperative iteration**
* Clear mental models for arrays and objects

---

### 🔹 `scriptDomManipulation.js`

Dedicated to **DOM manipulation using vanilla JavaScript**.

Covered topics:

* Creating elements (`createElement`)
* Modifying content (`textContent`)
* Styling elements via JS
* Appending and removing elements
* Event handling with `addEventListener`
* Proper DOM loading using `DOMContentLoaded`

This file reinforces:

* Separation of concerns
* Safe DOM access
* Best practices for event handling

---

### 🔹 `\Theory`

A curated collection of **theoretical notes and cheat sheets**, created during the study process.

Topics include:

* JavaScript syntax fundamentals
* Arrays, objects, and strings
* DOM manipulation
* Event listeners and propagation
* Security considerations on the frontend
* Conceptual comparison:

  * JavaScript objects vs Python objects
* JavaScript type coercion and conversions

These files are designed to be:

* Concise
* Didactic
* Reference-friendly

---

## How to Run

### Use a local server
```bash
# Python
python -m http.server

OR

# Node.js
npx serve
```

Then open:

```
http://localhost:8000
```
---
