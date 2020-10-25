import React, { useState, useEffect } from "react";
import axios from "axios";
import Character from "./components/Character";
import "./App.css";
import styled from "styled-components";

const Container = styled.div`

  display: flex;
  flex-direction: column;
  `;

const Card = styled.div`

    display: flex;
    flex-wrap: wrap;
    `;

    const Title = styled.h1`

    color: black;
    font-family: 'Poller One', cursive;
    text-shadow: 3px 8px white;
    text-align: center;
    `;

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
      <Container>
        <Title>A Star War</Title>
          <Card>
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
          </Card>
      </Container>
    </div>

  );

};

export default App