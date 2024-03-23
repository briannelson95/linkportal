"use client"
import React, { useState } from 'react'
import PlusIcon from './icons/PlusIcon'
import XIcon from './icons/XIcon';

export default function AddLink() {
    const [open, setOpen] = useState<boolean>(false);
    const [title, setTitle] = useState<string>('');
    const [link, setLink] = useState<string>('');

    const handleOpen = () => {
        setOpen(!open)
    }

    return (
        <>
            <div className={`${open ? 'visible' : 'invisible'} absolute top-0 left-0 bg-black/50 w-full h-full z-10`}>
                <div className='relative flex w-full h-full justify-center items-center'>
                    <div className='absolute bg-gray-500 p-2 rounded-md border border-gray-400 w-3/4 md:w-1/3'>
                        <div className='flex w-full justify-between mb-2'>
                            <p className='font-semibold'>Add a new link</p>
                            <button onClick={handleOpen}>
                                <XIcon />
                            </button>
                        </div>
                        <form className='space-y-2 max-w-sm mx-auto'>
                            <label htmlFor='title' className='flex flex-col text-sm'>
                                Title
                                <input
                                    type='text'
                                    className='bg-gray-400 border border-gray-300 rounded px-2 py-1 placeholder-gray-200'
                                    name='title'
                                    placeholder='Title to show'
                                    value={title}
                                    onChange={(e: any) => setTitle(e.target.value)}
                                />
                            </label>
                            <label htmlFor='link' className='flex flex-col text-sm'>
                                Link
                                <input
                                    type='text'
                                    className='bg-gray-400 border border-gray-300 rounded px-2 py-1 placeholder-gray-200'
                                    name='link'
                                    placeholder='Custom link'
                                    value={link}
                                    onChange={(e: any) => setLink(e.target.value)}
                                />
                            </label>
                            <button
                                type='submit'
                                className='my-gradient px-2 py-1 rounded text-black text-sm font-bold float-end border border-gray-300'
                            >
                                Save
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <button onClick={handleOpen} className='fixed bottom-4 right-4 w-10 h-10 bg-gray-500 rounded-full flex justify-center items-center'>
                <PlusIcon />
            </button>
        </>
    )
}
