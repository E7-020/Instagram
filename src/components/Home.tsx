import { Posts } from '../components/Posts';
import { NavBar } from '../additionalСomponents/NavBar';
import '../scss/home.scss';
import { uploadPosts } from "../store/reducers/post/postAction";
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/hooks';
import { SuggestionsBlock } from '../additionalСomponents/SuggestionsBlock';
import { Modall } from '../additionalСomponents/Modall';
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