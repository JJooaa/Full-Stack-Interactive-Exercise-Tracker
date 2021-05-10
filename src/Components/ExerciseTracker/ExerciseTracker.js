import React, {useState} from "react";
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
                            <form>
                                <label>Nimi</label>
                                <input
                                    className="form-input"
                                    type="text"
                                ></input>
                                <label>Lisätietoa</label>
                                <input
                                    className="form-input"
                                    type="text"
                                ></input>
                                <label>Kesto</label>
                                <input
                                    className="form-input"
                                    type="text"
                                ></input>
                                <label>Päivämäärä</label>
                                <DatePicker selected={startDate} onChange={date => setStartDate(date)} />
                            </form>
                        </div>
                    </div>
                </div>
            </Draggable>
        </>
    );
};

export default ExerciseTracker;
