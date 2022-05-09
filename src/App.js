import { Route, Routes } from 'react-router-dom';
import './App.css';
import Headers from './SharePage/Headers/Headers';
import Home from './Pages/Home/Home';


function App() {
  return (
    <div className="">
      <Headers></Headers>
 
      <Routes>
      <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
      </Routes>
     
     
    </div>
  );
}

export default App;
