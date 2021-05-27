import axios from "axios";

export const deleteExercise = async (id) => {
    axios
        .delete(`http://localhost:5000/exercises/${id}`)
        .then((response) => console.log(response.data));
};

export const postExercise = async (exercise) => {
    let res = axios
        .post("http://localhost:5000/exercises/add", exercise)
        .catch((error) => console.log(error));
    return res.data;
};

export const fetchExercises = async () => {
    const res = await axios.get("http://localhost:5000/exercises/");
    return res.data;
};
