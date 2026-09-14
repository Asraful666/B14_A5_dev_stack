# Dev Stack
Project Name:Dev Stack.

Description of Dev Stack:
Dev Stack is a modern web application that helps developers explore different development technologies and build their ideal technology stack. Users can explore technologies, check their details, and add or remove technologies from their personal stack.


## 🛠️ Technologies Used

- React
- TypeScript
- Vite
- Tailwind CSS
- React Icons
- React Toastify
- JSON

## ✨ Features

### 1. Explore Technologies

Users can explore different frontend, backend, database, programming language, styling, and DevOps technologies with their description, category, difficulty, rating, and badge.

### 2. Build Your Own Stack

Users can add technologies to their personal stack, remove individual technologies, or remove all selected technologies. Duplicate technologies cannot be added twice.

### 3. Responsive Design

The website is designed to work smoothly on mobile, tablet, and desktop devices with a clean and simple user interface.

---

# ⚛️ React Questions & Answers

### 1. What is JSX, and why is it used in React?

JSX means JavaScript XML. It allows us to write HTML-like code inside JavaScript. We use JSX in React because it makes creating the UI easier and more readable.

---

### 2. What is the difference between props and state?

Props are used to pass data from a parent component to a child component. We normally don't change props inside the child.

State is used to store data inside a component, and we can change the state when needed.

Simply, **props are for passing data, and state is for managing data.**

---

### 3. What does the `useState` hook do, and where did you use it in this project?

`useState` is used to store and manage data in a React component. When the state changes, the component updates.

In my project, I used `useState` to store and manage the stack data.

---

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

`useEffect` is used when we need to perform something after the component renders.

In my project, I used `useEffect` to load the JSON data when the component first loaded.

---

### 5. Why does every item in a `.map()` list need a unique `key` prop?

We use a unique `key` for each item so React can identify each item properly.

It helps React understand which item has changed, added, or removed and update the UI efficiently.

---

### 6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing something on the screen only when a specific condition is true.

For example, in my project, when the stack is empty, I show an **"Your stack is empty"** message.

```jsx
{stack.length === 0 && <p>Your stack is empty.</p>}
```

If the stack has no items, the message will appear.

---

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

To send data from the parent to the child, I use **props**.

To send something from the child back to the parent, I pass a **function from the parent to the child** through props. Then the child calls that function with the data.

Simply:

**Parent → Child = Props**
**Child → Parent = Function through Props**.

