import { Posts } from '../components/Posts';
import { NavBar } from '../additionalСomponents/NavBar';
import '../scss/home.scss';
import { uploadPosts } from "../store/reducers/post/postAction";
import { useEffect } from 'react';
import { useAppDispatch } from '../hooks/hooks';
import { Modal } from "../additionalСomponents/Modal";
import { useState } from "react";
export const Home = () => {

    const dispatch = useAppDispatch()
    const [modalActive, setModalActive] = useState(false)

    useEffect(() => {
        dispatch(uploadPosts())
    },[])

    return(
        <div className='Home'>
            <NavBar modalActive={modalActive} setModalActive={setModalActive}/>
            <Posts/>
            <Modal active={modalActive} setActive={setModalActive} />
        </div>
    )
}