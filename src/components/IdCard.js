import React from "react";
import IdDAta from "../data/IDCardData.json"
import { useState } from "react";
import Greetings from "./Greetings";

function IdCard () {
    const [ids, index] = useState(IdDAta);



    return (
        <div className="cards-container">
        {ids.map(id => (
            <div key={index} className="card">
            <img src={id.picture} alt={`${id.firstName} ${id.lastName}`} className="card-image"/>
                 <Greetings lang="en">{id.firstName}</Greetings>
                 <p>Last Name: {id.lastName}</p>
                 <p>Gender: {id.gender}</p>
                 <p>Height: {id.height}</p>
                 <p>Birth: {id.birth}</p>
            </div>
        ))}
        </div>
    );
}

export default IdCard;