import PropTypes from 'prop-types';

const ButtonGroup = ({ showLocation, setShowLocation, showEpisodes, setShowEpisodes }) => {
    return (
        <div className="button-group">
            <button className="button" onClick={() => setShowLocation(!showLocation)}>
                {showLocation ? "Hide Location" : "Show Location"}
            </button>
            <button className="button" onClick={() => setShowEpisodes(!showEpisodes)}>
                {showEpisodes ? "Hide Episodes" : "Show Episodes"}
            </button>
        </div>
    );
};

ButtonGroup.propTypes = {
    showLocation: PropTypes.bool.isRequired,
    setShowLocation: PropTypes.func.isRequired,
    showEpisodes: PropTypes.bool.isRequired,
    setShowEpisodes: PropTypes.func.isRequired
};

export default ButtonGroup;