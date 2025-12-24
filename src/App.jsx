import React, { useState } from 'react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Fungsi scroll smooth
  const scrollToSection = (id) => {
    setIsMenuOpen(false); 
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#030303] text-white font-sans overflow-x-hidden selection:bg-cyan-500 selection:text-black">
      
      {/* --- NAVBAR --- */}
      <nav className="fixed w-full z-50 px-6 md:px-12 py-6 flex justify-between items-center bg-black/80 backdrop-blur-md border-b border-white/5 transition-all duration-300">
        <div onClick={scrollToTop} className="font-extrabold text-xl md:text-2xl tracking-tighter uppercase cursor-pointer hover:text-cyan-400 transition duration-300 z-50">
          VIXEL CREATIVE<span className="text-cyan-400">.</span>
        </div>

        <div className="hidden md:flex gap-8 text-[10px] font-bold uppercase tracking-[0.2em] opacity-60">
          <button onClick={() => scrollToSection('about')} className="hover:text-cyan-400 transition">About</button>
          <button onClick={() => scrollToSection('services')} className="hover:text-cyan-400 transition">Services</button>
          <button onClick={() => scrollToSection('projects')} className="hover:text-cyan-400 transition">Work</button>
        </div>

        <a href="https://wa.me/6285232351908?text=Halo%20VIXEL,%20saya%20tertarik%20diskusi%20project." target="_blank" className="hidden md:block text-[10px] font-bold border border-white/20 px-4 py-2 rounded-full hover:bg-cyan-400 hover:text-black hover:border-cyan-400 transition">
          LET'S TALK
        </a>

        <button className="md:hidden z-50 text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"} />
          </svg>
        </button>

        {isMenuOpen && (
          <div className="absolute top-0 left-0 w-full h-screen bg-black/95 flex flex-col items-center justify-center gap-8 text-xl font-bold uppercase tracking-widest z-40 backdrop-blur-xl">
            <button onClick={() => scrollToSection('about')} className="hover:text-cyan-400">About</button>
            <button onClick={() => scrollToSection('services')} className="hover:text-cyan-400">Services</button>
            <button onClick={() => scrollToSection('projects')} className="hover:text-cyan-400">Work</button>
            <a href="https://wa.me/6285232351908?text=Halo%20VIXEL,%20saya%20tertarik%20diskusi%20project." className="text-cyan-400 border border-cyan-400 px-6 py-2 rounded-full mt-4">Chat WhatsApp</a>
          </div>
        )}
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-24 pt-28 pb-10 overflow-hidden">
        
        {/* 🔥 ORB 1 (HERO) - UPDATE: Opacity 60% dan z-0 biar gak ketutupan background tapi gak nutup teks 🔥 */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] md:w-[600px] md:h-[600px] bg-cyan-500/60 rounded-full blur-[90px] md:blur-[130px] animate-orb pointer-events-none z-0"></div>

        {/* Tambah relative z-10 biar teks di atas orb */}
        <div className="relative z-10 container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8 items-center">
          <div className="text-center md:text-left order-2 md:order-1">
            <span className="text-[9px] md:text-[10px] font-bold tracking-[0.3em] md:tracking-[0.4em] uppercase text-cyan-400 mb-4 md:mb-6 block">
              Digital Studio based in Surabaya
            </span>
            <h1 className="text-4xl md:text-[80px] font-extrabold tracking-tighter leading-[1.1] md:leading-[1] mb-6 md:mb-8">
              Visuals by <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-cyan-200">Heart.</span><br />
              Logic by <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Code.</span>
            </h1>
            <p className="text-gray-400 text-sm md:text-lg max-w-lg font-light leading-relaxed mb-8 md:mb-10 mx-auto md:mx-0 px-4 md:px-0">
              Kami membangun sistem bisnis (AppSheet) yang efisien dan website modern yang memanjakan mata.
            </p>
            <div className="flex gap-4 justify-center md:justify-start">
              <button onClick={() => scrollToSection('projects')} className="bg-cyan-400 text-black px-6 md:px-8 py-3 rounded-full font-bold text-[10px] uppercase tracking-widest hover:bg-white transition duration-300 shadow-lg shadow-cyan-400/20">
                Lihat Portfolio
              </button>
              <button onClick={() => scrollToSection('services')} className="border border-white/20 px-6 md:px-8 py-3 rounded-full font-bold text-[10px] uppercase tracking-widest hover:border-cyan-400 hover:text-cyan-400 transition duration-300">
                Services
              </button>
            </div>
          </div>

          <div className="relative flex justify-center md:justify-end animate-float order-1 md:order-2 mt-8 md:mt-0">
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-[2.5rem] w-56 md:w-64 text-center border-t border-white/10 shadow-2xl shadow-cyan-900/20">
              <div className="relative w-24 h-24 md:w-28 md:h-28 mx-auto mb-5">
                <img src="/wildan.jpg" className="rounded-[2rem] object-cover w-full h-full shadow-lg border border-white/10" alt="Wildan Abdillah" />
                <div className="absolute -bottom-3 -right-3 bg-cyan-400 text-black text-[8px] md:text-[9px] font-black px-3 py-1 rounded-full uppercase tracking-tighter border-4 border-[#030303]">Founder</div>
              </div>
              <h3 className="font-bold text-base md:text-lg">Wildan Abdillah</h3>
              <p className="text-[8px] md:text-[9px] text-cyan-400 uppercase tracking-widest mt-1 font-semibold">Vixel Ventures</p>
              <div className="flex justify-between mt-6 pt-4 border-t border-white/10">
                <div><div className="text-lg md:text-xl font-bold">15+</div><div className="text-[6px] md:text-[7px] uppercase text-gray-500 tracking-widest">Projects</div></div>
                <div><div className="text-lg md:text-xl font-bold">3</div><div className="text-[6px] md:text-[7px] uppercase text-gray-500 tracking-widest">Ventures</div></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- TECH STACK --- */}
      <div className="py-10 border-y border-white/5 bg-white/5 overflow-hidden relative group">
        <div className="hidden md:block absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0c0c0c] to-transparent z-10 flex items-center pl-12">
           <span className="text-[9px] font-bold uppercase tracking-widest text-cyan-400 bg-black/50 backdrop-blur px-2 py-1 rounded border border-white/10">
             Powered By
           </span>
        </div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0c0c0c] to-transparent z-10"></div>

        <div className="animate-marquee flex gap-16 px-6 opacity-100 grayscale-0 md:opacity-50 md:grayscale md:hover:grayscale-0 md:hover:opacity-100 transition-all duration-500">
          <div className="flex items-center gap-3"><svg viewBox="-10.5 -9.45 21 18.9" className="w-8 h-8 text-[#61DAFB] fill-current drop-shadow-[0_0_8px_rgba(97,218,251,0.6)]"><circle cx="0" cy="0" r="2" fill="currentColor"></circle><g stroke="currentColor" strokeWidth="1" fill="none"><ellipse rx="10" ry="4.5"></ellipse><ellipse rx="10" ry="4.5" transform="rotate(60)"></ellipse><ellipse rx="10" ry="4.5" transform="rotate(120)"></ellipse></g></svg><span className="font-bold text-lg tracking-widest text-gray-300">REACT</span></div>
          <div className="flex items-center gap-3"><svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-[#4285F4] drop-shadow-[0_0_8px_rgba(66,133,244,0.6)]"><path d="M19.423 7.18H14.83V2.46a.54.54 0 0 0-.91-.39L2.8 13.16a.54.54 0 0 0 .39.91h4.74v4.73a.54.54 0 0 0 .91.39l11-11.1a.54.54 0 0 0-.417-.91Z"/></svg><span className="font-bold text-lg tracking-widest text-gray-300">APPSHEET</span></div>
          <div className="flex items-center gap-3"><svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-[#38BDF8] drop-shadow-[0_0_8px_rgba(56,189,248,0.6)]"><path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z"/></svg><span className="font-bold text-lg tracking-widest text-gray-300">TAILWIND</span></div>
          <div className="flex items-center gap-3"><svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 text-[#23A9F2] drop-shadow-[0_0_8px_rgba(35,169,242,0.6)]"><path d="M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.245.096L.29 7.304a.995.995 0 0 0 .012 1.402l10.144 9.642-9.917 6.397a.997.997 0 0 0-.012 1.659l1.38 1.114c.39.314.957.285 1.307-.06l4.093-3.167 9.543 8.854a1.494 1.494 0 0 0 1.705.29l4.94-2.377A1.5 1.5 0 0 0 24 29.58V3.924a1.5 1.5 0 0 0-.85-1.337z"/></svg><span className="font-bold text-lg tracking-widest text-gray-300">VSCODE</span></div>
          <div className="flex items-center gap-3"><svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg><span className="font-bold text-lg tracking-widest text-gray-300">GITHUB</span></div>
          <div className="flex items-center gap-3"><svg viewBox="0 0 24 24" fill="none" className="w-7 h-7 drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]"><path d="M6 12C6 15.3137 8.68629 18 12 18V12H6Z" fill="#0ACF83"/><path d="M12 18C15.3137 18 18 15.3137 18 12V6H12V18Z" fill="#1ABCFE"/><path d="M6 6C6 2.68629 8.68629 0 12 0H18V6H6Z" fill="#FF7262"/><path d="M6 12C6 8.68629 8.68629 6 12 6V12H6Z" fill="#F24E1E"/></svg><span className="font-bold text-lg tracking-widest text-gray-300">FIGMA</span></div>

          {/* Loop 2 */}
          <div className="flex items-center gap-3"><svg viewBox="-10.5 -9.45 21 18.9" className="w-8 h-8 text-[#61DAFB] fill-current drop-shadow-[0_0_8px_rgba(97,218,251,0.6)]"><circle cx="0" cy="0" r="2" fill="currentColor"></circle><g stroke="currentColor" strokeWidth="1" fill="none"><ellipse rx="10" ry="4.5"></ellipse><ellipse rx="10" ry="4.5" transform="rotate(60)"></ellipse><ellipse rx="10" ry="4.5" transform="rotate(120)"></ellipse></g></svg><span className="font-bold text-lg tracking-widest text-gray-300">REACT</span></div>
          <div className="flex items-center gap-3"><svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-[#4285F4] drop-shadow-[0_0_8px_rgba(66,133,244,0.6)]"><path d="M19.423 7.18H14.83V2.46a.54.54 0 0 0-.91-.39L2.8 13.16a.54.54 0 0 0 .39.91h4.74v4.73a.54.54 0 0 0 .91.39l11-11.1a.54.54 0 0 0-.417-.91Z"/></svg><span className="font-bold text-lg tracking-widest text-gray-300">APPSHEET</span></div>
          <div className="flex items-center gap-3"><svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-[#38BDF8] drop-shadow-[0_0_8px_rgba(56,189,248,0.6)]"><path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z"/></svg><span className="font-bold text-lg tracking-widest text-gray-300">TAILWIND</span></div>
          <div className="flex items-center gap-3"><svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 text-[#23A9F2] drop-shadow-[0_0_8px_rgba(35,169,242,0.6)]"><path d="M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.245.096L.29 7.304a.995.995 0 0 0 .012 1.402l10.144 9.642-9.917 6.397a.997.997 0 0 0-.012 1.659l1.38 1.114c.39.314.957.285 1.307-.06l4.093-3.167 9.543 8.854a1.494 1.494 0 0 0 1.705.29l4.94-2.377A1.5 1.5 0 0 0 24 29.58V3.924a1.5 1.5 0 0 0-.85-1.337z"/></svg><span className="font-bold text-lg tracking-widest text-gray-300">VSCODE</span></div>
          <div className="flex items-center gap-3"><svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg><span className="font-bold text-lg tracking-widest text-gray-300">GITHUB</span></div>
          <div className="flex items-center gap-3"><svg viewBox="0 0 24 24" fill="none" className="w-7 h-7 drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]"><path d="M6 12C6 15.3137 8.68629 18 12 18V12H6Z" fill="#0ACF83"/><path d="M12 18C15.3137 18 18 15.3137 18 12V6H12V18Z" fill="#1ABCFE"/><path d="M6 6C6 2.68629 8.68629 0 12 0H18V6H6Z" fill="#FF7262"/><path d="M6 12C6 8.68629 8.68629 6 12 6V12H6Z" fill="#F24E1E"/></svg><span className="font-bold text-lg tracking-widest text-gray-300">FIGMA</span></div>
        </div>
      </div>

      {/* --- ABOUT SECTION (SUDAH FIX ADA ORB 2) --- */}
      <section id="about" className="relative overflow-hidden max-w-6xl mx-auto px-6 py-24 md:py-32 border-b border-white/5">
        
        {/* 🔥 ORB 2 (ABOUT) - UPDATE: Opacity dinaikin jadi 60% dan z-0 🔥 */}
        <div className="absolute top-0 right-0 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-cyan-500/60 rounded-full blur-[90px] md:blur-[130px] -z-10 animate-orb pointer-events-none"></div>

        <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-center">
          <div className="w-full md:w-1/2 text-center md:text-left">
             <span className="text-cyan-400 text-[9px] font-bold tracking-[0.3em] uppercase mb-4 block">Who We Are</span>
             <h2 className="text-3xl md:text-5xl font-bold leading-tight">
               More than just <br/>
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-600">Software House.</span>
             </h2>
          </div>
          
          <div className="w-full md:w-1/2 text-gray-400 leading-relaxed text-sm md:text-base space-y-6 text-justify md:text-left">
            <p>
              <strong className="text-white">VIXEL Creative</strong> adalah studio digital hybrid yang lahir di Surabaya. Kami percaya bahwa sistem yang canggih (AppSheet/Web) tidak boleh terlihat membosankan.
            </p>
            <p>
              Dipimpin oleh <span className="text-cyan-400 font-bold">Wildan Abdillah</span>, kami menggabungkan ketajaman <span className="text-white italic">Logika Bisnis</span> dengan sentuhan <span className="text-white italic">Artistik</span> dari unit visual kami. Hasilnya? Solusi digital yang tidak hanya <strong>Jalan</strong>, tapi juga <strong>Tampil Beda</strong>.
            </p>
            
            <div className="grid grid-cols-2 gap-8 pt-4 border-t border-white/10 mt-6">
               <div>
                  <h4 className="text-xl md:text-2xl font-bold text-white">Hybrid</h4>
                  <span className="text-[8px] uppercase tracking-widest text-gray-500">Tech + Creative</span>
               </div>
               <div>
                  <h4 className="text-xl md:text-2xl font-bold text-white">Remote</h4>
                  <span className="text-[8px] uppercase tracking-widest text-gray-500">Work Culture</span>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SERVICES SECTION --- */}
      <section id="services" className="max-w-6xl mx-auto px-6 py-20 md:py-32">
        <div className="text-center mb-12 md:mb-20">
          <span className="text-cyan-400 text-[9px] md:text-[10px] font-bold tracking-[0.3em] uppercase">What We Do</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-4 leading-tight">Solusi Digital <span className="italic text-gray-500">End-to-End.</span></h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {[
            { num: "01", title: "Custom AppSheet", desc: "Ubah data spreadsheet rumit jadi aplikasi mobile yang gampang dipakai. Cocok buat Inventory, Absensi, & CRM." },
            { num: "02", title: "Web Development", desc: "Bikin website yang nggak cuma keren, tapi juga ngebut. Landing page, Company Profile, sampai Web Apps." },
            { num: "03", title: "Visual Branding", desc: "Sinergi dengan Storydesto & Destograph untuk kebutuhan konten visual yang selaras dengan identitas digitalmu." }
          ].map((item) => (
            <div key={item.num} className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 md:p-10 rounded-[2rem] hover:bg-white/10 transition duration-500 group">
              <div className="text-4xl font-black text-cyan-400 md:text-white/10 mb-6 md:group-hover:text-cyan-400 transition duration-500">{item.num}</div>
              <h3 className="text-xl font-bold mb-4">{item.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- SELECTED WORKS --- */}
      <section id="projects" className="py-20 md:py-32 bg-white/5 relative">
         <div className="max-w-6xl mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 md:mb-16 gap-4">
              <div className="text-center md:text-left w-full md:w-auto">
                <h2 className="text-3xl md:text-5xl font-bold mb-2">Selected Works<span className="text-cyan-400">.</span></h2>
                <p className="text-gray-400 text-sm md:text-base">Beberapa project yang pernah kami kerjakan.</p>
              </div>
              <a href="#" className="hidden md:block text-[10px] font-bold uppercase tracking-widest border-b border-cyan-400 pb-1">View All</a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
              {[
                { title: "Storydesto Visuals", category: "Web Dev • Creative Agency", desc: "Website agensi visual yang fokus pada showcase karya fotografi dan videografi dengan layout imersif.", image: "/project-storydesto.png" },
                { title: "DProduction Profile", category: "Web Dev • Corporate", desc: "Company profile profesional untuk Production House, menampilkan layanan dan portofolio klien secara elegan.", image: "/project-dpro.png" },
                { title: "Personal Portfolio v1", category: "Web Dev • Personal Branding", desc: "Website portofolio interaktif terdahulu yang menampilkan identitas visual 'Visuals by Heart, Logic by Code'.", image: "/project-portfolio.png" },
                { title: "Integrated Business System", category: "AppSheet • Automation", desc: "Sistem manajemen operasional bisnis custom. Menggantikan pencatatan manual dengan database digital yang efisien.", image: "/project-appsheet.png" }
              ].map((project, index) => (
                <div key={index} className="group cursor-pointer">
                  <div className="h-[220px] md:h-[300px] rounded-[2rem] mb-6 overflow-hidden relative border border-white/5 group-hover:border-cyan-400/50 transition duration-500">
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover transform group-hover:scale-105 transition duration-700" />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition duration-500"></div>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold group-hover:text-cyan-400 transition">{project.title}</h3>
                  <p className="text-[8px] md:text-[9px] font-bold uppercase tracking-widest text-cyan-400 mb-2">{project.category}</p>
                  <p className="text-xs md:text-sm text-gray-500 leading-relaxed max-w-sm">{project.desc}</p>
                </div>
              ))}
            </div>
         </div>
      </section>

      {/* --- FOOTER / CONTACT --- */}
      <section id="contact" className="py-20 md:py-32 text-center px-6">
        <h2 className="text-3xl md:text-6xl font-extrabold mb-6 md:mb-8 tracking-tighter">
          Ready to <span className="text-cyan-400">Level Up?</span>
        </h2>
        <p className="text-gray-400 max-w-xl mx-auto mb-10 text-sm md:text-lg px-4">
          Jangan biarkan bisnismu jalan manual terus. Ayo kita automasi dan bikin keren bareng VIXEL.
        </p>
        <a href="https://wa.me/6285232351908?text=Halo%20VIXEL,%20saya%20tertarik%20diskusi%20project." target="_blank" className="bg-white text-black px-8 md:px-10 py-3 md:py-4 rounded-full font-bold text-[10px] md:text-xs uppercase tracking-widest hover:bg-cyan-400 hover:scale-105 transition duration-300 shadow-[0_0_30px_rgba(255,255,255,0.2)]">
          Start Project via WhatsApp
        </a>

        {/* --- SOCIAL MEDIA ICONS (FIXED SVG) --- */}
        <div className="flex gap-6 justify-center mt-12 md:mt-16">
           {/* Instagram */}
           <a href="https://instagram.com/idan_abdll" target="_blank" rel="noreferrer" className="group p-3 rounded-full border border-white/10 hover:border-cyan-400 hover:bg-cyan-400/10 transition duration-300">
             <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-gray-400 group-hover:text-cyan-400 transition"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
           </a>
           
           {/* LinkedIn */}
           <a href="https://www.linkedin.com/in/wildan-abdillah-099a8b247" target="_blank" rel="noreferrer" className="group p-3 rounded-full border border-white/10 hover:border-cyan-400 hover:bg-cyan-400/10 transition duration-300">
             <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-gray-400 group-hover:text-cyan-400 transition"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
           </a>

           {/* GitHub */}
           <a href="https://github.com/amdwildanabdillah" target="_blank" rel="noreferrer" className="group p-3 rounded-full border border-white/10 hover:border-cyan-400 hover:bg-cyan-400/10 transition duration-300">
             <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-gray-400 group-hover:text-cyan-400 transition"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
           </a>

           {/* Discord */}
           <a href="https://discord.com/users/811059299429384249" target="_blank" rel="noreferrer" className="group p-3 rounded-full border border-white/10 hover:border-cyan-400 hover:bg-cyan-400/10 transition duration-300">
             <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-gray-400 group-hover:text-cyan-400 transition"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-2.313-9.133-4.816-13.674a.061.061 0 0 0-.038-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.086 2.157 2.419 0 1.334-.956 2.419-2.157 2.419zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.086 2.157 2.419 0 1.334-.946 2.419-2.157 2.419z"/></svg>
           </a>
        </div>
      </section>

      <footer className="border-t border-white/10 py-10 text-center text-white/30 text-[8px] md:text-[10px] uppercase font-bold tracking-[0.3em]">
        &copy; 2025 VIXEL Creative. Surabaya, Indonesia.
      </footer>
    </div>
  );
}

export default App;