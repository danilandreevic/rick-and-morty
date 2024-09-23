import { useEffect, useState } from "react";
import { fetchLocation } from "../../api.js";
import LocationList from "../presentational/LocationList.jsx";

const LocationContainer = () => {
    const [location, setLocation] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchLocation();
            console.log(data)
            setLocation(data || []);
        };
        fetchData();
    }, []);

    return (
        <div>
            <LocationList location={location} />
        </div>
    );
};

export default LocationContainer;