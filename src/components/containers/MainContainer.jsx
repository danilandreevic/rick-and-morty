import { useState } from "react";
import EpisodesContainer from "./EpisodesContainer.jsx";
import LocationContainer from "./LocationContainer.jsx";
import '../Rick.css'

const MainContainer = () => {
    const [showLocation, setShowLocation] = useState(false);
    const [showEpisodes, setShowEpisodes] = useState(false);

    return (
        <div>
            <button className="button" onClick={() => setShowLocation(!showLocation)}>
                {showLocation ? "Hide Location" : "Show Location"}
            </button>
            <button className="button" onClick={() => setShowEpisodes(!showEpisodes)}>
                {showEpisodes ? "Hide Episodes" : "Show Episodes"}
            </button>

            {showLocation && <LocationContainer />}
            {showEpisodes && <EpisodesContainer />}
        </div>
    );
};

export default MainContainer;