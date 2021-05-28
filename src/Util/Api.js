import axios from "axios";

export const deleteExercise = async (id) => {
    const res = axios
        .delete(`http://localhost:5000/exercises/${id}`)
    return (await res).data;
};

export const postExercise = async (exercise) => {
    const res = axios
        .post("http://localhost:5000/exercises/add", exercise)
        
    return (await res).data;
};

export const fetchExercises = async () => {
    const res = await axios.get("http://localhost:5000/exercises/");
    return res.data;
};
