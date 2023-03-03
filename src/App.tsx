import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import { setToken } from './API/api';
import './app.css';
import { Home } from './components/Home';
import { Authorization } from './components/SignIn';
import { useAppDispatch } from './hooks/hooks';
import { getUser } from './store/reducers/user/userAction';
import { useAppSelector } from "./hooks/hooks";
import { useNavigate } from "react-router-dom";



function App() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    setToken()
    dispatch(getUser())
  }, [])

 

  const handleGetUser = async () => {
      try {
          setToken();
          await dispatch(getUser()).unwrap();
          navigate("/home");
      } catch (error) {
          navigate("/");
      }
  };

  useEffect(() => {
      handleGetUser()
  }, []);

  return (
    <div className="app">
      <Routes>
          <Route path='/home' element={<Home/>}/> 
          <Route path='/' element={<Authorization/>}/> 
      </Routes>
    </div>
  );
}

export default App;
