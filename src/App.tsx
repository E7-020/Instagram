import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Auth } from './additionalСomponents/Auth';
import { setToken } from './API/api';
import './app.css';
import { Home } from './components/Home';
import { Authorization } from './components/SignIn';
import { useAppDispatch } from './hooks/hooks';
import { getUser } from './store/reducers/user/userAction';

function App() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    setToken()
    dispatch(getUser())
  }, [])

  return (
    <div className="app">
      <Routes>
        <Route path='/' element={<Authorization/>}/> 
        <Route path='/home' element={<Auth><Home/></Auth>}/> 
      </Routes>
    </div>
  );
}

export default App;
