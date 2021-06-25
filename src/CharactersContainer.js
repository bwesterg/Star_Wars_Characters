import CharacterCard from "./CharacterCard";

function CharactersContainer(props) {
    const displayCharacters = () => {
        return props.characters.map(character => {
            return <CharacterCard 
                key={character.id}
                // key={character}
                character={character} 
                // character={character.id} 
                // addFavorite={props.addFavorite} 
            />
        })
    }


    console.log('props characters', props.characters)
    return <section className="characters-container">
        {displayCharacters()}
    </section>
}

export default CharactersContainer