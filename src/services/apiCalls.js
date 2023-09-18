import axios from "axios";

const URL = "https://ghibliapi.vercel.app"

export const getFilms = async () => {
    let res = await axios.get(`${URL}/films`);
    return res.data
}