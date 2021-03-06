import CharacterCard from "./CharacterCard";

function CharactersContainer(props) {
    const displayCharacters = () => {
        return props.characters.map(character => {
            return <CharacterCard 
                key={character.id}
                character={character} 
                addFavorite={props.addFavorite} 
            />
        })
    }

    console.log('props characters', props.characters)
    return <section className="characters-container">
        {displayCharacters()}
    </section>
}

export default CharactersContainer