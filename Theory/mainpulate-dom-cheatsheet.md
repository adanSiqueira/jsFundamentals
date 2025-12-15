Here is a **clean, compact, practical DOM manipulation cheat sheet** with the **main JavaScript commands** you’ll use 90% of the time — perfect for memorizing and real-world use.

---

# 🌐 **JavaScript DOM Manipulation — Cheat Sheet**

---

# 📍 **1. Selecting Elements**

### **By ID**

```js
document.getElementById("myId");
```

### **By Class**

```js
document.getElementsByClassName("myClass");
```

### **By Tag**

```js
document.getElementsByTagName("div");
```

### **Modern universal selectors**

```js
document.querySelector(".class");      // first match
document.querySelectorAll("div.item"); // all matches (NodeList)
```

---

# ✏️ **2. Changing Content**

### **Text only**

```js
element.textContent = "Hello!";
```

### **HTML content**

```js
element.innerHTML = "<strong>Bold</strong>";
```

### **Append text**

```js
element.innerText += " more text";
```

---

# 🎨 **3. Styling Elements**

### **Inline styles**

```js
element.style.color = "red";
element.style.backgroundColor = "black";
element.style.display = "none";
```

### **Add / remove classes**

```js
element.classList.add("active");
element.classList.remove("hidden");
element.classList.toggle("dark-mode");
```

---

# 🔧 **4. Working with Attributes**

### **Get**

```js
element.getAttribute("src");
```

### **Set**

```js
element.setAttribute("src", "image.png");
```

### **Remove**

```js
element.removeAttribute("disabled");
```

---

# 🧱 **5. Creating Elements**

```js
const newDiv = document.createElement("div");
newDiv.textContent = "Hello World";
document.body.appendChild(newDiv);
```

---

# 🔄 **6. Adding & Removing Elements**

### **Add**

```js
parent.appendChild(child);
parent.insertBefore(newChild, referenceChild);
```

### **Remove**

```js
element.remove();
parent.removeChild(child);
```

---

# 🧭 **7. Navigating the DOM**

```js
element.parentNode
element.children
element.firstElementChild
element.lastElementChild
element.nextElementSibling
element.previousElementSibling
```

---

# 🎧 **8. Event Listeners**

### **Common pattern**

```js
element.addEventListener("click", function() {
    console.log("Clicked!");
});
```

### **Examples**

```js
button.addEventListener("mouseover", () => {});
input.addEventListener("change", () => {});
form.addEventListener("submit", (e) => {
    e.preventDefault();
});
```

---

# 📝 **9. Reading/Writing Inputs**

```js
const value = document.querySelector("#name").value;
document.querySelector("#name").value = "John Doe";
```

---

# ⏳ **10. Timers** (often used with DOM)

```js
setTimeout(() => console.log("wait"), 1000);
setInterval(() => console.log("loop"), 1000);
```

---

# 🔥 **11. Useful Shortcuts**

### **Find and modify immediately**

```js
document.querySelector("#msg").textContent = "Done!";
```

### **Loop through selected items**

```js
document.querySelectorAll(".item").forEach(el => {
    el.style.color = "blue";
});
```

---

# ⚡ **12. DOM Ready (when HTML is loaded)**

Old:

```js
document.addEventListener("DOMContentLoaded", () => {
    console.log("ready");
});
```

Modern (modules):

```js
window.onload = () => console.log("ready");
```

---
