// SearchSection.js

import React, { useState } from 'react';
import '../App.css'; // Import CSS file for styling

const SearchSection = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [country, setCountry] = useState('');
    const [state, setState] = useState('');
    const [district, setDistrict] = useState('');

    const handleSearch = () => {
        // Implement search logic here
        console.log('Search query:', searchQuery);
        console.log('Country:', country);
        console.log('State:', state);
        console.log('District:', district);
    };

    return (
        <div className="search-section">
            <input
                className="search-input"
                type="text"
                placeholder="Search for a product or shop"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
            <select
                className="location-select"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
            >
                <option value="">Select Country</option>
                <option value="India">India</option>
                {/* Add other country options here */}
            </select>
            <select
                className="location-select"
                value={state}
                onChange={(e) => setState(e.target.value)}
            >
                <option value="">Select State</option>
                {/* Add state options based on the selected country */}
            </select>
            <select
                className="location-select"
                value={district}
                onChange={(e) => setDistrict(e.target.value)}
            >
                <option value="">Select District</option>
                {/* Add district options based on the selected state */}
            </select>

            <span><b>Or</b></span>
            <button className="location-button" >
                Detect My Location
            </button>
            <button className="search-button" onClick={handleSearch}>Search</button>
        </div>
    );
};

export default SearchSection;
