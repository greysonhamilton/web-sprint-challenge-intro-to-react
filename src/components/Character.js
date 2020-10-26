import React from "react";
import styled from "styled-components";

const Stats = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    width: 40%;
    `;

const Name = styled.h2`

    color: black;
    font-family: 'Poller One', cursive;
    text-shadow: 3px 8px white;
    `;

const Info = styled.p`

    color: white;
    text-shadow: 0 2px black;
`;



const Character = (props) => {

  return (

    <Stats>
        <Name>Name: {props.name}</Name>
        <Info>Birth Year: {props.birth_year}</Info>
        <Info>Height: {props.height}</Info>
        <Info>Mass: {props.mass}</Info>
        <Info>Gender: {props.gender}</Info>
        <Info>Eye Color: {props.eye_color}</Info>
        <Info>Hair Color: {props.hair_color}</Info>
    </Stats>
  
  );

};

export default Character