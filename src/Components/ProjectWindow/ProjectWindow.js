import React from "react";
import "./ProjectWindow.css";
import Draggable from "react-draggable";

const ProjectWindow = (props) => {
    
    const renderProjectWindow = () => {
        if (props.projectDisplay === true) {
            return (
                <>
                    <Draggable handle="#handle" onMouseDown={(e) => props.onStart(e)}>
                        <div className="project-window-container">
                            <div className="project-header" id="handle">
                                <p>Project 1</p>
                                <p
                                    className="close-project"
                                    onClick={() =>
                                        props.setProjectDisplay(false)
                                    }
                                >
                                    X
                                </p>
                            </div>
                        </div>
                    </Draggable>
                </>
            );
        }
    };

    return <>{renderProjectWindow()}</>;
};

export default ProjectWindow;
