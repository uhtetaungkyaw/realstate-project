import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './style/css/style.css';
import Contact from './pages/Contact'
import Home from './pages/Home'
import ForSale from './pages/ForSale'
import ForRent from './pages/ForRent'
import Appointment from './pages/Appointment'
import About from './pages/About'
import Header from './component/Header'
import Footer from './component/Footer'
import PaymentService from './pages/PaymentService'
import Login from './pages/Login';
import Signup from './pages/Signup';

function App() {

  return (
    <>
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/Services/:id' element={<ForSale />}/>
        <Route path='/Services/:id' element={<ForRent />}/>
        <Route path='/Services/:id' element={<PaymentService />}/>
        <Route path='/Appointment' element={<Appointment />}/>
        <Route path='/About' element={<About />}/>
        <Route path='/Contact' element={<Contact />}/>
        <Route path='/Login' element={<Login />}/>
        <Route path='/Signup' element={<Signup />}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
