import InstagramSvg from '../assets/instagram.svg';
import { useState } from "react";
import '../scss/authorization.scss';
import '../scss/colors.scss';
import { useAppDispatch } from '../hooks/hooks';
import { authorization } from '../store/reducers/user/userAction';
import { Link } from 'react-router-dom';


export const Authorization = () => {
    const dispatch = useAppDispatch()
    const [userName, setUserName] = useState<string>("")
    const [password, setPassword] = useState<string>("");

    const login = () => {
        dispatch(authorization({userName, password}))
        setUserName("")
        setPassword("")
    }

    return(
        <div className='authorization'>
            <img src={InstagramSvg} alt="" />
            <div>
                <input value={userName} onChange={(e) => setUserName(e.target.value)}  type="text" placeholder="Телефон, имя пользователя или эл.адрес" />
            </div>
            <div>
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password"  placeholder="Пароль"/>
            </div>
            <Link className='active' style={{ textDecoration: "none" }} to='/Home' onClick={login}>Войти</Link>
        </div>
    )
}