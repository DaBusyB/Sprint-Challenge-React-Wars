import React from 'react';

import './StarWars.css'
import CharImage from './CharImage';



const CharacterComponent = props => {
    return(
        <div className='char-card'>
            {/* <img src={img} img='' /> */}

            <div className='char-info'>
                <h2><strong>{props.character.name}</strong></h2>
                <p><strong>Gender:</strong> {props.character.gender}</p>
                <p><strong>Eye Color:</strong> {props.character.eyecolor}</p>
                <p><strong>Height:</strong>{props.character.height}</p>
            </div>
        </div>
    );
}

export default CharacterComponent;