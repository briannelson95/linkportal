import React from 'react'

export default function NavButton({children, color}: {children: React.ReactNode, color?: boolean}) {
    return (
        <div className={`${color ? 'my-gradient' : 'bg-gray-600 text-gray-300'}  h-10 w-10 rounded-md flex justify-center items-center text-black`}>
            {children}
        </div>
    )
}
