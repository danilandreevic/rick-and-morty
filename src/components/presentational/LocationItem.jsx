import {useEffect, useState} from "react";
import CharactersContainer from "../containers/CharactersContainer.jsx";


const LocationItem = ({loc}) => {
    const [open, setOpen] = useState(false);

    return (
        <div className="episode" onClick={() => setOpen(true)}>
            <h3>{loc.name + ": " + loc.type} {loc.dimension == 'unknown' ? '' : loc.dimension}</h3>
            {open && <CharactersContainer ids={loc.residents.map((url) => url.split('/').pop())}/>}
        </div>
    );
};

export default LocationItem;