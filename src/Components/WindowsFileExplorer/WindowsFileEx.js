import React from "react";
import "./WindowsFileEx.css";
import Draggable from "react-draggable";
import ExeIcon from "../Icons/ExeIcon";

const WindowsFileEx = (props) => {
    const renderComponent = () => {
        if (props.displayWfe === true) {
            return (
                <Draggable handle="#handle">
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
                                <p className="sidebar-p">This PC</p>
                                <p className="sidebar-p"> Documents</p>
                                <p className="sidebar-p"> Downloads</p>
                                <p className="sidebar-p"> Music</p>
                                <p className="sidebar-p"> Pictures</p>
                                <p className="sidebar-p"> Local Disk (C:)</p>
                            </div>
                            <div className="folders-container">
                                <ExeIcon />
                            </div>
                        </div>
                    </div>
                </Draggable>
            );
        }
    };

    return <>{renderComponent()}</>;
};

export default WindowsFileEx;
