function CharacterCard(props) {

  const handleClick = () => {
    if (props.addFavorite) {
      props.addFavorite(props.character)
    }
  }

    return <div className="character-card">
        <h2>{props.character.name}</h2>
        <img 
          onClick={ handleClick }
          src={props.character.image} 
          alt={props.character.name}
        />
  </div>
}

export default CharacterCard