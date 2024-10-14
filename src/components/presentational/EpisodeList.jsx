import EpisodeItem from "./EpisodeItem.jsx";
import LoadingSpinner from "./LoadingSpinner.jsx";
import PropTypes from "prop-types";

const EpisodeList = ({ episodes, isLoading }) => {
    if (isLoading) {
        return <div><LoadingSpinner /></div>;
    }

    return (
        <div>
            {episodes.map((episode) => (
                <EpisodeItem key={episode.id} episode={episode} />
            ))}
        </div>
    );
};

EpisodeList.propTypes = {
    episodes: PropTypes.arrayOf(PropTypes.object).isRequired,
    isLoading: PropTypes.bool.isRequired
};

export default EpisodeList;