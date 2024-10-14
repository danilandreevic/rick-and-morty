import { useEffect, useState } from "react";
import { fetchEpisode, fetchCharacter } from "../../api.js";
import EpisodeList from "../presentational/EpisodeList.jsx";

const EpisodesContainer = ({ searchTerm }) => {
    const [episodes, setEpisodes] = useState([]);
    const [characters, setCharacters] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        fetchEpisode().then(episodeData => {
            setEpisodes(episodeData);
            const characterIds = episodeData.flatMap(episode =>
                episode.characters.map(url => url.split('/').pop())
            );
            return fetchCharacter(characterIds);
        }).then(characterData => {
            setCharacters(characterData);
            setIsLoading(false);
        });
    }, []);

    const filteredEpisodes = episodes.filter(episode => {
        const episodeMatch = episode.name.toLowerCase().includes(searchTerm.toLowerCase());
        const characterMatch = episode.characters.some(url => {
            const characterId = url.split('/').pop();
            const character = characters.find(char => char.id === parseInt(characterId));
            return character && character.name.toLowerCase().includes(searchTerm.toLowerCase());
        });
        return episodeMatch || characterMatch;
    });

    return (
        <div>
            <EpisodeList episodes={filteredEpisodes} isLoading={isLoading} />
        </div>
    );
};

export default EpisodesContainer;