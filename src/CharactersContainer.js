import CharacterCard from "./CharacterCard"

function CharactersContainer(props) {

    const displayCharacters = () => {
        return props.characters.map(character => {
            return <CharacterCard character={character} />
        })
    }


    console.log('props characters', props.characters)
    return <section className="characters-container">
        {displayCharacters()}
    </section>
}

export default CharactersContainer