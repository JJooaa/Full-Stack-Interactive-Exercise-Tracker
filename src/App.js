import React, { useState, useEffect } from "react";
import Draggable from "react-draggable";
import Terminal from "./Components/Terminal/Terminal";
import FolderIcon from "./Components/Icons/FolderIcon";
import WindowsFileEx from "./Components/WindowsFileExplorer/WindowsFileEx";
import WindowsFooter from "./Components/WindowsFooter/WindowsFooter";
import ProjectWindow from "./Components/ProjectWindow/ProjectWindow";
import StartWindow from "./Components/StartWindow/StartWindow";
import "./App.css";
/* 
    ITSELLE MUISTIIN: TEE SILLEEN KUN PROJEKTIA KLIKKAA SE AVAA TERMINAALIN
    JA SIINÄ TEKSTIÄ VAAN RULLAA SILLEEN COOLISTI. SITTEN NÄYTTÖ JOTENKIN GLITCHAA
    SIT SIIN PYÖRII JOTAIN VÄLÄYKSIÄ JOSTAIN IHME "KOODARI" JUTUISTA JA SITTEN 
    SE AVAA MUN PROJEKTIN JOTENKIN IHMEELLISESTI
*/
const App = () => {
    // LOADING SCREEN
    const [isLoading, setIsLoading] = useState(true);
    // Window File Explorer
    const [displayWfe, setDisplayWfe] = useState(false);
    // Terminal
    const [terminalDisplay, setTerminalDisplay] = useState(false);
    // Project Container Display
    const [projectDisplay, setProjectDisplay] = useState(false);
    // Windows start window (in the footer)
    const [startWindow, setStartWindow] = useState(false);

    const onStart = (e) => {
        let elems = document.getElementsByClassName("react-draggable");
        for (let i = 0; i < elems.length; i++) {
            elems[i].style.zIndex = 1;
            e.currentTarget.style.zIndex = 2;
        }
    };

    if (isLoading) {
        setTimeout(() => {
            setIsLoading(false);
        }, 2500);
        return (
            <div className="loading-screen">
                <p className="loading">Loading System...</p>;
                <div className="loading-bar"></div>
            </div>
        );
    }

    return (
        <div className="App">
            <div className="main">
                <FolderIcon setDisplayWfe={setDisplayWfe} />
                <Terminal
                    terminalDisplay={terminalDisplay}
                    setTerminalDisplay={setTerminalDisplay}
                    setProjectDisplay={setProjectDisplay}
                    onStart={onStart}
                />
                <WindowsFileEx
                    setDisplayWfe={setDisplayWfe}
                    displayWfe={displayWfe}
                    setTerminalDisplay={setTerminalDisplay}
                    onStart={onStart}
                />
                <ProjectWindow
                    setProjectDisplay={setProjectDisplay}
                    projectDisplay={projectDisplay}
                    onStart={onStart}
                />
                <WindowsFooter setStartWindow={setStartWindow}/>
                <StartWindow startWindow={startWindow}/>
            </div>
        </div>
    );
};

export default App;
