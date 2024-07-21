import React from "react";
import MovieCard from "./MovieCard";

interface movieListProps {
    title: string,
    movies: any
}
const MovieList: React.FC<movieListProps> = ({ title, movies }) => {

    return (
        <div className="px-6">
            <h1 className="text-2xl py-2 text-white">{title}</h1>
            <div className="flex overflow-x-scroll">
                <div className="flex">
                    {movies.map((movie: any) => <MovieCard posterPath={movie.poster_path} />)}
                </div>
            </div>
        </div>
    )
}

export default MovieList;