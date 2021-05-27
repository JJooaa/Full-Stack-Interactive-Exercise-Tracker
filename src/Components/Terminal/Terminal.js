import React, { useEffect } from "react";
import Draggable from "react-draggable";
import "./Terminal.css";

const Terminal = ({
    setExerciseTracker,
    setTerminalDisplay,
    onStart,
    terminalDisplay,
}) => {
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
        setTimeout(() => {
            setExerciseTracker(true);
            setTerminalDisplay(false);
        }, 5500);
    }, [setTerminalDisplay, setExerciseTracker]);

    return (
        <>
            {terminalDisplay ? (
                <Draggable handle="#handle" onMouseDown={(e) => onStart(e)}>
                    <div className="terminal">
                        <header className="terminal-header" id="handle">
                            <p className="header-p">MINGW64:/c/Users/Guest</p>
                            <div className="flex">
                                <div
                                    className="close-terminal"
                                    onClick={() => setTerminalDisplay(false)}
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
                                    <p key={index}className={`delay-${index} loader`}>
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
