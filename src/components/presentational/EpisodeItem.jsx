import {useState} from "react";
import CharactersContainer from "../containers/CharactersContainer.jsx";


const EpisodeItem = ({episode}) => {
    const [open, setOpen] = useState(false);
    return (
        <div className="episode" onClick={() => setOpen(true)}>
        <h3>{episode.episode + ":" + episode.name}</h3>
            {open && <CharactersContainer ids={episode.characters.map((url) => url.split('/').pop())}/>}
        </div>
    );
};

export default EpisodeItem;