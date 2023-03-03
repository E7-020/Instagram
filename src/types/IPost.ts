export interface IPost {
    _id: string,
    description: string,
    comments: [],
    image: string,
    user: {
        _id: string,
        username: string,
        avatar: string
    },
    created_at: string,
    likes: [],
}

export type postState = {
    post:IPost[];
    isLoading: boolean;
    step: number;
}
