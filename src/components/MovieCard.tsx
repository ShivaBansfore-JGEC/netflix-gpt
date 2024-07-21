import { IMG_CDN_URL } from "../utils/constant";

const MovieCard = ({ posterPath }: { posterPath: string }) => {
    return (
        <div className="w-48 pr-4">
            <img alt="movie-card" src={IMG_CDN_URL + posterPath} />
        </div>
    )
}

export default MovieCard;