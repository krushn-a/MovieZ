// We will create a global method using axios to call api
import axios from "axios";
const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZTRlNjEzNmQ4MjM1ZGNmNmU4YzZhYWM4MTJhNWUyOCIsInN1YiI6IjY0ZGVlNjIxZTE5ZGU5MDEzYTI3OGJmMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.IHMvsiF_yFBIDET4MLusmureBGQk8V7E3Q8ZQwtwZhA"; //importing token

const headers = {
    Authorization: `Bearer ${TMDB_TOKEN}`,
};

export const fetchData = async (url, params) => {
    try{
        const {data} = await axios.get(`${BASE_URL}${url}`, {
            headers,
            params
        })
        return data;
    }
    catch(error){
        console.log(error);
        return error;
    }
};
