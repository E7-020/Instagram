import InstagramSvg from '../assets/instagram.svg';
import HomeSvg from '../assets/Home.svg';
import MessagesSvg from '../assets/messages.svg';
import AddSvg from '../assets/add.svg';
import TrendsSvg from '../assets/trends.svg';
import LikesSvg from '../assets/likes.svg';
import Search from '../assets/search.svg';
import '../scss/nav-bar.scss';

export const NavBar = () => {
    return(
        <div className='nav-bar'>
            <div className='nav-bar-logo'>
                <img src={InstagramSvg} alt="" />
            </div>
            <div className='nav-bar-search'>
                <input  placeholder= 'Search'type="text" />
            </div>
            <div className='nav-bar-icon'>
                <img src={HomeSvg} alt="" />
                <img src={MessagesSvg} alt="" />
                <img src={AddSvg} alt="" />
                <img src={TrendsSvg} alt="" />
                <img src={LikesSvg} alt="" />
                <img src="" alt="" />
            </div>
        </div>
    )
}