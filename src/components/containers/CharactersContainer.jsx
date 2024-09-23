import {useEffect, useState} from "react";
import {fetchCharacter} from "../../api.js";
import CharacterList from "../presentational/CharacterList.jsx";

const CharactersContainer = ({ids}) => {
    const [characters, setCharacters] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        fetchCharacter(ids).then((data) => {
            setCharacters(data);
            setIsLoading(false);
        });
    }, [ids]);
    return (
        <div>
    <CharacterList characters={characters} isLoading={isLoading}/>

        </div>
    );
};

export default CharactersContainer;