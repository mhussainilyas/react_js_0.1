import React, { useEffect, useState } from "react";

const FetchDataEffect = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        let response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        let result = await response.json();
        setData(result);
      } catch (error) {
        document.write(error.message);
      }
    }
    fetchData();
  }, []);
  return (
    <div>
      <ul>
        {data.length > 0 ? (
          data.map((d) => <li key={Math.random()}>{d.title}</li>)
        ) : (
          <p>Loading...</p>
        )}
      </ul>
    </div>
  );
};

export default FetchDataEffect;
