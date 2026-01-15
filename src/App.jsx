import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Works from './pages/Works';

function App() {
  return (
    <div className="min-h-screen bg-[#030303] text-white font-sans selection:bg-cyan-500 selection:text-black overflow-x-hidden">
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/works" element={<Works />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;