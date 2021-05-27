import React, { useState } from "react";
import "./ExerciseTracker.css";
import Draggable from "react-draggable";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { fetchExercises, deleteExercise, postExercise } from "../../Util/Api";
import { useQuery, useMutation } from "react-query";

const ExerciseTracker = (props) => {
    const [startDate, setStartDate] = useState(new Date());
    const [exercise, setExercise] = useState({
        username: "",
        description: "",
        duration: "",
        date: "",
    });
    const { data, status, refetch } = useQuery("exercises", fetchExercises);

    // 2021-03-24T01:00:00.000+00:00

    const mutation = useMutation((exercise) => postExercise(exercise), {
        onSuccess: () => {
            refetch();
        },
    });

    const mutation1 = useMutation((id) => deleteExercise(id), {
        onSuccess: () => {
            refetch();
        },
    });

    const handleChange = (e) => {
        setExercise((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

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
                            <div className="exercises-inner">
                                {status === "loading" &&
                                status !== "success" ? (
                                    <p className="exercise-item-p">
                                        Loading...
                                    </p>
                                ) : (
                                    data.map((item, index) => {
                                        return (
                                            <div
                                                className="exercise-item"
                                                key={index}
                                            >
                                                <p>{item.username}</p>
                                                <p>{item.description}</p>
                                                <p>{item.duration}</p>
                                                <p>{item.date}</p>
                                                <button
                                                    id={item._id}
                                                    onClick={(e) =>
                                                        mutation1.mutate(
                                                            e.target.id
                                                        )
                                                    }
                                                >
                                                    Delete
                                                </button>
                                            </div>
                                        );
                                    })
                                )}
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
                                        name="username"
                                        value={exercise.username}
                                        onChange={handleChange}
                                    ></input>
                                    <label>Description</label>
                                    <input
                                        className="form-input"
                                        type="text"
                                        value={exercise.description}
                                        name="description"
                                        onChange={handleChange}
                                    ></input>
                                    <label>Duration</label>
                                    <input
                                        className="form-input"
                                        value={exercise.duration}
                                        type="text"
                                        name="duration"
                                        onChange={handleChange}
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
                                <button
                                    onClick={() => mutation.mutate(exercise)}
                                >
                                    ADD
                                </button>
                            </div>
                        </div>
                    </div>
                </Draggable>
            ) : null}
        </>
    );
};

export default ExerciseTracker;
