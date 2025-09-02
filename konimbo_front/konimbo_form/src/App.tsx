import { useEffect } from 'react';
import './App.css'
import { Footer } from './Components/Footer/Footer'
import { Menu } from './Components/Menu/Menu'
import { Routing } from './Components/Routing/Routing'
import { FaWhatsapp } from "react-icons/fa";
import AOS from "aos"; 

function App() {

 useEffect(()=>{

    AOS.init({
      duration: 1000, 
      easing: "ease-in-out", 
      once: false,
      
    });
  },[])
    
  

  return (
    <div className='App'>
      <Menu/>
      <Routing/>
      <Footer/>
      <button className='whatsapp'>
        Message Us <span className='whatsapp_icon'><FaWhatsapp/></span>
      </button>
    </div>
  )
}

export default App
