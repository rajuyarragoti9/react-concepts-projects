# 👤 useEffect API Fetch - React Project

This is a simple React project demonstrating the use of the `useEffect` hook by fetching a random user from an API on component mount.

---

## 🔍 What is `useEffect`?

The `useEffect` hook is used to perform **side effects** in functional components. Common use cases include:
- Data fetching
- Subscribing to events
- Updating the DOM

This project uses `useEffect` to call the Random User API when the component first loads.

---

## 🚀 Features

- Fetches random user data from [randomuser.me](https://randomuser.me)
- Shows loading state while data is being fetched
- Renders user info: image, name, email, location
- Styled with basic CSS

---


---

## 🧑‍💻 How It Works

- On mount, `useEffect` fetches data using `fetch()`.
- The user data is stored in the `user` state using `useState`.
- A loading state is used to show a loading message.
- Once the data is fetched, it's displayed in a styled card.

---


