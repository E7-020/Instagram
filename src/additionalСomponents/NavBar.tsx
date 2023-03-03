import InstagramSvg from '../assets/instagram.svg';
import HomeSvg from '../assets/Home.svg';
import MessagesSvg from '../assets/messages.svg';
import AddSvg from '../assets/add.svg';
import TrendsSvg from '../assets/trends.svg';
import LikesSvg from '../assets/likes.svg';
import Search from '../assets/search.svg';
import '../scss/nav-bar.scss';
import { useAppDispatch, useAppSelector } from '../hooks/hooks';
import { setStep } from '../store/reducers/post/postSlice';




export const NavBar = () => {
    const avatar = useAppSelector((state) => state.user.user.avatar);
    const dispatch = useAppDispatch()

    return(

        <div className='nav-bar'>
            <div className='nav-bar-logo'>
                <img src={InstagramSvg} alt="" />
            </div>
            <div className='nav-bar-search'>
                <img src={Search} alt="" />
                <input  placeholder= 'Search'type="text"/>
            </div>
            
            <div className='nav-bar-icon'>
                <img src={HomeSvg} alt="" />
                <img src={MessagesSvg} alt="" />
                <img onClick={() => dispatch(setStep(1))} className='nav-bar-icon-modal' src={AddSvg} alt="" />
                <img src={TrendsSvg} alt="" />
                <img src={LikesSvg} alt="" />
                <img className='nav-bar-icon-profile' src={avatar} alt="" />
            </div>  
        </div>

    )
}