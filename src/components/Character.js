import React from "react";

const Character = (props) => {
  return (
    <div className="character">
      <p className="">Birth Year: {props.birth_year}</p>
      <p className="">Height: {props.height}</p>
      <p className="">Mass: {props.mass}</p>
      <p className="">Gender: {props.gender}</p>
      <p className="">Eye Color: {props.eye_color}</p>
      <p className="">Hair Color: {props.hair_color}</p>
    </div>
  );
};
export default Character