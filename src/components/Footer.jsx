import { Link } from 'react-router-dom';

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050505] text-white pt-16 pb-10 border-t border-white/10 relative z-10">
      <div className="max-w-6xl mx-auto px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
            
            {/* Kiri: Brand & Founder */}
            <div className="space-y-6">
                <div onClick={scrollToTop} className="cursor-pointer inline-block">
                    <span className="font-extrabold text-2xl tracking-tighter uppercase">VIXEL CREATIVE<span className="text-cyan-400">.</span></span>
                </div>
                <p className="text-gray-400 leading-loose max-w-md text-sm">
                    Studio digital berbasis di Surabaya yang menjembatani logika bisnis (Code) dengan estetika visual (Art).
                </p>
                <div className="pt-4">
                    <span className="text-cyan-400 text-[10px] font-bold uppercase tracking-widest mb-4 block">Initiated By</span>
                    <a href="https://portfoliowildan.my.id" target="_blank" className="flex items-center gap-4 group w-fit bg-white/5 pr-6 rounded-full border border-white/10 hover:border-cyan-400 transition duration-300">
                        <img src="/wildan.jpg" alt="Founder" className="w-10 h-10 rounded-full border-2 border-white/10 object-cover" />
                        <div>
                            <p className="font-bold text-white group-hover:text-cyan-400 transition text-sm">Ahmad Wildan Abdillah</p>
                            <p className="text-[9px] uppercase tracking-widest text-gray-500">Fullstack Creative</p>
                        </div>
                    </a>
                </div>
            </div>

            {/* Kanan: SOSMED LENGKAP */}
            <div>
                <span className="text-gray-500 text-[10px] font-bold uppercase tracking-widest block mb-6">Connect with Us</span>
                <div className="grid grid-cols-2 gap-3">
                    
                    <a href="https://instagram.com/vixelcreative" target="_blank" className="flex items-center gap-3 p-3 rounded-xl border border-white/10 bg-white/5 hover:bg-[#E1306C]/10 hover:border-[#E1306C] transition group">
                        <i className="ph ph-instagram-logo text-xl text-gray-400 group-hover:text-[#E1306C] transition"></i>
                        <span className="font-bold text-xs text-gray-300 group-hover:text-white">Instagram</span>
                    </a>

                    <a href="https://www.linkedin.com/in/ahmadwildanabdillah-vixel" target="_blank" className="flex items-center gap-3 p-3 rounded-xl border border-white/10 bg-white/5 hover:bg-[#0077b5]/10 hover:border-[#0077b5] transition group">
                        <i className="ph ph-linkedin-logo text-xl text-gray-400 group-hover:text-[#0077b5] transition"></i>
                        <span className="font-bold text-xs text-gray-300 group-hover:text-white">LinkedIn</span>
                    </a>

                    <a href="https://github.com/amdwildanabdillah" target="_blank" className="flex items-center gap-3 p-3 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white transition group">
                        <i className="ph ph-github-logo text-xl text-gray-400 group-hover:text-white transition"></i>
                        <span className="font-bold text-xs text-gray-300 group-hover:text-white">GitHub</span>
                    </a>

                    <a href="https://behance.net/idan_abdll" target="_blank" className="flex items-center gap-3 p-3 rounded-xl border border-white/10 bg-white/5 hover:bg-[#1769ff]/10 hover:border-[#1769ff] transition group">
                        <i className="ph ph-behance-logo text-xl text-gray-400 group-hover:text-[#1769ff] transition"></i>
                        <span className="font-bold text-xs text-gray-300 group-hover:text-white">Behance</span>
                    </a>

                    <a href="https://www.youtube.com/@idan_abdll" target="_blank" className="flex items-center gap-3 p-3 rounded-xl border border-white/10 bg-white/5 hover:bg-[#ff0000]/10 hover:border-[#ff0000] transition group">
                        <i className="ph ph-youtube-logo text-xl text-gray-400 group-hover:text-[#ff0000] transition"></i>
                        <span className="font-bold text-xs text-gray-300 group-hover:text-white">YouTube</span>
                    </a>

                    <a href="mailto:vixelcreative.id@gmail.com" className="flex items-center gap-3 p-3 rounded-xl border border-white/10 bg-white/5 hover:bg-orange-500/10 hover:border-orange-500 transition group">
                        <i className="ph ph-envelope-simple text-xl text-gray-400 group-hover:text-orange-500 transition"></i>
                        <span className="font-bold text-xs text-gray-300 group-hover:text-white">Email Us</span>
                    </a>

                </div>
            </div>
        </div>

        {/* --- BOTTOM BAR --- */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 text-[9px] uppercase font-bold tracking-widest text-gray-600">
            <p>&copy; 2026 VIXEL Creative. Surabaya, Indonesia.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
                <Link to="/" onClick={scrollToTop} className="hover:text-cyan-400 transition">Home</Link>
                <Link to="/works" onClick={scrollToTop} className="hover:text-cyan-400 transition">Work</Link>
            </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;