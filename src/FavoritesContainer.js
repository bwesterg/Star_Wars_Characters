import CharacterCard from "./CharacterCard";

function FavoritesContainer(props) {
    const displayFavorites = () => {
        return props.favorites.map(character => {
            return <CharacterCard 
                key={ character.id }
                character={character} 
                removeFavorite={props.removeFavorite}
            />
        })
    }

    return <section className="favorites-container">
        { displayFavorites() }
    </section>
}

export default FavoritesContainer