import './App.css';
import './bootstrap.min (1).css';
import Navb from './components/Navb';
import About from './components/About';
import Footer from './components/Footer';
import Content from './components/Content';
import { useState } from 'react';





function App() {
  const [isDarkmode,setisDarkmode] = useState(false)
  return (
    
        <>
       <div className={isDarkmode?`dbg`:`lbg`}>
         <Navb isDarkmode={isDarkmode} setisDarkmode={setisDarkmode} />
         <About isDarkmode={isDarkmode} />
         <Content isDarkmode={isDarkmode} />
         <Footer isDarkmode={isDarkmode} />
       </div>
       
        </>
        
         
  );
}

export default App;
