import { useEffect, useState } from "react";
import { fetchLocation, fetchCharacter } from "../../api.js";
import LocationList from "../presentational/LocationList.jsx";

const LocationContainer = ({ searchTerm }) => {
    const [locations, setLocations] = useState([]);
    const [characters, setCharacters] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        fetchLocation().then(locationData => {
            setLocations(locationData);
            const characterIds = locationData.flatMap(location =>
                location.residents.map(url => url.split('/').pop())
            );
            return fetchCharacter(characterIds);
        }).then(characterData => {
            setCharacters(characterData);
            setIsLoading(false);
        });
    }, []);

    const filteredLocations = locations.filter(location => {
        const locationMatch = location.name.toLowerCase().includes(searchTerm.toLowerCase());
        const characterMatch = location.residents.some(url => {
            const characterId = url.split('/').pop();
            const character = characters.find(char => char.id === parseInt(characterId));
            return character && character.name.toLowerCase().includes(searchTerm.toLowerCase());
        });
        return locationMatch || characterMatch;
    });

    return (
        <div>
            <LocationList locations={filteredLocations} isLoading={isLoading} />
        </div>
    );
};

export default LocationContainer;