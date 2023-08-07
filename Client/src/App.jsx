import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './Componetns/Home';
import Signup from './Componetns/Signup';
function App() {
  return (
  <>
 <BrowserRouter>
 <Routes>
  <Route path='/' element={<Home />}></Route>
  <Route path='/Home' element={<Home />}></Route>
  <Route path='/Signup' element={<Signup />}></Route>
 </Routes>
 </BrowserRouter>
  </>
  );
}

export default App
