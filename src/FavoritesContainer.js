import CharacterCard from "./CharacterCard";

function FavoritesContainer(props) {
    const displayFavorites = () => {
        return props.favorites.map(character => {
            return <CharacterCard 
                key={ character.id }
                // key={ character }
                character={character} 
                // character={character.id} 
            />
        })
    }

    return <section className="favorites-container">
        { displayFavorites() }
    </section>
}

export default FavoritesContainer