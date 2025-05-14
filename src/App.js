// App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Feature from './components/Feature';
import Footer from './components/shared/Footer';
import Header from './components/shared/Header';
import Owner from './components/Owner';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Feature />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/owner" element={<Owner />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
