import React, { useState, useEffect } from "react";
import Draggable from "react-draggable";
import Terminal from "./Components/Terminal/Terminal";
import FolderIcon from "./Components/Icons/FolderIcon";
import WindowsFileEx from "./Components/WindowsFileExplorer/WindowsFileEx";
import "./App.css";
/* 
    ITSELLE MUISTIIN: TEE SILLEEN KUN PROJEKTIA KLIKKAA SE AVAA TERMINAALIN
    JA SIINÄ TEKSTIÄ VAAN RULLAA SILLEEN COOLISTI. SITTEN NÄYTTÖ JOTENKIN GLITCHAA
    SIT SIIN PYÖRII JOTAIN VÄLÄYKSIÄ JOSTAIN IHME "KOODARI" JUTUISTA JA SITTEN 
    SE AVAA MUN PROJEKTIN JOTENKIN IHMEELLISESTI
*/
const App = () => {
    // LOADING SCREEN
    const [isLoading, setIsLoading] = useState(false);
    const [displayWfe, setDisplayWfe] = useState(false);

    if (isLoading === false) {
        setTimeout(() => {
            setIsLoading(true);
        }, 2000);
        return <p className="loading">Loading...</p>;
    }

    return (
        <div className="App">
            <div className="main">
                <FolderIcon setDisplayWfe={setDisplayWfe} />
                <Terminal />
                <WindowsFileEx setDisplayWfe={setDisplayWfe} displayWfe={displayWfe}/>
            </div>
        </div>
    );
};

export default App;
