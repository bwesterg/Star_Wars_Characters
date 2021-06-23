import { Component } from 'react';
import './App.css';
import FavoritesContainer from './FavoritesContainer';
import CharactersContainer from './CharactersContainer';

class App extends Component {

  state = {
    favorites: [],
    characters: []
  }

  componentDidMount() {
    fetch('http://star-wars-cafe-api.herokuapp.com/characters')
      .then(response => response.json())
      .then(characters => this.setState({ characters: characters }))
  }

  addFavorite = clickedCharacter => {
    this.setState({favorites: [...this.state.favorites, clickedCharacter] })
  }

  render() {
    return (
      <div className="App">
        <FavoritesContainer favorites={this.state.favorites}/>
        <CharactersContainer 
          characters={this.state.characters} 
          addFavorite={this.addFavorite}  
        />
      </div>
    );
  }
}

export default App;
