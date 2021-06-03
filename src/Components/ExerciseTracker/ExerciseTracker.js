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
        date: `${startDate}`,
    });

    const { data, status, refetch } = useQuery("exercises", fetchExercises);

    const addMutation = useMutation((exercise) => postExercise(exercise), {
        onSuccess: () => {
            refetch();
        },
    });

    const deleteMutation = useMutation((id) => deleteExercise(id), {
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

    const onDateChange = (date) => {
        setExercise({ ...exercise, date: date });
    };

    const formatDate = (item) => {
        let date = item.date;
        let dd = date.slice(8, 10);
        let mm = date.slice(5, 7);
        let yyyy = date.slice(0, 4);
        let formattedDate = `${dd}.${mm}.${yyyy}`;
        return formattedDate;
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
                                                <p className="item-p">
                                                    {item.username}
                                                </p>
                                                <p className="item-p">
                                                    {item.description}
                                                </p>
                                                <p className="item-p">
                                                    {item.duration} Min
                                                </p>
                                                <p className="item-p">
                                                    {formatDate(item)}
                                                </p>
                                                <button
                                                    className="remove-button"
                                                    id={item._id}
                                                    onClick={(e) =>
                                                        deleteMutation.mutate(
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
                                <p className="exep-p">
                                    You can keep track of exercises. <br />
                                    Add Exercise by filling the form
                                    information.
                                </p>
                                <form
                                    onSubmit={(e) => {
                                        e.preventDefault();
                                        addMutation.mutate(exercise);
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
                                        type="number"
                                        name="duration"
                                        onChange={handleChange}
                                    ></input>
                                    <label>Date</label>
                                    <br />
                                    <DatePicker
                                        className="form-input"
                                        selected={startDate}
                                        onSelect={(date) => setStartDate(date)}
                                        onChange={onDateChange}
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
