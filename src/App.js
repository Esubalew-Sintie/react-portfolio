import './App.css';
import Navbar from './component/Navbar'
import Experiance from './component/Experiance';
import Home from './component/Home';
import Work from './component/Work';
import About from './component/About';
import Contact from './component/Contact';




function App() {


  return (
    <div className='contianer'>
      
      <Navbar />
      <Home />
      <Experiance />
      <Work />
      <About />
      <Contact />
    </div>
  );
}

export default App;