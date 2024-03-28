"use client"

import React, { useState } from 'react'
import PencilIcon from './icons/PencilIcon'
import CheckIcon from './icons/CheckIcon';
import { supabase } from '@/lib/supabaseClient';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

export default function UserInfo(props: UserInfoProps) {
    const userId = '77d0cfce-26b8-482e-9a8f-a85a7cd310ac';

    const [edit, setEdit] = useState<boolean>(false);
    const [bio, setBio] = useState<string>(props.bio);

    const router = useRouter();

    async function fetchProfileData() {
        const { data, error } = await supabase
            .from('profiles')
            .select()
            .eq('id', userId)

        if (!error) {
            setBio(data[0].bio)
        }
    }

    async function updateProfile() {
        const { data, error } = await supabase
            .from('profiles')
            .update({
                bio
            })
            .eq('id', userId)

        if (!error) {
            toast.success('Updated Profile')
            fetchProfileData()
            router.refresh()
        }
    }

    const handleOpenEdit = () => {
        if (edit) {
            updateProfile()
        }
        setEdit(!edit)
    }

    return (
        <div className='mt-10 flex flex-col items-center'>
            <div 
                className='bg-gray-500 bg-no-repeat bg-center bg-cover h-24 md:h-20 aspect-square rounded-lg relative'
                style={{backgroundImage: `url(${props.image})`}}
            >
                {props.isMyUser && (
                    <button 
                        onClick={handleOpenEdit}
                        className='absolute -top-3 -right-3 flex justify-center items-center h-8 w-8 p-2 rounded-full my-gradient text-black'
                    >
                        {edit ? <CheckIcon /> : <PencilIcon />}
                    </button>
                )}
            </div>
            <div className='text-center md:mt-2 w-full'>
                <h1 className='text-2xl font-bold'>{props.name}</h1>
                <p className='text-gray-400 text-sm leading-3'>{props.username}</p>
                {edit ? (
                    <textarea
                        value={bio}
                        rows={3}
                        className='bg-gray-200/20 border border-white rounded-md mt-3 w-full p-2'
                        placeholder='Write an interesting bio'
                        onChange={(e: any) => setBio(e.target.value)}
                    />
                ) : (
                    <p className='text-left mt-2 md:text-sm'>{props.bio}</p>
                )}
            </div>
        </div>
    )
}
