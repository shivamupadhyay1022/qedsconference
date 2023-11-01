import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import { Button } from 'flowbite-react';
import { Route,Routes,BrowserRouter } from 'react-router-dom';
import Aboutconf from './pages/Aboutconf';
import Important from './pages/Important';
import Aboutus from './pages/Aboutus';
import Register from './pages/Register';
import Guidelines from './pages/Guidelines';

function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route exact path='/' element = {<Home/>}/>
        <Route exact path='/about' element= {<About/>}/>
        <Route exact path='/aboutus' element= {<Aboutus/>}/>
        <Route exact path='/aboutconf' element= {<Aboutconf/>}/>
        <Route exact path='/date' element= {<Important/>}/>
        <Route exact path='/register' element= {<Register/>}/>
        <Route exact path='/guidelines' element= {<Guidelines/>}/>

    </Routes>
  </BrowserRouter>
  );
}

export default App;
