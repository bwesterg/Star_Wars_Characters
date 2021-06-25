
function CharacterCard (props) {

  const handleClick = () => {
    if (props.addFavorite) {
      props.addFavorite(props.character)
    } else if (props.removeFavorite) {
      props.removeFavorite(props.character)
    }
  }

    // handleClick = (_) => {
    //   this.props.addFavorite(this.props.character)
    //   console.log('card clicked', this.props.character)
    // }


      return <div className="character-card">
          <h2>{props.character.name}</h2>
          <img 
            // onClick={handleClick}
            onClick={handleClick}
            src={props.character.image} 
            alt={props.character.name}
          />
      </div>
    
}

export default CharacterCard