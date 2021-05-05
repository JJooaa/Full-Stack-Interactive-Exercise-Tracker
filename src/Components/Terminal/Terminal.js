import React, { useState } from "react";
import Draggable from "react-draggable";
import "./Terminal.css";

const Terminal = (props) => {
    // OPENS TERMINAL, LOADS DATA
    const [firstStep, setFirstStep] = useState(true);
    // AFTER INSTALLATION IN TERMINAL
    const [secondStep, setSecondStep] = useState(false);

    const terminalDataArray = [
        "Loading packages from RANDOM DATA://JOA/WEBDEV",
        "Downloading [05 / 20]...",
        "Downloading [10 / 20]...",
        "Downloading [15 / 20]...",
        "Downloading [20 / 20]...",
        "Finished Downloading packages",
        "COMPILING..."
    ];

    // CALLED INSIDE TERMINAL
    const loadFirstData = () => {
        if (firstStep === true) {
            setTimeout(() => {
                setFirstStep(false);
                setSecondStep(true);
            }, 5000);
            return (
                <div className="loaddiv">
                    {terminalDataArray.map((data, index) => {
                        return <p className={`delay-${index} loader`}>{data}</p>
                    })}
                </div>
            );
        }
    };

    const loadSecondData = () => {
        if (secondStep === true) {
            setTimeout(() => {
                props.setProjectDisplay(true);
                props.setTerminalDisplay(false);
                refreshTerminalState();
            }, 2000);
            return (
                <div className="inputdiv">
                    <p>
                        <span>Compiled successfully!</span> Setup finished in
                        [2500ms]...
                    </p>
                    <p>Loading project in a new window...</p>
                    <p className="inline-block">$</p>
                    <input spellCheck="false"></input>
                </div>
            );
        }
    };

    // CALLED WHEN CLOSING TERMINAL
    const refreshTerminalState = () => {
        setFirstStep(false);
        setSecondStep(false);
    };

    const renderTerminal = () => {
        if (props.terminalDisplay === true) {
            return (
                <Draggable
                    handle="#handle"
                    onMouseDown={(e) => props.onStart(e)}
                >
                    <div className="terminal">
                        <header className="terminal-header" id="handle">
                            <p className="header-p">MINGW64:/c/Users/Guest</p>
                            <div className="flex">
                                <div
                                    className="close-terminal"
                                    onClick={() => {
                                        props.setTerminalDisplay(false);
                                        refreshTerminalState();
                                    }}
                                >
                                    X
                                </div>
                            </div>
                        </header>
                        <div className="input-field">
                            <p>Terminal [Version 10.16.12387.123]</p>
                            <p className="quest-p">
                                guest@DESKTOP-WEBDEV6 MINGW64 ~
                            </p>
                            {/*STEP 1*/}
                            {loadFirstData()}
                            {/*STEP 2 */}
                            {loadSecondData()}
                        </div>
                    </div>
                </Draggable>
            );
        }
    };

    return <>{renderTerminal()}</>;
};

export default Terminal;
