import React from 'react';

import './StarWars.css'
import CharImage from './CharImage';

const characterImages = [
    'https://github.com/tbone849/star-wars-guide/blob/master/build/assets/img/characters/1.jpg?raw=true', 
    'https://github.com/tbone849/star-wars-guide/blob/master/build/assets/img/characters/2.jpg?raw=true', 
    'https://github.com/tbone849/star-wars-guide/blob/master/build/assets/img/characters/3.jpg?raw=true', 
    'https://github.com/tbone849/star-wars-guide/blob/master/build/assets/img/characters/4.jpg?raw=true', 
    'https://github.com/tbone849/star-wars-guide/blob/master/build/assets/img/characters/5.jpg?raw=true', 
    'https://github.com/tbone849/star-wars-guide/blob/master/build/assets/img/characters/6.jpg?raw=true', 
    'https://github.com/tbone849/star-wars-guide/blob/master/build/assets/img/characters/7.jpg?raw=true', 
    'https://github.com/tbone849/star-wars-guide/blob/master/build/assets/img/characters/9.jpg?raw=true', 
    'https://github.com/tbone849/star-wars-guide/blob/master/build/assets/img/characters/10.jpg?raw=true',
  ]

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