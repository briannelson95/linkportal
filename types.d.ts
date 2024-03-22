type UserInfoProps = {
    name: string;
    image: string;
    username: string;
    bio: string;
}

type User = {
    info: UserInfoProps;
    links: UserLinks[];
}

type UserLinks = {
    title: string;
    link: string;
}