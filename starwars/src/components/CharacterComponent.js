import React from 'react';

import './StarwarsComponent.css'

const CharacterComponent = props => {
    return(
        <div className='char-card'>

            <div className='char-info'>
                <h2><strong>{props.character.name}</strong></h2>
                <img src={props.img} alt={props.character.name} />
                <p><strong>Gender:</strong> {props.character.gender}</p>
                <p><strong>Eye Color:</strong> {props.character.eye_color}</p>
                <p><strong>Height:</strong>{props.character.height}</p>
            </div>

        </div>
    );
}

export default CharacterComponent;