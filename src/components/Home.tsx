import { Posts } from '../components/Posts';
import { NavBar } from '../additionalСomponents/NavBar';
import '../scss/home.scss';
import { uploadPosts } from "../store/reducers/post/postAction";
import { useEffect } from 'react';
import { useAppDispatch } from '../hooks/hooks';

export const Home = () => {

    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(uploadPosts())
    },[])

    return(
        <div className='Home'>
            <NavBar/>
            <Posts/>
        </div>
    )
}