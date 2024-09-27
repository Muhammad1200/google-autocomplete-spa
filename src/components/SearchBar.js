import { AutoComplete } from 'antd';
import { useState } from "react";
import {searchPlaces} from "../redux/SearchHistory/Actions";
import {useDispatch, useSelector} from "react-redux";

const SearchBar = ({ setCurrentLocation }) => {

    const dispatch = useDispatch();
    const [options, setOptions] = useState([]);

    const places = useSelector((state) => state?.places?.places);

    const handleSearch = (value) => {
        if (!value || value === "") {
            setOptions([]); // Clear options if search term is empty
            return;
        }

        const lowerCaseSearchTerm = value.toLowerCase();
        const locations = places
            .filter(location =>
                location.name.toLowerCase().includes(lowerCaseSearchTerm) ||
                location.address.toLowerCase().includes(lowerCaseSearchTerm)
            )
            .map((location) => ({
                label: `${location.name} ${location.address}`,
                value: `${location.name} ${location.address}`,
            }));

        setOptions(locations);
    };

    const handleSelect = (value) => {
        // Here you can dispatch the selected item
        const selectedPlace = places.find(place =>
            `${place.name} ${place.address}` === value
        );
        if (selectedPlace) {
            setCurrentLocation([{...selectedPlace}]);
            dispatch(searchPlaces(selectedPlace)); // Dispatch the selected place
        }
    };

    return (
        <>
            <AutoComplete
                style={{
                    width: '100%',
                    borderRadius : 0,
                }}
                onSearch={handleSearch}
                onSelect={handleSelect} // Add onSelect handler here
                placeholder="Search Your Place Here"
                options={options}
            />
        </>
    );

};

export default SearchBar;