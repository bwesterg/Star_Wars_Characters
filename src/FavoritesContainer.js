import CharacterCard from "./CharacterCard"

function FavoritesContainer(props) {
    console.log('props favorites', props.favorites)

    const displayFavorites = () => {
        return props.favorites.map(character => {
            return <CharacterCard character={character} />
        })
    }

    return <section className="favorites-container">
        { displayFavorites() }
    </section>
}

export default FavoritesContainer