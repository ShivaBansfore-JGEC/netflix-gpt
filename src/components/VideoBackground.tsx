import React from "react";
import useTrailerVideo from "../hooks/useTrailerVideo";
import { useSelector } from "react-redux";
interface videoBackgroundProps {
    movieId: number
}

const VideoBackground: React.FC<videoBackgroundProps> = ({ movieId }) => {
    useTrailerVideo({ movieId });
    const trailer = useSelector((store: { movies: { trailer: any } }) => store.movies.trailer);

    if (!trailer?.key) return <h1>loading...</h1>
    return (
        <div className="w-screen aspect-video">
            <iframe
                className="w-screen aspect-video"
                src={`https://www.youtube.com/embed/${trailer?.key}?autoplay=1&mute=1`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            >
            </iframe>
        </div>
    )
}

export default VideoBackground;