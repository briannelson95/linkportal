"use client"
import React, { useState } from 'react'
import NavButton from './NavButton'
import MenuIcon from './icons/MenuIcon'
import LinkIcon from './icons/LinkIcon'
import { usePathname } from 'next/navigation'
import toast from 'react-hot-toast'
import XIcon from './icons/XIcon'

export default function Navbar() {
    const pathname = usePathname();
    const [open, setOpen] = useState<boolean>(false);

    const linkToCopy = "http://localhost:3000" + pathname

    const handleCopyLink = () => {
        navigator.clipboard.writeText(linkToCopy)
        toast('Link Copied', {
            icon: '🔗'
        })
    }

    const handleOpen = () => {
        setOpen(!open);
    };

    return (
        <>
             <div 
                className={
                        `${open ? 'visible' : 'invisible'} absolute right-4 top-16 bg-gray-500 rounded-md transition-all duration-500`
                    }
                >
                <div className='relative w-full h-4'>
                    <button className='absolute left-2 top-2' onClick={handleOpen}><XIcon /></button>
                </div>
                <div className='p-2'>
                    Popout
                </div>
            </div>
            <nav className='flex justify-end gap-2 pt-4 px-4'>
                {pathname.includes('@') && (
                    <button onClick={handleCopyLink}>
                        <NavButton>
                            <LinkIcon />
                        </NavButton>
                    </button>
                )}
                <button onClick={handleOpen}>
                    <NavButton>
                        <MenuIcon />
                    </NavButton>
                </button>
            </nav>
        </>
    )
}
