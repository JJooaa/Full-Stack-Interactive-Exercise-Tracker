import axios from "axios";

export const deleteExercise = async (id) => {
    const res = axios
        .delete(`${process.env.REACT_APP_API_URI}/${id}`)
    return (await res).data;
};

export const postExercise = async (exercise) => {
    const res = axios
        .post(`${process.env.REACT_APP_API_URI}/add`, exercise)
        
    return (await res).data;
};

export const fetchExercises = async () => {
    const res = await axios.get(`${process.env.REACT_APP_API_URI}`);
    return res.data;
};
