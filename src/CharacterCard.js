// import { render } from '@testing-library/react'
import { Component } from 'react'

class CharacterCard extends Component {

  // const handleClick = () => {
  //   if (props.addFavorite) {
  //     props.addFavorite(props.character)
  //     // props.addFavorite(props.character.id)
  //   }
  // }

    handleClick = (_) => {
      this.props.addFavorite(this.props.character)
      console.log('card clicked', this.props.character)
    }

    render(){
      return <div className="character-card">
          <h2>{this.props.character.name}</h2>
          <img 
            // onClick={handleClick}
            onClick={this.handleClick}
            src={this.props.character.image} 
            alt={this.props.character.name}
          />
      </div>
    }
}

export default CharacterCard