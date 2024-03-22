import LinkButton from '@/components/LinkButton'
import UserInfo from '@/components/UserInfo'
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

export default async function UserPage() {
    return (
        <main className='space-y-2 max-w-sm mx-auto'>
            <UserInfo 
                name={exampleUser.info.name}
                image={exampleUser.info.image}
                username={exampleUser.info.username}
                bio={exampleUser.info.bio}
            />
            <div className='space-y-2'>
                {exampleUser.links.length && exampleUser.links.map((link: UserLinks, index: number) => (
                    <LinkButton key={index} {...link} />
                ))}
            </div>
        </main>
    )
}
