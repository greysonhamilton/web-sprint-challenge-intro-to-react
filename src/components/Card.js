import React from 'react';
import Character from './Character';
const Card = () => {

    return (

        <div>
            {id.map(star => {
                return (

                    <Character key={star.name} 
                    name={star.name} 
                    birth_year={star.birth_year} 
                    height={star.height} 
                    mass={star.mass} 
                    eye-color={star.eye_color} 
                    hair_color={star.hair_color} 
                    gender={star.gender} />
                );
            })}
        </div>
    )
}

export default Card