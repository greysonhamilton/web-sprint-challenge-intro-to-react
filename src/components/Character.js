// Write your Character component here
import React, { useState, useEffect } from 'react';

const Character = () => {

    const [id, setId] = useState();

    useEffect((() => {

        axios.get('https://swapi.dev/api/people/')

        .then((res) => {
            console.log(res.data.results);
            setId(res.data.results);
        })

        .catch((err) => {
            console.log('This is not the code you are looking for.', err);
        });
    }, []));

    return (
        <div className="character">
            
        </div>
    )
}
