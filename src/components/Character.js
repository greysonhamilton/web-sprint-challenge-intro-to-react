import React from "react";
import Styled from "./Styled";

const Character = (props) => {
  return (
    <div className="character">
        <h2>Name: {props.name}</h2>
      <p>Birth Year: {props.birth_year}</p>
      <p>Height: {props.height}</p>
      <p>Mass: {props.mass}</p>
      <p>Gender: {props.gender}</p>
      <p>Eye Color: {props.eye_color}</p>
      <p>Hair Color: {props.hair_color}</p>
    </div>
  );
};
export default Character