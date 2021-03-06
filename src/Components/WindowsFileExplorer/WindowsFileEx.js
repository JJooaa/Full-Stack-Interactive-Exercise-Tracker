import React from "react";
import "./WindowsFileEx.css";
import Draggable from "react-draggable";
import ExeIcon from "../Icons/ExeIcon";

const WindowsFileEx = (props) => {
    return (
        <>
            {props.displayWfe ? (
                <Draggable
                    handle="#handle"
                    onMouseDown={(e) => props.onStart(e)}
                >
                    <div className="wfe-container">
                        <header className="wfe-header" id="handle">
                            <p className="wfe-p">File Explorer</p>
                            <p
                                className="close-p"
                                onClick={() => props.setDisplayWfe(false)}
                            >
                                X
                            </p>
                        </header>
                        <div className="flex-container">
                            <div className="sidebar">
                                <p className="sidebar-p"> This PC</p>
                                <p className="sidebar-p"> Documents</p>
                                <p className="sidebar-p"> Downloads</p>
                                <p className="sidebar-p"> Music</p>
                                <p className="sidebar-p"> Pictures</p>
                                <p className="sidebar-p"> Local Disk (C:)</p>
                            </div>
                            <div className="folders-container">
                                <ExeIcon
                                    setTerminalDisplay={
                                        props.setTerminalDisplay
                                    }
                                />
                            </div>
                        </div>
                    </div>
                </Draggable>
            ) : null}
        </>
    );
};

export default WindowsFileEx;
