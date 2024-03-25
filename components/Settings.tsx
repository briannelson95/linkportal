"use client"
import React, { useState } from 'react'
import PlusIcon from './icons/PlusIcon';
import SettingsIcon from './icons/SettingsIcon';
import AddLink from './AddLink';

export default function Settings() {
    const [showOptions, setShowOptions] = useState<boolean>(false);

    const handleShowOptions = () => {
        setShowOptions(!showOptions)
    }

    return (
        <>
            <div onMouseEnter={handleShowOptions} className='fixed bottom-4 right-4 w-10 h-10 bg-gray-500 rounded-full flex justify-center items-center'>
                <div className='relative h-full' onMouseLeave={handleShowOptions}>
                    <div className={`${showOptions ? 'visible' : 'invisible'}`}>
                        <AddLink />
                    </div>
                </div>
                <SettingsIcon />
            </div>
        </>
    )
}
