import React, { useState, useEffect } from "react";
import axios from "axios";
import Character from "./Components/Character";

const App = () => {
  const [id, setId] = useState([]);

  useEffect(() => {
    axios
      .get("https://swapi.dev/api/people/")

      .then((res) => {
        console.log(res.data.results);
        setId(res.data.results);
      })

      .catch((err) => {
        console.log("This is not the code you are looking for.", err);
      });
  }, []);

  console.log(id);

  return (
    <div className="App">
      <h1 className="Header">A Star War</h1>
      {id.map((star) => {
        return (
          <Character
            key={star.name}
            name={star.name}
            birth_year={star.birth_year}
            height={star.height}
            mass={star.mass}
            eye-color={star.eye_color}
            hair_color={star.hair_color}
            gender={star.gender}
          />
        );
      })}
    </div>
  );
};

export default App