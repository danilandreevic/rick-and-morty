import { useEffect, useState } from "react";
import { fetchCharacter } from "../../api.js";
import CharacterList from "../presentational/CharacterList.jsx";
import PropTypes from "prop-types";

const CharactersContainer = ({ ids = [], searchTerm = "" }) => {
    const [characters, setCharacters] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        fetchCharacter(ids).then((data) => {
            setCharacters(Array.isArray(data) ? data : []);
            setIsLoading(false);
        });
    }, [ids]);

    const filteredCharacters = characters.filter(character =>
        character.name && character.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <CharacterList characters={filteredCharacters} isLoading={isLoading} />
        </div>
    );
};

CharactersContainer.propTypes = {
    ids: PropTypes.arrayOf(PropTypes.number),
    searchTerm: PropTypes.string
};

export default CharactersContainer;