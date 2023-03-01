import InstagramSvg from '../assets/instagram.svg';
import HomeSvg from '../assets/Home.svg';
import MessagesSvg from '../assets/messages.svg';
import AddSvg from '../assets/add.svg';
import TrendsSvg from '../assets/trends.svg';
import LikesSvg from '../assets/likes.svg';
import Search from '../assets/search.svg';
import '../scss/nav-bar.scss';
import { useAppSelector } from '../hooks/hooks';
import { FC } from 'react';

interface modal {
    modalActive:any
    setModalActive:any
 }


export const NavBar: FC<modal> = ({modalActive,setModalActive}) => {
    const avatar = useAppSelector((state) => state.user.user.avatar);

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
                <img onClick={() => setModalActive(true)} className='nav-bar-icon-modal' src={AddSvg} alt="" />
                <img src={TrendsSvg} alt="" />
                <img src={LikesSvg} alt="" />
                <img className='nav-bar-icon-profile' src={avatar} alt="" />
            </div>
          
        </div>
    )
}