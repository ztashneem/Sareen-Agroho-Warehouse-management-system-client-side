import { Route, Routes } from 'react-router-dom';
import './App.css';
import Headers from './SharePage/Headers/Headers';
import Home from './Pages/Home/Home';
import Update from './Pages/Update/Update';
import ManageItems from './Pages/ManageItmes/ManageItems';
import AddItem from './Pages/ManageItmes/AddItem/AddItem';
import Signin from './Pages/SigninPage/Signin/Signin';
import Signup from './Pages/SigninPage/Signup/Signup';

function App() {
  return (
    <div className="">
      <Headers></Headers>
 
      <Routes>
      <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/manage' element={<ManageItems></ManageItems>}></Route>
        <Route path='/add' element={<AddItem></AddItem>}></Route>
        <Route path='/update/:id' element={<RequireAuth><Update></Update></RequireAuth>}></Route>
        <Route path='signin' element={<Signin></Signin>}></Route>
        <Route path='myitems' element={<RequireAuth><MyItems></MyItems></RequireAuth>}></Route>
        <Route path='signup' element={<Signup></Signup>}></Route>
      </Routes>
     
     
    </div>
  );
}

export default App;
