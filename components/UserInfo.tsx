import React from 'react'

export default function UserInfo(props: UserInfoProps) {
    return (
        <div className='mt-10 flex flex-col items-center'>
            <div 
                className='bg-gray-500 bg-no-repeat bg-center bg-cover h-24 md:h-20 aspect-square rounded-lg overflow-hidden'
                style={{backgroundImage: `url(${props.image})`}}
            />
            <div className='text-center md:mt-2 w-full'>
                <h1 className='text-2xl font-bold'>{props.name}</h1>
                <p className='text-gray-400 text-sm leading-3'>{props.username}</p>
                <p className='text-left mt-2 md:text-sm'>{props.bio}</p>
            </div>
        </div>
    )
}
