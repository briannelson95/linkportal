import React from 'react'

export default function UserLayout({ children }: {children: React.ReactNode}) {
    return (
        <div className='max-w-sm mx-auto'>
            {children}
        </div>
    )
}
