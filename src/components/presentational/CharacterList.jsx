import PropTypes from 'prop-types';
import CharacterItem from "./CharacterItem.jsx";
import LoadingSpinner from "./LoadingSpinner.jsx";

const CharacterList = ({ characters, isLoading }) => {
    if (isLoading) {
        return <LoadingSpinner/>
    }
    return (
        <div className="characters-container">
            {Array.isArray(characters) ? characters.map((character) => (
                <CharacterItem key={character.id} character={character} />
            )) : <CharacterItem key={characters.id} character={characters} />}
        </div>
    );
};

CharacterList.propTypes = {
    characters: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.object),
        PropTypes.object
    ]).isRequired,
    isLoading: PropTypes.bool.isRequired
};

export default CharacterList;