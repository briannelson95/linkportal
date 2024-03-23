"use client"
import React, { useState } from 'react'
import NavButton from './NavButton'
import MenuIcon from './icons/MenuIcon'
import LinkIcon from './icons/LinkIcon'
import { usePathname } from 'next/navigation'
import toast from 'react-hot-toast'
import Link from 'next/link'

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
                        `${open ? 'visible' : 'invisible'} absolute w-48 right-4 top-16 bg-gray-700 rounded-md z-20`
                    }
                >
                <div className='px-4 py-2'>
                    <ul className='space-y-2'>
                        <li>
                            <Link className='flex w-full' href={'/'} onClick={handleOpen}>About</Link>
                        </li>
                        <li>
                            <Link className='flex w-full' href={'/@briannelson'} onClick={handleOpen}>Login/Sign Up</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <nav className='flex justify-end gap-2 pt-4 px-4'>
                {pathname == '/' ? (
                    <button className='border border-gray-500 rounded-md px-2 py-1 shadow-md shadow-gray-600 hover:bg-gray-600 transition-all duration-150'>Login/Sign Up</button>
                ) : (
                    <>
                        {pathname.includes('@') && (
                            <button onClick={handleCopyLink}>
                                <NavButton color>
                                    <LinkIcon />
                                </NavButton>
                            </button>
                        )}
                        <button onClick={handleOpen}>
                            <NavButton>
                                <MenuIcon />
                            </NavButton>
                        </button>
                    </>
                )}
                
            </nav>
        </>
    )
}
