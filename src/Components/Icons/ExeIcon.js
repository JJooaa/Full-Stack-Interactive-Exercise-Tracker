import React from "react";
import "./Icon.css";
import exe from "../Images/exe.png";

const ExeIcon = (props) => {
    return (
        <>
            <div className="exe-folder" onDoubleClick={() => props.setTerminalDisplay(true)}>
                <img className="exeimage" src={exe} />
                <p className="exe-p">Project</p>
            </div>
        </>
    )
};

export default ExeIcon;