import React from "react";

const Card = ({ name, description, link }) => {
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{description}</p>
                <a href={link} className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    );
};

export default Card;
