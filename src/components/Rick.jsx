import {useEffect, useState} from "react";
import {fetchEpisode, fetchCharacter} from "../api.js";
import './Rick.css'

export const Rick = () => {
    const [episodes, setEpisodes] = useState([]);
    const [charactersByEpisodes, setCharactersByEpisodes] = useState({});
    const [isLoadingByEpisodes, setIsLoadingByEpisodes] = useState({});
    useEffect(() => {
        fetchEpisode().then((data) => {
            console.log(data);
            setEpisodes(data);
        });
    }, []);

    function handleEpisodeClick(episode) {
        const ids = episode.characters.map((url) => url.split('/').pop());

        setIsLoadingByEpisodes({...isLoadingByEpisodes, [episode.id]: true});

        fetchCharacter(ids).then((data) => {
            setCharactersByEpisodes({...charactersByEpisodes, [episode.id]: data});
            setIsLoadingByEpisodes({...isLoadingByEpisodes, [episode.id]: false});
        });
    }


    return (<div>
        {episodes.map((episode) => (
            <div key={episode.id} className="episode" onClick={() => handleEpisodeClick(episode)}>
                <h1>{episode.episode + ':' + episode.name}</h1>
                <div className="characters-container">
                    {isLoadingByEpisodes[episode.id] && <div>Загрузка...</div>}
                    {charactersByEpisodes[episode.id]?.map((character) => (
                        <div key={character.id} className={"character " + getStatusClass(character.status)}>
                            <div className="character-left">
                                <img src={character.image} alt={character.name}/>
                            </div>
                            <div className="character-right">
                                <h3>{character.name}</h3>
                                <div>Вид: {character.species}</div>
                                <div>Пол: {character.gender}</div>
                                <div>Локация: {character.location.name}</div>
                            </div>

                        </div>))}
                </div>
            </div>))}
    </div>)
}