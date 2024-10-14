import { useState } from "react";
import CharactersContainer from "../containers/CharactersContainer.jsx";

const EpisodeItem = ({ episode }) => {
    const [open, setOpen] = useState(false);

    const characterIds = episode.characters.map((url) => parseInt(url.split('/').pop(), 10));

    return (
        <div className="episode" onClick={() => setOpen(!open)}>
            <h3>{episode.episode + ": " + episode.name}</h3>
            {open && <CharactersContainer ids={characterIds} />}
        </div>
    );
};

export default EpisodeItem;