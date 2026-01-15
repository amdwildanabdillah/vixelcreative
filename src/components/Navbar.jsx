import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleScroll = (id) => {
    setIsMenuOpen(false);
    if (location.pathname === '/') {
      const element = document.getElementById(id);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed w-full z-50 px-6 md:px-12 py-6 flex justify-between items-center bg-black/80 backdrop-blur-md border-b border-white/5 transition-all duration-300">
      <Link to="/" onClick={scrollToTop} className="font-extrabold text-xl md:text-2xl tracking-tighter uppercase cursor-pointer hover:text-cyan-400 transition duration-300 z-50">
        VIXEL CREATIVE<span className="text-cyan-400">.</span>
      </Link>

      <div className="hidden md:flex gap-8 text-[10px] font-bold uppercase tracking-[0.2em] opacity-60">
        <Link to="/" onClick={scrollToTop} className="hover:text-cyan-400 transition uppercase cursor-pointer">Home</Link>
        <button onClick={() => handleScroll('about')} className="hover:text-cyan-400 transition uppercase">About</button>
        <button onClick={() => handleScroll('services')} className="hover:text-cyan-400 transition uppercase">Services</button>
        <Link to="/works" className="hover:text-cyan-400 transition">WORK</Link>
      </div>

      <a href="https://wa.me/6285232351908?text=Halo%20VIXEL" target="_blank" className="hidden md:block text-[10px] font-bold border border-white/20 px-4 py-2 rounded-full hover:bg-cyan-400 hover:text-black hover:border-cyan-400 transition">
        LET'S TALK
      </a>

      {/* Mobile Menu */}
      <button className="md:hidden z-50 text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"} />
        </svg>
      </button>

      {isMenuOpen && (
        <div className="absolute top-0 left-0 w-full h-screen bg-black/95 flex flex-col items-center justify-center gap-8 text-xl font-bold uppercase tracking-widest z-40 backdrop-blur-xl">
           <Link to="/" onClick={scrollToTop} className="hover:text-cyan-400">Home</Link>
           <button onClick={() => handleScroll('about')} className="hover:text-cyan-400">About</button>
           <button onClick={() => handleScroll('services')} className="hover:text-cyan-400">Services</button>
           <Link to="/works" onClick={() => setIsMenuOpen(false)} className="hover:text-cyan-400">Work</Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;