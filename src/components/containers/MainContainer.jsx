import { useState } from "react";
import EpisodesContainer from "./EpisodesContainer.jsx";
import LocationContainer from "./LocationContainer.jsx";
import SearchBar from "../presentational/SearchBar.jsx";
import ButtonGroup from "../presentational/ButtonGroup.jsx";
import '../Rick.css';

const MainContainer = () => {
    const [showLocation, setShowLocation] = useState(false);
    const [showEpisodes, setShowEpisodes] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");

    return (
        <div>
            <ButtonGroup
                showLocation={showLocation}
                setShowLocation={setShowLocation}
                showEpisodes={showEpisodes}
                setShowEpisodes={setShowEpisodes}
            />
            { (showLocation || showEpisodes) && <SearchBar onSearch={setSearchTerm} /> }

            {showLocation && <LocationContainer searchTerm={searchTerm} />}
            {showEpisodes && <EpisodesContainer searchTerm={searchTerm} />}
        </div>
    );
};

export default MainContainer;