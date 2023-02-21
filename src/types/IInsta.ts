export interface IPost {
    _id: string,
    description: string,
    comments: [],
    image: string,
    user: string,
    created_at: string,
    likes: number,
}

export type postState = {
    posts:IPost[];
    isLoading: boolean;
}
export type userdate ={
    username:string;
    password:string;
}