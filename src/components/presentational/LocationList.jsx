import LocationItem from "./LocationItem.jsx";

const LocationList = ({location}) => {
    return (
        <div>
            {location.map((loc) => (
                <LocationItem key={loc.id} loc={loc}/>
            ))}
        </div>
    );
};

export default LocationList;