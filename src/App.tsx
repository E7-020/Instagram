import { Route, Routes } from 'react-router-dom';
import { Auth } from './additionalСomponents/Auth';
import './app.css';
import { Home } from './components/Home';

import { Authorization } from './components/SignIn';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path='/' element={<Authorization/>}/> 
          <Route path='/Home' element={<Auth><Home/></Auth>}/> 
      </Routes>
    </div>
  );
}

export default App;
