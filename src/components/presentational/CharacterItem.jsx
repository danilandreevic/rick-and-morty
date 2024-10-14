import PropTypes from 'prop-types';

const CharacterItem = ({ character }) => {
    const getStatusClass = (status) => {
        switch (status) {
            case 'Alive':
                return 'character-alive';
            case 'Dead':
                return 'character-dead';
            default:
                return 'character-unknown';
        }
    };

    return (
        <div onClick={(e) => e.stopPropagation()} className={"character " + getStatusClass(character.status)}>
            <div className="character-left">
                <img src={character.image} alt={character.name} />
            </div>
            <div className="character-right">
                <h3>{character.name}</h3>
                <div>Species: {character.species}</div>
                <div>Gender: {character.gender}</div>
                <div>Location: {character.location.name}</div>
            </div>
        </div>
    );
};

CharacterItem.propTypes = {
    character: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        status: PropTypes.string.isRequired,
        species: PropTypes.string.isRequired,
        gender: PropTypes.string.isRequired,
        location: PropTypes.shape({
            name: PropTypes.string.isRequired
        }).isRequired,
        image: PropTypes.string.isRequired
    }).isRequired
};

export default CharacterItem;