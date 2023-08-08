import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './Componetns/Home';
import Signup from './Componetns/Signup';
import Signin from './Componetns/Signin';
function App() {
  return (
  <>
 <BrowserRouter>
 <Routes>
  <Route path='/Home' element={<Home />}></Route>
  <Route path='/Signup' element={<Signup />}></Route>
  <Route path='/Sigin' element={<Signin />}></Route>
  <Route path='/Sigup' element={<Signup />}></Route>
 </Routes>
 </BrowserRouter>
  </>
  );
}

export default App
