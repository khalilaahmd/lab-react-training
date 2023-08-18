import React from "react";
import { useState } from "react";



function ShowHide({children}) {
    const [isVisible, setIsVisible] = useState(true);

    const toggleVisible = () => {
        setIsVisible(!isVisible);
    };

    return (
        <div>
        {isVisible && children}
        <button className="toggle-button" onClick={toggleVisible}>{isVisible ? "Hide" : "Show"}</button>
        </div>
    )
}

export default ShowHide;