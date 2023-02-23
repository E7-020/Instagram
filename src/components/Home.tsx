import { HomePost } from '../additionalСomponents/HomePost';
import { NavBar } from '../additionalСomponents/NavBar';
import '../scss/home.scss';
export const Home = () => {
    return(
        <div className='Home'>
            <NavBar/>
            <HomePost/>
        </div>
    )
}