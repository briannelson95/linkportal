import AddLink from '@/components/AddLink'
import LinkButton from '@/components/LinkButton'
import Settings from '@/components/Settings'
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

type UserLink = {
    id: number;
    link: string;
    order: number;
    title: string;
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
        .select('*')
        .eq('username', decodeURIComponent(id));

    const userData = profile[0];
    
    const { data: links }: any = await supabase
        .from('user_links')
        .select()
        .eq('profile_id', userData.id)

    let userLinks

    if (links) {
        userLinks = links
    }

    const isMyUser = true;

    return (
        <main className='space-y-2'>
            <UserInfo 
                name={userData.first_name + ' ' + userData.last_name}
                image={exampleUser.info.image}
                username={userData.username}
                bio={userData.bio}
                isMyUser={isMyUser}
            />
            {/* Maybe keep this here */}
            <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]" />

            <div className='space-y-2'>
                {userLinks ? userLinks
                    .sort((a: UserLink, b: UserLink) => a.order - b.order)
                    .map((link: UserLinks, index: number) => (
                    <LinkButton key={index} {...link} />
                )) : (
                    <div>
                        <p className='text-gray-300'>This user has no links yet</p>
                    </div>
                )}
            </div>
            {isMyUser && (
                <AddLink />
            )}
        </main>
    )
}
