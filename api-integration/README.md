# 🌐 API Integration in React

A simple **React project** that demonstrates how to:

- Fetch data from an external API
- Handle loading and error states
- Implement a retry mechanism for failed requests
- Display the data in a clean HTML table

---

## 🚀 Features

- 📡 **API Fetching** using `fetch` inside `useEffect`
- ⏳ **Loading spinner/message** while fetching data
- ⚠️ **Error handling** with user-friendly messages
- 🔄 **Retry mechanism** on failures
- 📊 **Dynamic table rendering** of API data

---

## 🧩 Tech Stack

- **React** (with hooks: `useState`, `useEffect`)
- **JavaScript (ES6+)**
- **Fetch API**

---

## 📂 Project Structure

- **React** (with hooks: `useState`, `useEffect`)
- **JavaScript (ES6+)**
- **Fetch API**

---

## ⚙️ Core Logic

### 1. **State Management**

- `data`: Stores fetched API data
- `loading`: Tracks loading state
- `error`: Stores error messages
- `retryCount`: Tracks retry attempts

### 2. **Fetching Data**

```
const fetchData = async () => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const result = await response.json();
    setData(result);
    setError(null);
  } catch (error) {
    setError(error.message || "Something went wrong");
  } finally {
    setLoading(false);
  }
};
```

3. Retry Mechanism

```
const retry = () => {
  setLoading(true);
  setError(null);
  setRetryCount((prevCount) => prevCount + 1);
};
```

4. Error Handling

```
if (error) {
  return (
    <div>
      <p className="error">⚠️ Error: {error}</p>
      <button onClick={retry}>Retry</button>
    </div>
  );
}
```

## 🖥️ Example Output

When data is fetched successfully:

| ID  | Name      | Email             | City        |
| --- | --------- | ----------------- | ----------- |
| 1   | Leanne G. | Sincere@april.biz | Gwenborough |
| 2   | Ervin H.  | Shanna@melissa.tv | Wisokyburgh |

When API fails:

```
⚠️ Error: Failed to fetch data
[Retry Button]
```
