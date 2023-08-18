import React from "react";
import { useState } from "react";

function Greetings ({lang, children}) {
    const [activeLang, setActiveLang] = useState(lang | "en");

    let greeting = "";

    switch (activeLang) {
        case 'de': 
                  greeting = "Hallo";
                  break;
        case 'en':
                  greeting = "Hello";
                  break;
        case 'es':
                  greeting = "Hola";
                  break;
        case 'fr':
                  greeting = "Bonjour";
                  break;
        default:
                  greeting = "Hello";
    }
    return (
        <div>
        <div>
            <button className="language-button" onClick={() => setActiveLang('de')}>Germany</button>
            <button className="language-button" onClick={() => setActiveLang('en')}>English</button>
            <button className="language-button" onClick={() => setActiveLang('es')}>Spanish</button>
            <button className="language-button" onClick={() => setActiveLang('fr')}>French</button>

        </div>
        <h4>{greeting} {children}</h4>
        </div>
    )
}

export default Greetings;
