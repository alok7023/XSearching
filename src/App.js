import React, { useState, useEffect } from "react";
import "./App.css";

const data = [
  {
    name: "Alok",
    age: 25,
  },
  {
    name: "Ravi",
    age: 26,
  },
  {
    name: "Ankit",
    age: 24,
  },
  {
    name: "Monu",
    age: 22,
  },
];

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchData, setSearchData] = useState(data);
  const [timer, setTimer] = useState(null);

  const fetchData = (query) => {
    const result = data.filter((item) => {
      return item.name.toLowerCase().includes(query.toLowerCase())
  });
    console.log(result);
    setSearchData(result);
  };
  useEffect(() => {
    return () => {
      clearTimeout(timer);
    }
  },[timer])
  const handleChange = (e) => {
    setSearchQuery(e.target.value);
    const timerId = setTimeout(() => {
      fetchData(e.target.value);
    },1000)
    setTimer(timerId);
  };
  return (
    <div className="App">
      <div>
        <h1>Implement Searching</h1>
        <input type="text" value={searchQuery} onChange={handleChange} />
      </div>
      <div className="list">
        <ol>
          {searchData.map((item) => <li>{item.name}</li>)}
        </ol>
      </div>
    </div>
  );
}

export default App;
