import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import RegistrationForm from './components/RegistrationForm';
import LoginPage from './components/LoginPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ContactPage from './components/ContactPage';
import Profile from './components/Profile';
import ForgotPassword from './components/ForgotPassword';
import Details from './components/Details';
import Sample from './components/Sample';
import Carousel from './components/Carousel';



function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Navbar></Navbar>
     <Routes>
      <Route path='/' index Component={Home}></Route>
      <Route path='/login' element={<LoginPage/>}></Route>
      <Route path='/register' Component={RegistrationForm}></Route>
      <Route path='/contact' Component={ContactPage}></Route>
      <Route path='/profile' Component={Profile}></Route>
      <Route path='/forgotpassword' Component={ForgotPassword}></Route>
     </Routes>
     <Sample></Sample>
     

     </BrowserRouter>
   
     

     
    </div>
  );
}

export default App;
