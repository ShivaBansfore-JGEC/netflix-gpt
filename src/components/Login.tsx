import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(false);
    const toggleFormType = () => {
        setIsSignInForm(prev => !prev);
    }

    return (
        <div>
            <Header />
            <div>
                <img src='https://assets.nflxext.com/ffe/siteui/vlv3/0552717c-9d8c-47bd-9640-4f4efa2de663/537e2c5e-c750-4d4c-9f7a-e66fe93eb977/IN-en-20240701-POP_SIGNUP_TWO_WEEKS-perspective_WEB_b00eeb83-a7e8-4b5b-8ff7-86ed92c51caf_medium.jpg' />
                <form className='absolute top-0 w-3/12 p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80'>
                    <h1 className='font-bold text-3xl py-4'>{isSignInForm ? 'Sign In' : 'Sign Up'}</h1>
                    {!isSignInForm && (<input type='text'
                        placeholder='Name'
                        className='p-2 my-4 w-full bg-gray-700'
                    />)}
                    <input type='email'
                        placeholder='Email Address'
                        className='p-2 my-4 w-full bg-gray-700'
                    />
                    <input type='password'
                        placeholder='Password'
                        className='p-2 my-4 w-full bg-gray-700'
                    />
                    <button className='p-2 my-6 bg-red-700 w-full rounded-lg'>{isSignInForm ? 'Sign In' : 'Sign Up'}</button>
                    <p className='py-4 cursor-pointer' onClick={toggleFormType}>New to Netflix? Sign up now.</p>
                </form>
            </div>
        </div>
    )
}

export default Login