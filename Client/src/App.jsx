import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './Componetns/Home';
import Signup from './Componetns/Signup';
import Signin from './Componetns/Signin';
import Edit from './Componetns/Edit';
import Newuser from './Componetns/Newuser';
function App() {
  return (
  <>
 <BrowserRouter>
 <Routes>
  <Route path='/' element={<Home />}></Route>
  <Route path='/Home' element={<Home />}></Route>
  <Route path='/Signup' element={<Signup />}></Route>
  <Route path='/Signin' element={<Signin />}></Route>
  <Route path='/Edit/:id' element={<Edit />}></Route>
  <Route path='/Newuser' element={<Newuser />}></Route>
 </Routes>
 </BrowserRouter>
  </>
  );
}

export default App
