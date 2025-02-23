import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleGptSearchView } from '../redux/slices/gptSlice'

const Header = () => {
    const dispatch = useDispatch()
    const handleGptOnClick = () => {
        dispatch(toggleGptSearchView())
    }

    return (
        <div className='w-screen flex absolute z-10 px-8 py-2 bg-gradient-to-b from-black justify-between'>
            <img className='w-44' alt='logo' src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png' />
            <button onClick={handleGptOnClick} className='text-white px-4 bg-purple-800 rounded-lg'>GPT Search</button>
        </div>
    )
}

export default Header