import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './Componetns/Home';
import Edit from './Componetns/Edit';
import Newuser from './Componetns/Newuser';
function App() {
  return (
  <>
 <BrowserRouter>
 <Routes>
  <Route path='/' element={<Home />}></Route>
  <Route path='/Home' element={<Home />}></Route>
  <Route path='/Edit/:id' element={<Edit />}></Route>
  <Route path='/Newuser' element={<Newuser />}></Route>
 </Routes>
 </BrowserRouter>
  </>
  );
}

export default App
