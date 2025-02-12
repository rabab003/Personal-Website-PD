
import './App.css';
import './Components/LoadingScreen';
import './index.css'
import { LoadingScreen } from './Components/LoadingScreen';
import { useState } from 'react';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
  <>
   {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />} 
    
    
    </>
  )
}

export default App
