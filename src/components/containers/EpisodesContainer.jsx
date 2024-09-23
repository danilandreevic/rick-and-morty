import {useEffect, useState} from 'react';
import {fetchEpisode} from "../../api.js";
import EpisodeList from "../presentational/EpisodeList.jsx";
const EpisodesContainer = () => {
    const [episodes, setEpisodes] = useState([]);
    useEffect(() => {
        fetchEpisode().then((data) => {
            setEpisodes(data);
        })
    }, []);
    return (
        <EpisodeList episodes={episodes}/>
    );
};

export default EpisodesContainer;