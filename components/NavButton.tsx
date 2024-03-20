import React from 'react'

export default function NavButton({children}: {children: React.ReactNode}) {
    return (
        <div className='my-gradient h-10 w-10 rounded-md flex justify-center items-center text-black'>
            {children}
        </div>
    )
}
