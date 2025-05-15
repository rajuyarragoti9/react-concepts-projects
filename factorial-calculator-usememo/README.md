# Factorial Calculator with useMemo Hook

This React project demonstrates how to use the `useMemo` hook to memoize an expensive function — factorial calculation — so it only recalculates when necessary.

## 🚀 Features

- Calculates factorial of a given number
- Toggle between dark and light themes
- Uses `useMemo` to avoid unnecessary recomputation

## 🔍 Hook Used: useMemo

`useMemo(() => computeValue, [deps])` memorizes the returned value. The function only re-runs if the dependencies change.

## 🧮 How It Works

- The factorial function is heavy (on purpose).
- Even if the user toggles theme (re-renders the component), factorial won’t re-calculate unless the number changes.
