import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../redux/slices/movieSlices";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant";

const useNowPlayingMovies = () => {
    const dispatch = useDispatch();
    const getNowPlayingMovies = async () => {
        const response = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS);
        const data = await response.json();
        console.log({ data })
        dispatch(addNowPlayingMovies(data.results))
    }

    useEffect(() => {
        getNowPlayingMovies();
    }, [])
}

export default useNowPlayingMovies;