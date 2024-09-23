import EpisodeItem from "./EpisodeItem.jsx";


const EpisodeList = ({episodes}) => {
    return (
        <div>
            {episodes.map((episode) => (
                <EpisodeItem key={episode.id} episode={episode}/>
            ))}
        </div>
    );
};

export default EpisodeList;