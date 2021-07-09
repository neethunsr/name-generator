import React from 'react';
import './App.css';

const nameCheapUrl = "https://www.namecheap.com/domains/registration/results/?domain="
const NameCard = ({suggestedName}) => {
    return(
        <a href={`${nameCheapUrl}${suggestedName}`}>
            <div className="namecard">
                <p className="name">{suggestedName}</p>
            </div>
        </a>
    );
};

export default NameCard;