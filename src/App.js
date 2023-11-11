import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Collection from './Pages/Collection/Collection';
import Shop from './Pages/Shop/Shop';
import Android from './Pages/Android/Android';
import Accessories from './Pages/Accessories/Accessories';
import Memory from './Pages/Memory&Storage/Memory&Storage';
import Pages from './Pages/About/About';
import Login from './Pages/Login/Login';

function App() {
  return (
    <>
      <Routes>
        
        <Route path='/' element={<Home />} />
        <Route path='/collection' element={<Collection />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/android' element={<Android />} />
        <Route path='/accessories' element={<Accessories />} />
        <Route path='/memory' element={<Memory />} />
        <Route path='/about' element={<Pages />} />
        <Route path='/login' element={<Login />} />
        <Route />

      </Routes>
    </>
  );
}

export default App;
