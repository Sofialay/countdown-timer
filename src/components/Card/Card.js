import React from 'react';
import './Card.scss';

function Card({contdown, title}) {
    return (
        <div className="card">
            <h1>{contdown}</h1>
            <h2>{title}</h2>
        </div>
    )
}

export default Card;
