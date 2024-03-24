import AddLink from '@/components/AddLink'
import LinkButton from '@/components/LinkButton'
import UserInfo from '@/components/UserInfo'
import { supabase } from '@/lib/supabaseClient'
import React from 'react'

const exampleUser: User = {
    info: {
        name: 'Brian Nelson',
        image: '/images/briannelson.webp',
        username: '@briannelson',
        bio: 'Web developer and baker, I love making things on the web and a little treat'
    },
    links: [
        {
            title: 'briannelson.dev',
            link: 'https://briannelson.dev/'
        },
        {
            title: 'GitHub',
            link: 'https://github.com/briannelson95'
        },
        {
            title: 'Bread by Brian',
            link: 'https://breadbybrian.com/'
        },
        {
            title: 'Threads',
            link: 'https://www.threads.net/@briannelson__'
        },
    ]
}

export async function generateStaticParams() {
    const { data: profiles }: any = await supabase.from('profiles').select('username');
    // console.log(profiles)
    return profiles?.map(({ username }:any) => {
        username
    })
};

export default async function UserPage({ params: { id } }: { params: { id: string } }) {
    const { data: profile }: any = await supabase
        .from('profiles')
        .select('*, user_links(id, title, link, order)')
        .eq('username', decodeURIComponent(id));
    
    
    const userData = profile[0]

    const isMyUser = true;

    return (
        <main className='space-y-2'>
            <UserInfo 
                name={userData.name}
                image={exampleUser.info.image}
                username={userData.username}
                bio={userData.bio}
            />
            <div className='space-y-2'>
                {userData.user_links.length && userData.user_links.map((link: UserLinks, index: number) => (
                    <LinkButton key={index} {...link} />
                ))}
            </div>
            {isMyUser && (
               <AddLink />
            )}
        </main>
    )
}
