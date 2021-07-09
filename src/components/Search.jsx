import React from 'react';
import './App.css';

const Search = ({onChange}) => {
    return (
        <div className="search-container">
            <input onChange={(event) => onChange(event.target.value)} 
            className="search-input" placeholder="Type keywords" />
        </div>
    )
}

export default Search;