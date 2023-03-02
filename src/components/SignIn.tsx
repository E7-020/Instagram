import InstagramSvg from '../assets/instagram.svg';
import { useState } from "react";
import '../scss/sig-in.scss';
import { useAppDispatch, useAppSelector} from '../hooks/hooks';
import { authorization } from '../store/reducers/user/userAction';
import { Navigate, useNavigate } from "react-router-dom";




export const Authorization = () => {
    const dispatch = useAppDispatch()
    const {isAuth} = useAppSelector(state => state.user)
    const [userName, setUserName] = useState<string>("")
    const [password, setPassword] = useState<string>("");
    const navigate = useNavigate()


    // const login = () => {
    //     dispatch(authorization({userName, password}))
    //     setUserName("")
    //     setPassword("")

    // }

    const login = async () => {
        try {
            await dispatch(authorization({ userName, password })).unwrap();
            setUserName("");
            setPassword("");
            navigate('/home')
        } catch (e) {
            return e;
        }
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            login();
        }
    };

    return(
        <div className='authorization'>
            <img src={InstagramSvg} alt="" />
            <div>
                <input value={userName} onChange={(e) => setUserName(e.target.value)} type="text" placeholder="Телефон, имя пользователя или эл.адрес" />
            </div>
            <div>
                <input value={password}  onKeyDown={(e) => handleKeyDown(e)} onChange={(e) => setPassword(e.target.value)} type="password"  placeholder="Пароль"/>
            </div>
            <button className='active' onClick={login}>Войти</button>
            {/* {isAuth && <Navigate to='/home'/>} */}
        </div>
    )
}