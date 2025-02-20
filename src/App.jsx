
import './App.css';
// import './Components/LoadingScreen';
import './index.css'
import { LoadingScreen } from './Components/LoadingScreen';
import { useState } from 'react';
import { Navbar } from './Components/Navbar';
import MobileMenu from './Components/MobileMenu'
// import Home from "./Components/Sections/Home"

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
  <>
   {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />} 

    <div className={`min-h-screen transition-opacity duration-700 ${isLoaded ? "opacity-100": "opacity-0"} bg-black text-gray-100`}>
    </div>
    <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
    <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>

    {/* <Home/> */}



    
    </>
  )
}

export default App
