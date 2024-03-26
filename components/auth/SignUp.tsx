"use client"

import { supabase } from '@/lib/supabaseClient'
import React, { useState } from 'react'

export default function SignUp() {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [fName, setFName] = useState<string>('');
    const [lName, setLName] = useState<string>('');
    const [username, setUsername] = useState<string>('');

    const checkIfUsernameExists = async () => {
        const { data } = await supabase
            .from('profiles')
            .select('username')

        console.log(data)
    }

    async function signUpNewUser() {
        const usernameWithAt = `@${username}`;

        const { data, error } = await supabase.auth.signUp({
            email,
            password,
            options: {
                emailRedirectTo: 'http://localhost:3000/welcome',
                data: {
                    username: usernameWithAt,
                    first_name: fName,
                    last_name: lName,
                }
            },
        });
    }

    return (
        <div className='max-w-sm mx-auto bg-gray-600 p-4 rounded-md border border-gray-500'>
            <h1 className='text-2xl font-bold'>Sign Up</h1>
            <form className='flex flex-col space-y-2 text-sm mt-2'>
                <fieldset className='flex gap-2 max-w-sm'>
                    <input
                        type='text'
                        name='firstname'
                        placeholder='First name'
                        className='border rounded-md bg-transparent px-2 py-1'
                        value={fName}
                        onChange={(e: any) => setFName(e.target.value)}
                    />
                    <input
                        type='text'
                        name='lastname'
                        placeholder='Last name'
                        className='border rounded-md bg-transparent px-2 py-1'
                        value={lName}
                        onChange={(e: any) => setLName(e.target.value)}
                    />
                </fieldset>
                <div className="flex gap-2 w-full relative">
                    <span className="absolute top-0 left-0 px-2 py-1"> @ </span>
                    <input
                        type='text'
                        name='username'
                        placeholder='username'
                        className='border rounded-md bg-transparent px-2 py-1 pl-6 w-full'
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <input
                    type='email'
                    placeholder='email'
                    name='email'
                    className='border rounded-md bg-transparent px-2 py-1'
                    value={email}
                    onChange={(e: any) => setEmail(e.target.value)}
                />
                <input
                    type='password'
                    name='password'
                    placeholder='password'
                    className='border rounded-md bg-transparent px-2 py-1'
                    value={password}
                    onChange={(e: any) => setPassword(e.target.value)}
                />
                <button
                    onClick={signUpNewUser}
                    className='my-gradient rounded-md px-2 py-1 text-black font-semibold'
                >
                    Sign Up
                </button>
                <p className='text-[12px] text-gray-300'>By signing up you agree to the terms and conditions</p>
            </form>
        </div>
    )
}
