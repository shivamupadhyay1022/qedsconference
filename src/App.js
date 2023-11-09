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
import Schedule from './pages/Schedule';
import Contact from './pages/Contact';
import Register3 from './pages/Register3';
import Upload  from './pages/Upload';
import Payment from './pages/Payment';
import Download from './pages/Download';


function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route exact path='/' element = {<Home/>}/>
        <Route exact path='/about' element= {<About/>}/>
        <Route exact path='/aboutus' element= {<Aboutus/>}/>
        <Route exact path='/aboutconf' element= {<Aboutconf/>}/>
        <Route exact path='/date' element= {<Important/>}/>
        <Route exact path='/register' element= {<Register3/>}/>
        <Route exact path='/guidelines' element= {<Guidelines/>}/>
        <Route exact path='/schedule' element= {<Schedule/>}/>
        <Route exact path='/contactus' element= {<Contact/>}/>
        <Route exact path='/upload' element= {<Upload/>}/>
        <Route exact path='/payment' element= {<Payment/>}/>
        <Route exact path='/download' element= {<Download/>}/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
