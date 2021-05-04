import React from "react";
import "./StartWindow.css";

const StartWindow = (props) => {
    
    const renderStartWindow = () => {
        if (props.startWindow) {
            return (
                <>
                    <div className="startwindow-container">
                        
                    </div>
                </>
            )
        }
    };
    
    return (
        <>
            {renderStartWindow()}
        </>
    )
};

export default StartWindow;