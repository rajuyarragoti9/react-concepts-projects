# 🎨 Theme Switcher with useContext Hook

This project demonstrates the use of the `useContext` hook in React to manage a global Light/Dark theme.

---

## 📘 React Concept: useContext

- `useContext` allows you to share global data (like themes or authentication) without prop-drilling.
- We use a `ThemeContext` to allow any component to access or update the theme.

---

## 📁 Folder Structure

```
theme-context-switcher/
├── src/
│ ├── App.js
│ ├── ThemeContext.js
│ ├── ThemeToggle.js
│ ├── App.css
│ └── index.js
└── README.md

```


### Learning Goals
Understand how to create and use context

Apply context for global state (theme)

Practice component-level composition with context