type UserInfoProps = {
    name: string;
    image: string;
    username: string;
    bio: string;
    isMyUser?: boolean
}

type User = {
    info: UserInfoProps;
    links: UserLinks[];
}

type UserLinks = {
    title: string;
    link: string;
}