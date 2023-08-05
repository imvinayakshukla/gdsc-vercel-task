import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Footer from './components/footer';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";


function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar />
        
        <Routes>

          <Route path='/' element={<Home/>} />
          <Route path='/login' element={<Login/>} />
        </Routes>



      </BrowserRouter>
      
      
      <Footer />
    </>
  );
}

export default App;
