import React from "react";
import "./WindowsFooter.css";
import windowsIcon from "../../Images/windows-icon.png";

const WindowsFooter = (props) => {
    return (
        <>
            <div className="footer">
                <div className="windows-explore" onClick={() => props.setStartWindow(true)}>
                    <img className="logo" alt="start" src={windowsIcon} />
                </div>
            </div>
        </>
    );
};

export default WindowsFooter;
