import { Posts } from '../components/Posts';
import { NavBar } from '../additional–°omponents/NavBar';
import '../scss/home.scss';
import { uploadPosts } from "../store/reducers/post/postAction";
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/hooks';
import { SuggestionsBlock } from '../additional–°omponents/SuggestionsBlock';
import { Modall } from '../additional–°omponents/Modall';
export const Home = () => {
    const { step } = useAppSelector(state => state.post)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(uploadPosts())
    },[])

    return(
            <div className='home'>
              <NavBar />  
                <div className='post-block'>
                    <Posts/>
                    <SuggestionsBlock/>
                </div>
               {step && <Modall/>}
            </div>
    )
}