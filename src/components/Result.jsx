import React from 'react';
import './App.css';
import NameCard from './NameCard';

const Result = ({suggestedNames}) => {
    const suggestedNamesList = suggestedNames.map((suggestedName) => {
        return <NameCard key={suggestedName} suggestedName = {suggestedName} />
    });

    return (<div className="results">
        {suggestedNamesList}
    </div>);
}

export default Result;