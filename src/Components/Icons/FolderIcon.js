import React from "react";
import Draggable from "react-draggable";
import "./Icon.css";
import folderImg from "../Images/folder.png";

const FolderIcon = (props) => {
    return (
        <Draggable>
            <div
                className="folder1"
                onDoubleClick={() => props.setDisplayWfe(true)}
            >
                <img className="folderimage" src={folderImg} />
                <p className="folder-p">Start</p>
            </div>
        </Draggable>
    );
};

export default FolderIcon;
