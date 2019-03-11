import React, { Component } from 'react';

import './StarWars.css';
import CharacterComponent from './CharacterComponent';
import CharImage from './CharImage';

const characterImages = [
  'https://github.com/tbone849/star-wars-guide/blob/master/build/assets/img/characters/1.jpg?raw=true', 
  'https://github.com/tbone849/star-wars-guide/blob/master/build/assets/img/characters/2.jpg?raw=true', 
  'https://github.com/tbone849/star-wars-guide/blob/master/build/assets/img/characters/3.jpg?raw=true', 
  'https://github.com/tbone849/star-wars-guide/blob/master/build/assets/img/characters/4.jpg?raw=true', 
  'https://github.com/tbone849/star-wars-guide/blob/master/build/assets/img/characters/5.jpg?raw=true', 
  'https://github.com/tbone849/star-wars-guide/blob/master/build/assets/img/characters/6.jpg?raw=true', 
  'https://github.com/tbone849/star-wars-guide/blob/master/build/assets/img/characters/7.jpg?raw=true', 
  'https://github.com/tbone849/star-wars-guide/blob/master/build/assets/img/characters/8.jpg?raw=true',
  'https://github.com/tbone849/star-wars-guide/blob/master/build/assets/img/characters/9.jpg?raw=true', 
  'https://github.com/tbone849/star-wars-guide/blob/master/build/assets/img/characters/10.jpg?raw=true',
]

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: []
    };
  }

  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people/');
  }

  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ starwarsChars: data.results });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  render() {
    return (
      <div className="App">
        <h1 className="header">Star Wars Characters</h1>

        <div>
 
          {this.state.starwarsChars.map((eaCharacter, index )=> ( 
            <CharacterComponent img={characterImages[index]} character={eaCharacter} key={eaCharacter.name}/>
          
          ))}

        </div>
      </div>
    );
  }
}

export default App;
