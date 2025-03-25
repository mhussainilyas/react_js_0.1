import React from "react";
import useFetch from "./useFetch";

const CustomHook = () => {
  const [data] = useFetch("https://jsonplaceholder.typicode.com/todos");
  return (
    <div>
      <ul>
        {data && data.map((todo) => <li key={Math.random()}>{todo.title}</li>)}
      </ul>
    </div>
  );
};

export default CustomHook;
