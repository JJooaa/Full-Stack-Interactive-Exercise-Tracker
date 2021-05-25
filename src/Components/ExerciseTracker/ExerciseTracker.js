import React, { useState } from "react";
import "./ExerciseTracker.css";
import Draggable from "react-draggable";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import {
    useQuery,
    useMutation,
    useQueryClient,
    QueryClient,
    QueryClientProvider,
} from "react-query";

const object = {
    username: "joa",
    description: "uinti",
    duration: "30",
    date: "2021-03-24T01:00:00.000+00:00",
};

const deleteExercise = (id) => {
    axios
        .delete(`http://localhost:5000/exercises/${id}`)
        .then((response) => console.log(response.data));
};

const postExercise = (exercise) => {
    axios
        .post("http://localhost:5000/exercises/add", exercise)
        .catch((error) => console.log(error));
};

const fetchExercises = async () => {
    const res = await axios.get("http://localhost:5000/exercises/");
    console.log("hey")
    return res.data;
};

const ExerciseTracker = (props) => {
    const [startDate, setStartDate] = useState(new Date());
    const { data, status } = useQuery("exercises", fetchExercises);
    return (
        <>
            {props.exerciseTracker ? (
                <Draggable
                    handle="#handle"
                    onMouseDown={(e) => props.onStart(e)}
                >
                    <div className="exercise-tracker">
                        <div className="exercise-header" id="handle">
                            <p className="e-header-p">Exercise Tracker</p>
                            <p
                                className="exercise-close"
                                onClick={() => props.setExerciseTracker(false)}
                            >
                                X
                            </p>
                        </div>
                        <div className="exercises-content">
                            {status === "loading" ? <p>Loading...</p> : null}
                            <div className="exercises-holder">
                                {status === "loading" ? <p>Loading...</p> : data.map((item, index) => {
                                    return (
                                        <div
                                            className="exercise-item"
                                            key={index}
                                        >
                                            <p>{item.username}</p>
                                            <p>{item.description}</p>
                                            <p>{item.duration}</p>
                                            <p>{item.date}</p>
                                        </div>
                                    );
                                })}
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
            ) : null}
        </>
    );
};

export default ExerciseTracker;
