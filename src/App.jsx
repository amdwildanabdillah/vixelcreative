import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Works from './pages/Works';
// Import Phosphor dari main.jsx aja (yang di sini dihapus sesuai kesepakatan tadi)

function App() {
  // State buat ngatur Splash Screen
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    // Splash screen bakal hilang otomatis setelah 2 detik
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2000); // Ganti angkanya kalau mau lebih lama (2000 = 2 detik)

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* --- SPLASH SCREEN --- */}
      <div 
        className={`fixed inset-0 z-[9999] bg-[#030303] flex items-center justify-center transition-all duration-1000 ease-in-out pointer-events-none ${
          showSplash ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="flex flex-col items-center gap-4">
          {/* Logo / Teks VIXEL */}
          <h1 className="text-white text-4xl md:text-5xl font-extrabold tracking-[0.2em] animate-pulse">
            VIXEL<span className="text-cyan-400">.</span>
          </h1>
          {/* Garis Loading Estetik */}
          <div className="w-32 h-[2px] bg-white/10 rounded-full overflow-hidden mt-2">
            <div className="w-full h-full bg-cyan-400 origin-left animate-progress-bar"></div>
          </div>
        </div>
      </div>

      {/* --- MAIN APP --- */}
      <div className="min-h-screen bg-[#030303] text-white font-sans selection:bg-cyan-500 selection:text-black overflow-x-hidden">
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/works" element={<Works />} />
        </Routes>

        <Footer />
      </div>
    </>
  );
}

export default App;