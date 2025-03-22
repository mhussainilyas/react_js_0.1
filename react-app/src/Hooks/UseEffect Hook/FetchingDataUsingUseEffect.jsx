import React, { useEffect, useState } from "react";

const FetchingDataUsingUseEffect = () => {
  // State
  const [data, setData] = useState([]);
  // useEffect() Hook
  useEffect(() => {
    const fetchData = async () => {
      let response = await fetch("https://jsonplaceholder.typicode.com/todos");
      let apiData = await response.json();
      if (apiData && apiData.length) {
        setData(apiData);
      }
    };

    fetchData();
  }, []);
  return (
    <ul>
      {data.map((todo) => (
        <li key={Math.random()}>{todo.title}</li>
      ))}
    </ul>
  );
};

export default FetchingDataUsingUseEffect;
