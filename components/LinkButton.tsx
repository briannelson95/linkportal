import React from 'react'

export default function LinkButton(props: UserLinks) {
    return (
        <div className='my-gradient w-full h-12 rounded-md text-black font-bold'>
            <a className='w-full h-full flex justify-center items-center' href={props.link} target='_blank'>{props.title}</a>
        </div>
    )
}
