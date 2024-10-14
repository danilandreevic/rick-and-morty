import PropTypes from 'prop-types';
import LocationItem from './LocationItem.jsx';

const LocationList = ({ locations }) => {
    return (
        <div>
            {locations.map(loc => (
                <LocationItem key={loc.id} loc={loc} />
            ))}
        </div>
    );
};

LocationList.propTypes = {
    locations: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default LocationList;