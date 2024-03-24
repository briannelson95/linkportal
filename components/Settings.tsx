"use client"
import React, { useState } from 'react'
import PlusIcon from './icons/PlusIcon';
import SettingsIcon from './icons/SettingsIcon';

export default function Settings() {
    const [showOptions, setShowOptions] = useState<boolean>(false);

    const handleShowOptions = () => {
        setShowOptions(!showOptions)
    }

    return (
        <>
            <div className={`${showOptions ? 'visible' : 'invisible'} fixed bottom-16 right-5 w-8 h-8 bg-gray-500 rounded-full flex justify-center items-center`}>
                <PlusIcon />
            </div>
            <div onMouseEnter={handleShowOptions} onMouseLeave={handleShowOptions} className='fixed bottom-4 right-4 w-10 h-10 bg-gray-500 rounded-full flex justify-center items-center'>
                <SettingsIcon />
            </div>
        </>
    )
}
