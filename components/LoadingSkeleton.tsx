import React from 'react'

export default function LoadingSkeleton() {
    return (
        <div className='mt-10 flex flex-col items-center'>
            {/* Image here */}
            <div className='bg-gray-500 h-24 md:h-20 aspect-square rounded-lg' />
            <div className='flex flex-col items-center md:mt-2 w-full space-y-2'>
                <div className='h-8 w-1/2 bg-gray-500 rounded-md' />
                <div className='h-3 w-1/4 bg-gray-500 rounded-md' />
                <div className='self-start w-full space-y-2'>
                    <div className='h-4 w-full bg-gray-500 rounded-md' />
                    <div className='h-4 w-2/5 bg-gray-500 rounded-md' />
                </div>
        </div>
            <div className='space-y-2 w-full mt-2'>
                {Array.from({ length: 3}, (_, index) => (
                    <div key={index} className='w-full bg-gray-500 h-12 rounded-md' />
                ))}
            </div>
        </div>
    )
}
