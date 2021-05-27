import React from "react";
import "./Icon.css";
import exe from "../../Images/exe.png";

const ExeIcon = (props) => {
    return (
        <>
            <div className="exe-folder" onDoubleClick={() => props.setTerminalDisplay(true)}>
                <img className="exeimage" alt="executable" src={exe} />
                <p className="exe-p">Exercise-Tracker.exe</p>
            </div>
        </>
    )
};

export default ExeIcon;