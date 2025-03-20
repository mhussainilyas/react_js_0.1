import React, { useState } from "react";

let obj = {
  title: "Equalizer-03",
  ratings: 7,
};

const StateWithObjects = () => {
  // State
  const [movie, setMovie] = useState(obj);

  // Destructuring
  const { title, ratings } = movie;

  // Event Handler
  const changeRatings = () => {
    // 1st Method
    // let copyMovie = { ...movie, ratings: 10 };
    // setMovie(copyMovie);

    // 2nd Method
    setMovie({ ...movie, ratings: 17 });
  };

  const changeTitle = () => {
    setMovie({ ...movie, title: "The Queen Of Tears" });
  };

  return (
    <div>
      <p>{title}</p>
      <p>{ratings}</p>
      <button onClick={changeRatings}>Change Ratings</button>
      <button onClick={changeTitle}>Change Title</button>
    </div>
  );
};

export default StateWithObjects;
