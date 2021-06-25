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

  addFavorite = (clickedCharacter) => {
    const oldFavorites = this.state.favorites
    // console.log('add favorite', character)
    // this.setState({favorites: [...this.state.favorites, character]})
    const foundFav = oldFavorites.find(favorite => favorite === clickedCharacter)

    if(!foundFav) {
      const newFavorites = [...oldFavorites, clickedCharacter]
      this.setState({ favorites: newFavorites })
    }
  }
  // addFavorite = clickedCharacter => {
  //   this.setState({favorites: [...this.state.favorites, clickedCharacter] })
  // }

  removeFavorite = (clickedCharacter) => {
    const remainingFavorites = this.state.favorites.filter(favorite => {
      return favorite.id !== clickedCharacter.id
    })
    this.setState({favorites: remainingFavorites })
    console.log('remove favorite', clickedCharacter)
  }

  render() {
    return (
      <div className="App">
        <FavoritesContainer 
          favorites={this.state.favorites}
          removeFavorite={this.removeFavorite}
        />
        <CharactersContainer 
          characters={this.state.characters} 
          addFavorite={this.addFavorite} 
        />
      </div>
    );
  }
}

export default App;
