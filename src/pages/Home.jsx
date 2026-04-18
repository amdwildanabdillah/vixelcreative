import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../supabase';

function Home() {
  const [activeProject, setActiveProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showArsenal, setShowArsenal] = useState(false);
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const arsenalItems = [
    {
      category: 'Development Stack',
      icon: 'ph-code',
      tools: ['Visual Studio Code', 'Vue.js Ecosystem', 'Flutter & Dart', 'Git & GitHub', 'Vercel / Hostinger', 'Tailwind CSS']
    },
    {
      category: 'Photography Gear',
      icon: 'ph-camera',
      tools: ['Sony A7 III', 'Sony A6400', 'Sony 50mm f/1.8', 'Sigma 16mm f/1.4', 'Adobe Lightroom', 'Adobe Photoshop']
    },
    {
      category: 'Video & Drone',
      icon: 'ph-film-strip',
      tools: ['DJI Mini 3 Pro', 'DJI Air 2S', 'Adobe Premiere Pro', 'DaVinci Resolve', 'CapCut PC']
    }
  ];

  useEffect(() => {
    fetchPinnedProjects();
  }, []);

  async function fetchPinnedProjects() {
    setIsLoading(true);
    try {
      const { data, error } = await supabase
        .from('vixel_works')
        .select('*')
        .eq('isPinned', true) 
        .order('sort_order', { ascending: true });

      if (error) throw error;
      setProjects(data || []);
    } catch (error) {
      console.error('Error loading home projects:', error.message);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
      });
    });
    const hiddenElements = document.querySelectorAll('.animate-on-scroll');
    hiddenElements.forEach((el) => observer.observe(el));
    return () => hiddenElements.forEach((el) => observer.unobserve(el));
  }, [projects]);

  useEffect(() => {
    if (activeProject || showArsenal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => { document.body.style.overflow = 'auto'; };
  }, [activeProject, showArsenal]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) { element.scrollIntoView({ behavior: 'smooth' }); }
  };

  const getTechDetails = (techName) => {
    const name = techName.toLowerCase();
    if (name.includes('vue')) return { icon: 'ph-file-vue', color: '#4FC08D' };
    if (name.includes('react')) return { icon: 'ph-atom', color: '#61DAFB' };
    if (name.includes('vite')) return { icon: 'ph-lightning', color: '#646CFF' };
    if (name.includes('tailwind')) return { icon: 'ph-wind', color: '#38B2AC' };
    if (name.includes('flutter')) return { icon: 'ph-lightning', color: '#02569B' }; 
    if (name.includes('appsheet')) return { icon: 'ph-paper-plane-tilt', color: '#4285F4' }; 
    if (name.includes('supabase')) return { icon: 'ph-database', color: '#3ECF8E' }; 
    if (name.includes('github')) return { icon: 'ph-github-logo', color: '#ffffff' }; 
    return { icon: 'ph-code', color: '#b084ff' }; 
  }

  const openModal = (project) => { setActiveProject(project); setCurrentImageIndex(0); };
  const closeModal = () => { setActiveProject(null); };
  const nextImage = (e) => { e.stopPropagation(); if (activeProject) setCurrentImageIndex((prev) => (prev + 1) % activeProject.images.length); };
  const prevImage = (e) => { e.stopPropagation(); if (activeProject) setCurrentImageIndex((prev) => (prev - 1 + activeProject.images.length) % activeProject.images.length); };

  const MarqueeIcons = () => (
    <>
      <div className="flex items-center gap-3"><svg viewBox="-10.5 -9.45 21 18.9" className="w-8 h-8 text-[#61DAFB] fill-current"><circle cx="0" cy="0" r="2" fill="currentColor"></circle><g stroke="currentColor" strokeWidth="1" fill="none"><ellipse rx="10" ry="4.5"></ellipse><ellipse rx="10" ry="4.5" transform="rotate(60)"></ellipse><ellipse rx="10" ry="4.5" transform="rotate(120)"></ellipse></g></svg><span className="font-bold text-lg tracking-widest text-gray-300">REACT</span></div>
      <div className="flex items-center gap-3"><svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-[#4285F4]"><path d="M19.423 7.18H14.83V2.46a.54.54 0 0 0-.91-.39L2.8 13.16a.54.54 0 0 0 .39.91h4.74v4.73a.54.54 0 0 0 .91.39l11-11.1a.54.54 0 0 0-.417-.91Z"/></svg><span className="font-bold text-lg tracking-widest text-gray-300">APPSHEET</span></div>
      <div className="flex items-center gap-3"><svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-[#02569B]"><path d="M14.314 0L2.3 12 6 15.7 21.684.013h-7.357zm.014 11.072L7.857 17.53l6.47 6.47H21.7l-6.46-6.468 6.46-6.46h-7.37z"/></svg><span className="font-bold text-lg tracking-widest text-gray-300">FLUTTER</span></div>
      <div className="flex items-center gap-3"><svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-[#38BDF8]"><path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z"/></svg><span className="font-bold text-lg tracking-widest text-gray-300">TAILWIND</span></div>
      <div className="flex items-center gap-3"><svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-[#4FC08D]"><path d="M14.242 4.09l-2.242 3.882-2.242-3.882h-4.485l6.727 11.65 6.727-11.65h-4.485z"/><path d="M22.485 4.09h-3.364l-7.121 12.333-7.121-12.333h-3.364l10.485 18.16 10.485-18.16z"/></svg><span className="font-bold text-lg tracking-widest text-gray-300">VUE</span></div>
    </>
  );

  return (
    <div className="pt-24 bg-[#030303] text-white min-h-screen font-sans"> 
      
      {/* HERO SECTION - GOLDEN RATIO & VIEWPORT FIX */}
      <section className="relative min-h-[80vh] md:min-h-[75vh] flex flex-col justify-center px-6 py-10 md:py-16 items-center text-center">
        <div className="absolute top-[60%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] md:w-[700px] md:h-[700px] bg-cyan-500/40 md:bg-cyan-500/20 rounded-full blur-[90px] md:blur-[150px] animate-orb pointer-events-none z-0"></div>
        <div className="relative z-10 max-w-4xl container mx-auto transition-all duration-1000 mt-[-2rem] md:mt-0 animate-fade-in-up">
          <span className="text-[10px] md:text-xs font-bold tracking-[0.3em] md:tracking-[0.4em] uppercase text-cyan-400 mb-6 block">Software House Surabaya</span>
          
          {/* Headline Scaled & Balanced */}
          <h1 className="text-5xl md:text-6xl lg:text-[4.5rem] font-extrabold tracking-tighter leading-[1.1] md:leading-[1.15] mb-6 md:mb-8">
            Bikin Bisnis <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-cyan-200">Go Digital.</span>
            <br className="hidden sm:block" /> Cepat & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Efisien.</span>
          </h1>
          
          <p className="text-gray-400 text-base md:text-lg lg:text-xl font-light leading-relaxed mb-10 md:mb-12 max-w-2xl mx-auto px-4 md:px-0">
            Spesialis jasa pembuatan <strong>Landing Page Express</strong> dan <strong>Custom AppSheet</strong>. Solusi digital pintar, terjangkau, dan anti ribet untuk UMKM.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button onClick={() => scrollToSection('services')} className="bg-cyan-400 text-black px-10 py-4 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-white transition shadow-[0_0_30px_rgba(34,211,238,0.3)] w-full sm:w-auto">Lihat Paket Cuan</button>
            <button onClick={() => scrollToSection('projects')} className="border border-white/20 px-10 py-4 rounded-full font-bold text-xs uppercase tracking-widest hover:border-cyan-400 hover:text-cyan-400 transition flex items-center justify-center gap-2 w-full sm:w-auto">Portofolio Kami</button>
          </div>
        </div>
      </section>

      {/* TECH STACK MARQUEE - DIPERBAIKI BIAR NGGAK HILANG DI PC */}
      <div className="py-6 md:py-8 border-y border-white/5 bg-white/5 overflow-hidden relative flex">
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-r from-[#030303] to-transparent z-20 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-l from-[#030303] to-transparent z-20 pointer-events-none"></div>
        
        <div className="animate-marquee flex gap-12 md:gap-16 px-6 items-center whitespace-nowrap w-max">
            <MarqueeIcons />
            <MarqueeIcons />
            <MarqueeIcons />
            <MarqueeIcons />
            <MarqueeIcons />
        </div>
      </div>

      {/* ABOUT SECTION */}
      <section id="about" className="relative overflow-hidden max-w-6xl mx-auto px-6 py-24 md:py-32 border-b border-white/5 animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000 delay-200">
        <div className="absolute top-0 right-0 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-cyan-500/60 rounded-full blur-[90px] md:blur-[130px] -z-10 animate-orb pointer-events-none"></div>
        <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-center">
          <div className="w-full md:w-1/2 text-center md:text-left">
             <span className="text-cyan-400 text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase mb-4 block">Siapa Kami</span>
             <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tighter">Partner Digital <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-600">Bisnis Anda.</span></h2>
          </div>
          <div className="w-full md:w-1/2 text-gray-400 leading-relaxed text-base md:text-lg space-y-6 text-center md:text-left">
            <p><strong className="text-white">VIXEL Creative</strong> adalah Software House dan Studio Digital yang berpusat di Surabaya. Kami fokus membantu UMKM dan Profesional untuk memiliki identitas digital yang kredibel.</p>
            <p>Daripada ribet mikirin <em>coding</em> atau sewa <em>server</em> mahal, serahkan pada kami. Mulai dari <strong>Website Super Cepat</strong> hingga sistem manajemen kasir berbasis <strong>AppSheet</strong>, kami siap merakitnya untuk Anda.</p>
            <div className="grid grid-cols-2 gap-8 pt-6 border-t border-white/10 mt-8">
               <div><h4 className="text-2xl font-bold text-white mb-1">Cepat</h4><span className="text-[9px] uppercase text-gray-500 tracking-widest font-bold">Pengerjaan Kilat</span></div>
               <div><h4 className="text-2xl font-bold text-white mb-1">Modern</h4><span className="text-[9px] uppercase text-gray-500 tracking-widest font-bold">Teknologi Terkini</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="max-w-6xl mx-auto px-6 py-20 md:py-32 animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000 delay-200">
        <div className="text-center mb-16 md:mb-24">
          <span className="text-cyan-400 text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase block mb-4">Layanan Kami</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">Solusi Sesuai <span className="italic text-gray-500">Kebutuhan.</span></h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {[
            { num: "01", title: "Landing Page Express", desc: "Website 1 halaman berkecepatan tinggi untuk profil bisnis atau jualan produk. Pengerjaan 1-3 hari kerja. Harga bersahabat untuk UMKM." },
            { num: "02", title: "Sistem AppSheet UMKM", desc: "Digitalisasi buku kas, absensi karyawan, atau manajemen stok barang (Inventory). Praktis via HP Android, tanpa perlu server mahal." },
            { num: "03", title: "Custom Web Application", desc: "Pembuatan sistem skala besar dengan teknologi modern (Vue.js/React) untuk otomatisasi alur kerja perusahaan Anda." },
            { num: "04", title: "Visual Branding Synergy", desc: "Sinergi eksklusif dengan Storydesto & Destograph. Solusi komplit dari produksi foto/video hingga tampil elegan di website." }
          ].map((item) => (
            <div key={item.num} className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 md:p-12 rounded-[2.5rem] hover:bg-white/10 hover:-translate-y-2 transition-all duration-500 group">
              <div className="text-5xl font-black text-cyan-400 md:text-white/10 mb-8 md:group-hover:text-cyan-400 transition-colors duration-500">{item.num}</div>
              <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
              <p className="text-gray-400 text-base leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SELECTED WORKS */}
      <section id="projects" className="py-20 md:py-32 bg-white/5 relative">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 md:mb-16 gap-4 animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000">
              <div className="text-center md:text-left w-full md:w-auto">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tighter">Selected Works<span className="text-cyan-400">.</span></h2>
                <p className="text-gray-400 text-base">Our recent featured digital projects.</p>
              </div>
              <Link to="/works" className="hidden md:block text-xs font-bold uppercase tracking-widest border-b border-cyan-400 pb-1 hover:text-cyan-400 transition">View All</Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              {isLoading ? (
                <div className="col-span-full py-20 text-center"><i className="ph ph-spinner-gap text-4xl animate-spin text-cyan-400"></i></div>
              ) : projects.map((project) => (
                <div key={project.id} onClick={() => openModal(project)} className="group cursor-pointer animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000">
                  <div className="h-[280px] md:h-[400px] rounded-3xl mb-6 overflow-hidden relative border border-white/5 group-hover:border-cyan-400/50 transition duration-500 bg-[#0a0a0a]">
                    <div className="absolute top-0 left-0 w-full h-10 bg-black/60 backdrop-blur-md flex items-center px-5 gap-2.5 z-20 border-b border-white/5">
                        <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                        <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                        <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
                    </div>
                    <img src={project.images && project.images[0]} alt={`Portofolio Jasa Website Vixel Creative Surabaya - ${project.title}`} className="w-full h-full object-cover transform group-hover:scale-105 transition duration-700" />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition duration-500 flex items-center justify-center opacity-0 group-hover:opacity-100 z-10">
                        <span className="bg-cyan-400 text-black px-8 py-3 rounded-full font-bold text-xs uppercase tracking-widest transform translate-y-4 group-hover:translate-y-0 transition duration-300 shadow-lg shadow-cyan-400/20">View Detail</span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold group-hover:text-cyan-400 transition mb-2">{project.title}</h3>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-cyan-400 mb-3">{project.category}</p>
                  <p className="text-gray-500 text-sm line-clamp-2 leading-relaxed">{project.descShort}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-16 text-center md:hidden animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000">
                <Link to="/works" className="inline-flex items-center justify-center gap-2 border border-white/20 text-white px-8 py-4 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-cyan-400 hover:text-black transition w-full">View All Projects <i className="ph ph-arrow-right"></i></Link>
            </div>
          </div>
      </section>

      {/* CONTACT SECTION - KEMBALI KE DESAIN ASLI YANG LEBIH RAPI */}
      <section id="contact" className="py-32 px-6 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none"></div>
        <div className="relative z-10 max-w-3xl mx-auto animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000">
            <h2 className="text-4xl md:text-7xl font-extrabold tracking-tighter mb-8">Ready to <span className="text-cyan-400">Level Up?</span></h2>
            <p className="text-gray-400 text-lg md:text-xl mb-10 leading-relaxed">Jangan biarkan idemu menguap begitu saja. Mari kita realisasikan menjadi sistem yang efisien dan visual yang memukau.</p>
            <a href="https://wa.me/6282232053253?text=Halo%20VIXEL,%20saya%20tertarik%20untuk%20diskusi%20project." target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-cyan-400 hover:scale-105 transition shadow-[0_0_30px_rgba(255,255,255,0.2)]">Start Project via WhatsApp <i className="ph-fill ph-whatsapp-logo text-xl"></i></a>
        </div>
      </section>

      {/* ARSENAL MODAL */}
      {showArsenal && (
        <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4" onClick={() => setShowArsenal(false)}>
            <div className="bg-[#0a0a0a] border border-cyan-400/20 w-full max-w-lg rounded-3xl relative flex flex-col p-8 shadow-2xl animate-fade-in-up" onClick={(e) => e.stopPropagation()}>
                <button onClick={() => setShowArsenal(false)} className="absolute top-5 right-5 bg-white/5 w-10 h-10 rounded-full flex items-center justify-center text-white hover:bg-cyan-400 hover:text-black transition"><i className="ph ph-x"></i></button>
                <div className="text-center mb-8 mt-2"><h2 className="text-3xl font-bold text-white mb-2">My <span className="text-cyan-400">Arsenal</span></h2><p className="text-gray-500 text-sm">Tools & Gear behind the works.</p></div>
                <div className="space-y-8">
                    {arsenalItems.map((group, i) => (
                        <div key={i} className="border-b border-white/10 pb-8 last:border-0 last:pb-0">
                            <div className="flex items-center gap-2 mb-4 text-cyan-400 font-bold text-xs uppercase tracking-widest"><i className={`ph ${group.icon} text-xl`}></i> {group.category}</div>
                            <div className="flex flex-wrap gap-2">
                                {group.tools.map((tool, t) => (<span key={t} className="bg-white/5 border border-white/10 px-4 py-2 rounded-xl text-xs text-gray-300">{tool}</span>))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
      )}

      {/* PROJECT MODAL */}
      {activeProject && (
        <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-8" onClick={closeModal}>
            <div className="bg-[#0a0a0a] border border-cyan-400/20 w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-[2rem] relative flex flex-col shadow-2xl" onClick={(e) => e.stopPropagation()}>
                <button onClick={closeModal} className="absolute top-5 right-5 z-50 bg-black/50 backdrop-blur-md w-12 h-12 rounded-full flex items-center justify-center text-white hover:bg-cyan-400 hover:text-black transition border border-white/10"><i className="ph ph-x text-xl"></i></button>
                <div className="w-full bg-black relative group border-b border-white/10">
                    <img src={activeProject.images && activeProject.images[currentImageIndex]} alt={`Project ${activeProject.title} oleh Vixel Creative Software House Surabaya`} className="w-full h-auto max-h-[500px] object-contain bg-[#050505]" />
                    {activeProject.images && activeProject.images.length > 1 && (
                        <><button onClick={prevImage} className="absolute left-5 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 backdrop-blur-md rounded-full text-white hover:bg-cyan-400 transition flex items-center justify-center border border-white/10"><i className="ph ph-caret-left text-xl"></i></button><button onClick={nextImage} className="absolute right-5 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 backdrop-blur-md rounded-full text-white hover:bg-cyan-400 transition flex items-center justify-center border border-white/10"><i className="ph ph-caret-right text-xl"></i></button></>
                    )}
                </div>
                <div className="p-8 md:p-14 text-left">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6">
                        <div><span className="text-cyan-400 font-bold uppercase text-[10px] tracking-[0.3em] mb-3 block">{activeProject.category}</span><h2 className="text-4xl md:text-5xl font-bold text-white tracking-tighter">{activeProject.title}</h2></div>
                        <div className="flex flex-wrap gap-3">
                            {activeProject.link && (<a href={activeProject.link} target="_blank" rel="noreferrer" className="bg-cyan-400 text-black px-8 py-4 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-white transition flex items-center gap-2">Visit Site <i className="ph ph-arrow-up-right"></i></a>)}
                            {activeProject.github && (<a href={activeProject.github} target="_blank" rel="noreferrer" className="border border-white/20 text-white px-8 py-4 rounded-full font-bold text-xs uppercase tracking-widest hover:border-cyan-400 hover:text-cyan-400 transition flex items-center gap-2"><i className="ph ph-github-logo text-xl"></i> Repo</a>)}
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
                        <div className="md:col-span-2"><h4 className="text-white font-bold text-xl mb-5">About Project</h4><p className="text-gray-400 leading-relaxed whitespace-pre-line text-base">{activeProject.descLong || activeProject.descShort}</p></div>
                        <div className="md:col-span-1 space-y-10">
                            <div><span className="text-gray-500 uppercase text-[10px] font-bold tracking-widest block mb-4">Tech Stack</span>
                                <div className="flex flex-wrap gap-2.5">
                                    {activeProject.stack && activeProject.stack.map((t) => {
                                        const details = getTechDetails(t);
                                        return (<div key={t} className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full text-xs hover:border-cyan-400 transition"><i className={`ph ${details.icon} text-base`} style={{ color: details.color }}></i><span className="text-gray-300">{t}</span></div>)
                                    })}
                                </div>
                            </div>
                            {activeProject.client && (<div><span className="text-gray-500 uppercase text-[10px] font-bold tracking-widest block mb-2">Client</span><p className="text-white font-bold text-xl">{activeProject.client}</p></div>)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
      )}
    </div>
  );
}

export default Home;
