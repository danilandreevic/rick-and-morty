import CharacterItem from "./CharacterItem.jsx";
import {useEffect} from "react";


const CharacterList = ({characters, isLoading}) => {
    if (isLoading) {
        return <div>Загрузка...</div>
    }
    useEffect(() => {
        console.log(characters)
    }, []);
    return (
        <div className="characters-container">
            {Array.isArray(characters) ? characters.map((character) => (
                <CharacterItem key={character.id} character={character} />
            )) :  <CharacterItem key={characters.id} character={characters} />}
        </div>
    );
};

export default CharacterList;