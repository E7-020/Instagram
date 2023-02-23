export interface IUser {
    token: string,
    username: string,
    _id: string,
    avatar: string
}

export type userState = {
    user:IUser;
    isLoading: boolean;
    
}

export type userdate ={
    username:string;
    password:string;
}

