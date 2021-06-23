import { Component } from 'react'
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

  render() {
    return (
      <div className="App">
        <FavoritesContainer favorites={this.state.favorites}/>
        <CharactersContainer characters={this.state.characters} />
        
      </div>
    );
  }
}

export default App;
