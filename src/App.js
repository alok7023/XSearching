import React, { useState } from "react";
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

  const fetchData = (query) => {
    const result = data.filter((item) => {
      return item.name.toLowerCase().includes(query.toLowerCase())
  });
    console.log(result);
    setSearchData(result);
  };
  const handleChange = (e) => {
    setSearchQuery(e.target.value);
    fetchData(e.target.value);
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
