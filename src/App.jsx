import HomePage from "./pages/HomePage"
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Nav from "./COMPONENTS/Nav";
import About from "./pages/About";
import Footer from "./COMPONENTS/Footer";
import Contact from './pages/Contact';
import Shop from './pages/Shop';
import Exhibitions  from "./pages/Exhibitions";


function App() {
  return (
    <>
        
        <Router>
        <Nav/>
        <Routes>
        <Route path='/' index element={<HomePage/>}/> 
        <Route path='/About' index element={<About/>}/> 
        <Route path='/Shop' index element={<Shop/>}/>  
        <Route path='/Exhibitions' index element={<Exhibitions/>}/>          
        </Routes>
        <Contact/>
        <Footer/>
      </Router>
    </>
  )
}

export default App
