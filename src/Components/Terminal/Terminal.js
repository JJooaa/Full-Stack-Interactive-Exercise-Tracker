import React, { useState, useEffect } from "react";
import Draggable from "react-draggable";
import "./Terminal.css";

const Terminal = (props) => {
    const terminalDataArray = [
        "Loading packages from RANDOM DATA://JOA/WEBDEV",
        "Downloading [05 / 20]...",
        "Downloading [10 / 20]...",
        "Downloading [15 / 20]...",
        "Downloading [19 / 20]...",
        "Downloading [20 / 20]...",
        "Finished Downloading packages",
        "Compiling...",
        "Compiled succesfully!",
        "Launching Exercise Tracker...",
    ];

    useEffect(() => {
        console.log("useeffect")
        setTimeout(() => {
            props.setExerciseTracker(true);
            props.setTerminalDisplay(false);
        }, 5500);
    }, []);

    return (
        <>
            {props.terminalDisplay ? (
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
                                    onClick={() =>
                                        props.setTerminalDisplay(false)
                                    }
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
                            <br></br>
                            {terminalDataArray.map((data, index) => {
                                return (
                                    <p className={`delay-${index} loader`}>
                                        {data}
                                    </p>
                                );
                            })}
                        </div>
                    </div>
                </Draggable>
            ) : null}
        </>
    );
};

export default Terminal;
