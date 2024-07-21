import React, { useState, useRef } from 'react'
import Header from './Header'
import { validateForData } from '../utils/validation';
import { BACKGROUND_IMG } from '../utils/constant';

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);
    const [error, setError] = useState<any>(null);

    const name = useRef<HTMLInputElement>(null);
    const email = useRef<HTMLInputElement>(null);
    const password = useRef<HTMLInputElement>(null);


    const toggleFormType = () => {
        setIsSignInForm(prev => !prev);
    }

    const onSubmit = () => {
        const nameValue = name?.current?.value;
        const emailValue = email?.current?.value;
        const passValue = password?.current?.value;
        const errorMessage = validateForData(emailValue, passValue);
        setError(errorMessage)
    }

    return (
        <div>
            <Header />
            <div>
                <img src={BACKGROUND_IMG} />
                <form onSubmit={(e) => e.preventDefault()} className='absolute top-0 w-3/12 p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80'>
                    <h1 className='font-bold text-3xl py-4'>{isSignInForm ? 'Sign In' : 'Sign Up'}</h1>
                    {!isSignInForm && (<input ref={name} type='text'
                        placeholder='Name'
                        className='p-2 my-4 w-full bg-gray-700'
                    />)}
                    <input ref={email} type='email'
                        placeholder='Email Address'
                        className='p-2 my-4 w-full bg-gray-700'
                    />
                    <input ref={password} type='password'
                        placeholder='Password'
                        className='p-2 my-4 w-full bg-gray-700'
                    />
                    <button onClick={onSubmit} className='p-2 my-6 bg-red-700 w-full rounded-lg'>{isSignInForm ? 'Sign In' : 'Sign Up'}</button>
                    <p className='py-2 text-red-700 font-bold'>{error}</p>
                    <p className='py-4 cursor-pointer' onClick={toggleFormType}>
                        {isSignInForm ? "New to Netflix? Sign up now." : "Sign In now."}
                    </p>
                </form>
            </div>
        </div>
    )
}

export default Login