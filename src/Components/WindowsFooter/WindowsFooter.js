import React from "react";
import "./WindowsFooter.css";
import windowsIcon from "../Images/windows-icon.png";

const WindowsFooter = () => {
    return (
        <>
            <div className="footer">
                <div className="windows-explore">
                    <img className="logo" src={windowsIcon} />
                    <p className="start-p">Start</p>
                </div>
            </div>
        </>
    );
};

export default WindowsFooter;
