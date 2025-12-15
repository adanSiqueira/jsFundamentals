There are **three common ways** to run an HTML page using a server on a specific port.
Which one you use depends on whether you want *just hosting*, *live reload*, or *a real backend*.

Below are the simplest and most recommended options.

---

# ✅ **1. Easiest way (no installs): Python SimpleHTTPServer**

If you have Python installed (which you already do):

### **Run server on port 8000**

```bash
python -m http.server 8000
```

Then open in browser:

```
http://localhost:8000
```

This serves **all files in the current directory**, including your HTML.

---

# ✅ **2. Using Node.js (recommended for front-end learning)**

### Install a simple static server:

```bash
npm install -g serve
```

### Run it:

```bash
serve -p 3000
```

This will serve your HTML on:

```
http://localhost:3000
```

---

# ✅ **3. Using VS Code — Live Server extension (best for learning front-end)**

This is the most popular option for beginners.

### Steps:

1. Open your project folder in VS Code.
2. Install extension: **Live Server** by Ritwick Dey.
3. Right-click your `index.html` → **Open with Live Server**.

It will open something like:

```
http://127.0.0.1:5500/
```

✔ automatically reloads when you change the file
✔ perfect for HTML/CSS/JS learning

---

# 🔥 **4. If you want a real Node.js HTTP server**

Create a file `server.js`:

```js
import http from "http";
import fs from "fs";
import path from "path";

const server = http.createServer((req, res) => {
  fs.readFile("index.html", (err, data) => {
    if (err) {
      res.writeHead(404);
      return res.end("File not found");
    }
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(data);
  });
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
```

Run it:

```bash
node server.js
```

---

# 🧠 **Which should you use?**

* **Learning HTML/CSS/JS:** Live Server
* **Testing static files:** Python `http.server`
* **Full front-end + back-end learning:** Node.js server with Express or Vite
* **Production:** Nginx / Cloud provider

---

If you want, I can also show you:
✅ how to structure HTML/CSS/JS folders
✅ how to serve HTML using **Express.js**
✅ how to run a **React or Vite app** on a port

Just tell me what you want next.
