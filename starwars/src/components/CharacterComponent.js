import React from 'react';

const CharacterComponent = props => {
    return(
        <div className='char-card'>
            <img src={props.character.url} alt={props.character.name} />

            <div className='char-info'>
                <h2>{props.character.name}</h2>
                <p><strong>{props.character.gender}</strong></p>
                <p><strong>{props.character.eyecolor}</strong></p>
                <p><strong>{props.character.height}</strong></p>
            </div>
        </div>
    );
}

export default CharacterComponent;