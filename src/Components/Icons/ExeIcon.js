import React from "react";
import "./Icon.css";
import exe from "../Images/exe.png";

const ExeIcon = () => {
    return (
        <>
            <div className="exe-folder">
                <img className="exeimage" src={exe} />
                <p className="exe-p">Project</p>
            </div>
        </>
    )
};

export default ExeIcon;