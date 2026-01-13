# Second Challenge — Tarmez Academy (Props Practice)

A simple React front-end project that demonstrates the use of **props**, **children**, and **reusable components**.

In this project, I built a UI that displays multiple **Posts** and **Buttons** using the same components, while passing different content to each via props and children. This helps visualize how React components can be dynamic and reusable.

---

## 🧠 Key Concepts Used

✔ Reusable React Components  
✔ Props & Children  
✔ Dynamic Content Rendering  
✔ JSX Inline Styles  
✔ Clean component structure

---

## 📦 Project Structure

src/
├── components/
│ ├── Post.jsx
│ └── Button.jsx
├── App.jsx
└── index.js



- **Post.jsx** → A reusable component that receives children for title, text, etc.  
- **Button.jsx** → A reusable button component that displays different texts.  
- **App.jsx** → Renders several Post & Button components with unique content.

---

## 📌 Features

✨ Each post has a unique title and description passed as children.  
✨ Each button has different text but uses the same component.  
✨ Inline styles are used directly in JSX for easy customization.  
✨ Demonstrates simple dynamic rendering in React.

---

## 🚀 Getting Started

### 🛠 Prerequisites

Make sure you have Node.js and npm installed:

```bash
node -v
npm -v



