import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../redux/slices/movieSlices";

interface trailerProps {
    movieId: number
}
const useTrailerVideo = ({ movieId }: trailerProps) => {
    const dispatch = useDispatch();
    const getMovieVideo = async () => {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, API_OPTIONS);
        const videoList = await response.json();
        const trailer = videoList.results.find((video: any) => video.type === 'Trailer');
        dispatch(addTrailerVideo(trailer));
    }

    useEffect(() => {
        if (!movieId) return;
        getMovieVideo()
    }, [movieId])
}

export default useTrailerVideo;