import React, { useState } from "react";
import "./ExerciseTracker.css";
import Draggable from "react-draggable";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const ExerciseTracker = (props) => {
    const [startDate, setStartDate] = useState(new Date());
    return (
        <>
            <Draggable handle="#handle" onMouseDown={(e) => props.onStart(e)}>
                <div className="exercise-tracker">
                    <div className="exercise-header" id="handle">
                        <p className="e-header-p">Exercise Tracker</p>
                        <p className="exercise-close">X</p>
                    </div>
                    <div className="exercises-content">
                        <div className="exercises-holder">
                            <div className="exercise-item"></div>
                            <div className="exercise-item"></div>
                            <div className="exercise-item"></div>
                            <div className="exercise-item"></div>
                            <div className="exercise-item"></div>
                            <div className="exercise-item"></div>
                        </div>
                        <div className="exercise-editor">
                            <form
                                onSubmit={(e) => {
                                    e.preventDefault();
                                }}
                            >
                                <label>Name</label>
                                <input
                                    className="form-input"
                                    type="text"
                                ></input>
                                <label>Description</label>
                                <input
                                    className="form-input"
                                    type="text"
                                ></input>
                                <label>Duration</label>
                                <input
                                    className="form-input"
                                    type="text"
                                ></input>
                                <label>Date</label>
                                <br />
                                <DatePicker
                                    className="form-input"
                                    selected={startDate}
                                    onChange={(date) => setStartDate(date)}
                                />
                                <input
                                    className="form-input submit"
                                    type="submit"
                                    value="Add Exercise"
                                ></input>
                            </form>
                        </div>
                    </div>
                </div>
            </Draggable>
        </>
    );
};

export default ExerciseTracker;
