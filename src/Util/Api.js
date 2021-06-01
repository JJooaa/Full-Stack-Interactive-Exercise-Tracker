import axios from "axios";

export const deleteExercise = async (id) => {
    const res = axios
        .delete(`https://joanodeback.herokuapp.com/exercises/${id}`)
    return (await res).data;
};

export const postExercise = async (exercise) => {
    const res = axios
        .post("https://joanodeback.herokuapp.com/exercises/add", exercise)
        
    return (await res).data;
};

export const fetchExercises = async () => {
    const res = await axios.get("https://joanodeback.herokuapp.com/exercises");
    return res.data;
};
