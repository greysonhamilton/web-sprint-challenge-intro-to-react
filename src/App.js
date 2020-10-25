import React, { useState, useEffect } from "react";
import axios from "axios";
import Character from "./components/Character";
import "./App.css";
import Styled from "./components/Styled";

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
      {id.map((people) => {
        return (
          <Character
            key={people.name}
            name={people.name}
            birth_year={people.birth_year}
            height={people.height}
            mass={people.mass}
            eye-color={people.eye_color}
            hair_color={people.hair_color}
            gender={people.gender}
          />
        );
      })}
    </div>
  );
};

export default App