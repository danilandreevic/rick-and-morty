import { useState } from 'react';
import PropTypes from 'prop-types';
import CharactersContainer from '../containers/CharactersContainer.jsx';

const LocationItem = ({ loc }) => {
    const [open, setOpen] = useState(false);

    const characterIds = loc.residents.map(url => parseInt(url.split('/').pop(), 10));

    return (
        <div className="location" onClick={() => setOpen(!open)}>
            <h3>{loc.name}</h3>
            <p>{loc.type} - {loc.dimension}</p>
            {open && <CharactersContainer ids={characterIds} />}
        </div>
    );
};

LocationItem.propTypes = {
    loc: PropTypes.shape({
        name: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        dimension: PropTypes.string.isRequired,
        residents: PropTypes.arrayOf(PropTypes.string).isRequired
    }).isRequired
};

export default LocationItem;