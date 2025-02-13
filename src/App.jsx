
import './App.css';
import './Components/LoadingScreen';
import './index.css'
import { LoadingScreen } from './Components/LoadingScreen';
import { useState } from 'react';
import { Navbar } from './Components/Navbar';


function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
  <>
   {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />} 

    <div className={`min-h-screen transition-opacity duration-700 ${isLoaded ? "opacity-100": "opacity-0"} bg-black text-gray-100`}>
<Navbar/>
    </div>
    
    
    </>
  )
}

export default App
