import React, { useState } from "react";
import Draggable from "react-draggable";
import "./Terminal.css";

const Terminal = (props) => {
    // OPENS TERMINAL, LOADS DATA
    const [firstStep, setFirstStep] = useState(false);
    // AFTER INSTALLATION IN TERMINAL
    const [secondStep, setSecondStep] = useState(false);

    // CALLED INSIDE TERMINAL
    const loadFirstData = () => {
        if (firstStep === false) {
            setTimeout(() => {
                setFirstStep(true);
                setSecondStep(true);
            }, 2000);
            return (
                <div className="loaddiv">
                    <p>$LOADING NECESSARY DATA... [RANDOM DATA://JOA/WEBDEV]</p>
                    <p>$INITIALIZING JOA WEB DEVELOPER DATA...</p>
                    <p>[INSTALLING...]</p>
                </div>
            );
        }
    };

    // CALLED INSIDE TERMINAL
    const loadSecondData = () => {
        if (secondStep === true) {
            return (
                <div className="inputdiv">
                    <p>
                        <span>Compiled successfully!</span> Setup finished in
                        [2500ms]...
                    </p>
                    <p>
                        Typing "project2" launches application in new window...
                    </p>
                    <p>
                        Typing "project2" launches application in new window...
                    </p>
                    <p className="inline-block">$</p>
                    <input spellCheck="false"></input>
                </div>
            );
        }
    };

    // RENDERS THE PROJECT WINDOW BY SETTINGS ITS STATE TO TRUE
    const renderProjectDisplay = () => {
        setTimeout(() => {
            props.setProjectDisplay(true);
        }, 1000);
    };

    // CALLED WHEN CLOSING TERMINAL
    const refreshTerminalState = () => {
        setFirstStep(false);
        setSecondStep(false);
    };

    const renderTerminal = () => {
        if (props.terminalDisplay === true) {
            return (
                <Draggable handle="#handle">
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
                            {renderProjectDisplay()}
                        </div>
                    </div>
                </Draggable>
            );
        }
    };

    return <>{renderTerminal()}</>;
};

export default Terminal;
