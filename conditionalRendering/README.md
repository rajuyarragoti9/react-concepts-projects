# 🌗 React Conditional Rendering - Theme Toggle App

This project demonstrates **conditional rendering in React** with a **theme toggle (Light/Dark Mode)** feature.  
It also covers **state management with `useState`**, **persisting theme preference using `localStorage`**, and **optimizations with `React.memo` and `useCallback`**.

---

## 🚀 Features
- ✅ Toggle between **Light Theme** and **Dark Theme**
- ✅ Save theme preference in **localStorage**
- ✅ Automatically apply theme on page reload
- ✅ Optimized re-renders with **React.memo** and **useCallback**

---

## 🛠️ Technologies Used
- **React** (Functional Components + Hooks)
- **JavaScript (ES6+)**
- **CSS for styling**
- **localStorage** (for persistence)

---

## 📖 How It Works
1. **Theme State**  
   - Uses `useState` to track the current theme (`isDarkTheme`).
2. **Persist Preference**  
   - Uses `useEffect` to update `localStorage` whenever theme changes.
3. **Conditional Rendering**  
   - Renders styles and text (`Dark Theme` / `Light Theme`) based on the state.
4. **Optimization**  
   - `ThemeButton` is memoized with `React.memo` to avoid unnecessary re-renders.
   - `toggleTheme` can be memoized with `useCallback`.

---

## 🖥️ Running the Project

Created using Vite 

1. Clone the repo:
   ```git clone https://github.com/rajuyarragoti9/theme-toggle-app.git```
Navigate to the folder: ```cd theme-toggle-app```
Install dependencies:```npm install```
Start the dev server:```npm run dev```
Open http://localhost:5173 in your browser.