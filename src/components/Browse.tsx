import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMoview'
import MainContainer from './MainContainer';
import MoviesContainer from './MoviesContainer';
import { useSelector } from 'react-redux';
import GptSearch from './GptSearch';

const Browse = () => {
    useNowPlayingMovies();
    const showGptSearch = useSelector((store: { gpt: { showGptSearch: boolean } }) => store.gpt.showGptSearch)
    return (
        <div>
            <Header />
            {showGptSearch ? <GptSearch />
                :
                <>
                    <MainContainer />
                    <MoviesContainer />
                </>
            }
        </div>
    )
}

export default Browse