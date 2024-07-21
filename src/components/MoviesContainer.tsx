import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const MoviesContainer = () => {
    const movies = useSelector((store: { movies: { nowPlayingMovies: any } }) => store.movies.nowPlayingMovies);
    if (!movies) return null;
    return (
        <div className="bg-black">
            <div className="-mt-44 pl-12 relative z-20">
                <MovieList title={'Now Playing Movies'} movies={movies} />
                <MovieList title={'Trending Movies'} movies={movies} />
                <MovieList title={'Upcoming Movies'} movies={movies} />
                <MovieList title={'Horror Movies'} movies={movies} />
            </div>
        </div>
    )
}

export default MoviesContainer;