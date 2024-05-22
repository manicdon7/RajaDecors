import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';
import Navigation from './Components/Navigation';
import Contact from './Pages/Contact';
import Services from './Pages/Services';
import Footer from './Components/Footer';
import About from './Pages/About';
import whatsApp from './assets/WhatsApp.png';

function App() {
    const whatsappUrl = `https://api.whatsapp.com/send?phone=9940229923`;
  
    const handleClick = () => {
      window.open(whatsappUrl, '_blank');
    };

  return (
    <Router>
      <Navigation />
      <div className='fixed top-72 right-0 z-50'>
        <img onClick={handleClick} className='bg-[#3DDA3A] md:hover:pl-6 md:hover:pr-3 hover:cursor-pointer md:py-2 md:pl-3 rounded-l-full' src={whatsApp} alt="whatsapp" />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
