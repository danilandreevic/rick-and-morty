import PropTypes from 'prop-types';
import { useState } from "react";

const SearchBar = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
        onSearch(e.target.value);
    };

    return (
        <div className="search-bar">
            <input
                type="text"
                placeholder="Search location, episodes, chars..."
                value={searchTerm}
                onChange={handleSearch}
            />
        </div>
    );
};

SearchBar.propTypes = {
    onSearch: PropTypes.func.isRequired
};

export default SearchBar;