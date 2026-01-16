import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const [activeProject, setActiveProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showArsenal, setShowArsenal] = useState(false);
  
  // --- DATA ARSENAL ---
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

  // --- DATA PROJECT ---
  const projects = [
    {
      id: 1,
      title: 'Storydesto Visuals',
      category: 'Web Dev • Creative Agency',
      client: 'Internal Startup',
      descShort: 'A digital marketplace connecting photography vendors with clients seamlessly.',
      descLong: 'A comprehensive digital marketplace designed to bridge photography vendors with clients. Features include a Smart Booking System, integrated multi-payment Gateway (Midtrans), real-time vendor availability checking, and a robust Admin Dashboard.',
      stack: ['HTML5 Semantic', 'CSS3 Modern', 'Vanilla JS (ES6+)', 'Netlify', 'SEO Optimized'],
      images: ['/desto/coverdesto.png', '/desto/desto1.png', '/desto/desto2.png'], 
      link: 'https://portfolio-storydesto.netlify.app/',
      github: 'https://github.com/amdwildanabdillah/storydesto'
    },
    {
        id: 2,
        title: "Puskeswan Mobile",
        category: "Android App",
        client: 'Puskeswan Trenggalek',
        descShort: "Mobile application for veterinary services management.",
        descLong: "A dedicated mobile application designed for Puskeswan Trenggalek to manage veterinary services. It features appointment scheduling, medical record tracking for livestock, and real-time reporting for field officers.",
        stack: ['Flutter', 'Dart', 'Supabase', 'PostgreSQL'],
        images: ['/puskeswan/1.png', '/puskeswan/2.png'], 
        link: null,
        github: null,
      },
    {
      id: 3,
      title: "D'Production Profile",
      category: 'Web Dev • Corporate',
      client: "D'Production House",
      descShort: 'Official landing page for a creative production house.',
      descLong: 'Official landing page for a creative production house in Surabaya. Designed to professionally showcase video showreels, detail services packages, and enhance brand credibility with an elegant, dark-themed layout.',
      stack: ['HTML5 Semantic', 'CSS3 Modern', 'Vanilla JS (ES6+)', 'Netlify'],
      images: ['/project-dpro.png'],
      link: 'https://dproductionsub.netlify.app/',
      github: 'https://github.com/amdwildanabdillah/dproductionsub'
    },
    {
      id: 4,
      title: "Personal Portfolio v1",
      category: 'Web Dev • Personal Branding',
      client: 'Personal Project',
      descShort: 'Interactive portfolio featuring a modern Glassmorphism design.',
      descLong: 'An interactive personal portfolio website showcasing projects and skills. Built with Vue.js 3 / React as a Single Page Application (SPA). The design focuses on modern Glassmorphism aesthetics with smooth scroll animations.',
      stack: ['React', 'Tailwind', 'Vite', 'Vercel'],
      images: ['/project-portfolio.png'],
      link: 'https://portfoliowildan.my.id/',
      github: null,
    }
  ];

  // --- LOGIC ---
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
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const getTechDetails = (techName) => {
    const name = techName.toLowerCase();
    if (name.includes('vue')) return { icon: 'ph-file-vue', color: '#4FC08D' };
    if (name.includes('react')) return { icon: 'ph-atom', color: '#61DAFB' };
    if (name.includes('flutter')) return { icon: 'ph-lightning', color: '#02569B' }; 
    if (name.includes('dart')) return { icon: 'ph-brackets-angle', color: '#0175C2' }; 
    if (name.includes('laravel')) return { icon: 'ph-file-code', color: '#FF2D20' };
    if (name.includes('tailwind')) return { icon: 'ph-wind', color: '#38B2AC' };
    if (name.includes('figma')) return { icon: 'ph-figma-logo', color: '#F24E1E' }; 
    if (name.includes('github')) return { icon: 'ph-github-logo', color: '#ffffff' }; 
    if (name.includes('appsheet')) return { icon: 'ph-paper-plane-tilt', color: '#4285F4' };
    return { icon: 'ph-code', color: '#22d3ee' }; 
  };

  const openModal = (project) => { setActiveProject(project); setCurrentImageIndex(0); document.body.style.overflow = 'hidden'; };
  const closeModal = () => { setActiveProject(null); document.body.style.overflow = 'auto'; };
  const nextImage = (e) => { e.stopPropagation(); if (activeProject) setCurrentImageIndex((prev) => (prev + 1) % activeProject.images.length); };
  const prevImage = (e) => { e.stopPropagation(); if (activeProject) setCurrentImageIndex((prev) => (prev - 1 + activeProject.images.length) % activeProject.images.length); };

  return (
    <div className="pt-20 bg-[#030303] text-white min-h-screen"> 
      
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-24 pt-10 pb-10 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] md:w-[600px] md:h-[600px] bg-cyan-500/60 rounded-full blur-[90px] md:blur-[130px] animate-orb pointer-events-none z-0"></div>

        <div className="relative z-10 container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8 items-center animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000">
          <div className="text-center md:text-left order-2 md:order-1">
            <span className="text-[9px] md:text-[10px] font-bold tracking-[0.3em] md:tracking-[0.4em] uppercase text-cyan-400 mb-4 md:mb-6 block">
              Digital Studio based in Surabaya
            </span>
            <h1 className="text-4xl md:text-[80px] font-extrabold tracking-tighter leading-[1.1] md:leading-[1] mb-6 md:mb-8">
              Visuals by <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-cyan-200">Heart.</span><br />
              Logic by <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Code.</span>
            </h1>
            <p className="text-gray-400 text-sm md:text-lg max-w-lg font-light leading-relaxed mb-8 md:mb-10 mx-auto md:mx-0 px-4 md:px-0">
              We build efficient business systems and modern eye-catching Websites and Applications.
            </p>
            <div className="flex gap-4 justify-center md:justify-start">
              <button onClick={() => scrollToSection('projects')} className="bg-cyan-400 text-black px-6 md:px-8 py-3 rounded-full font-bold text-[10px] uppercase tracking-widest hover:bg-white transition duration-300 shadow-lg shadow-cyan-400/20">
                Recent Works
              </button>
              <button onClick={() => setShowArsenal(true)} className="border border-white/20 px-6 md:px-8 py-3 rounded-full font-bold text-[10px] uppercase tracking-widest hover:border-cyan-400 hover:text-cyan-400 transition duration-300 flex items-center gap-2">
                <i className="ph ph-toolbox"></i> Arsenal
              </button>
            </div>
          </div>

          <div className="relative flex justify-center md:justify-end animate-float order-1 md:order-2 mt-8 md:mt-0">
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-[2.5rem] w-56 md:w-64 text-center border-t border-white/10 shadow-2xl shadow-cyan-900/20">
              <div className="relative w-24 h-24 md:w-28 md:h-28 mx-auto mb-5">
                <img src="/wildan.jpg" className="rounded-[2rem] object-cover w-full h-full shadow-lg border border-white/10" alt="Wildan Abdillah" />
                <div className="absolute -bottom-3 -right-3 bg-cyan-400 text-black text-[8px] md:text-[9px] font-black px-3 py-1 rounded-full uppercase tracking-tighter border-4 border-[#030303]">Founder</div>
              </div>
              <h3 className="font-bold text-base md:text-lg">Ahmad Wildan Abdillah</h3>
              <p className="text-[8px] md:text-[9px] text-cyan-400 uppercase tracking-widest mt-1 font-semibold">Vixel Ventures</p>
              <div className="flex justify-between mt-6 pt-4 border-t border-white/10">
                <div><div className="text-lg md:text-xl font-bold">15+</div><div className="text-[6px] md:text-[7px] uppercase text-gray-500 tracking-widest">Projects</div></div>
                <div><div className="text-lg md:text-xl font-bold">3</div><div className="text-[6px] md:text-[7px] uppercase text-gray-500 tracking-widest">Ventures</div></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TECH STACK */}
      <div className="py-10 border-y border-white/5 bg-white/5 overflow-hidden relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0c0c0c] to-transparent z-20 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0c0c0c] to-transparent z-20 pointer-events-none"></div>
        <div className="animate-marquee flex gap-16 px-6 items-center">
           <div className="flex items-center gap-3"><svg viewBox="-10.5 -9.45 21 18.9" className="w-8 h-8 text-[#61DAFB] fill-current"><circle cx="0" cy="0" r="2" fill="currentColor"></circle><g stroke="currentColor" strokeWidth="1" fill="none"><ellipse rx="10" ry="4.5"></ellipse><ellipse rx="10" ry="4.5" transform="rotate(60)"></ellipse><ellipse rx="10" ry="4.5" transform="rotate(120)"></ellipse></g></svg><span className="font-bold text-lg tracking-widest text-gray-300">REACT</span></div>
           <div className="flex items-center gap-3"><svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-[#4285F4]"><path d="M19.423 7.18H14.83V2.46a.54.54 0 0 0-.91-.39L2.8 13.16a.54.54 0 0 0 .39.91h4.74v4.73a.54.54 0 0 0 .91.39l11-11.1a.54.54 0 0 0-.417-.91Z"/></svg><span className="font-bold text-lg tracking-widest text-gray-300">APPSHEET</span></div>
           <div className="flex items-center gap-3"><svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-[#02569B]"><path d="M14.314 0L2.3 12 6 15.7 21.684.013h-7.357zm.014 11.072L7.857 17.53l6.47 6.47H21.7l-6.46-6.468 6.46-6.46h-7.37z"/></svg><span className="font-bold text-lg tracking-widest text-gray-300">FLUTTER</span></div>
           <div className="flex items-center gap-3"><svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-[#0175C2]"><path d="M4.175 0h8.773l10.875 10.89c.112.112.177.265.177.424 0 .159-.065.312-.177.424L11.666 23.9c-.112.112-.265.177-.424.177s-.312-.065-.424-.177L0 13.064V4.18C0 1.876 1.872 0 4.175 0z"/></svg><span className="font-bold text-lg tracking-widest text-gray-300">DART</span></div>
           <div className="flex items-center gap-3"><svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-[#38BDF8]"><path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z"/></svg><span className="font-bold text-lg tracking-widest text-gray-300">TAILWIND</span></div>
           <div className="flex items-center gap-3"><svg viewBox="-10.5 -9.45 21 18.9" className="w-8 h-8 text-[#61DAFB] fill-current"><circle cx="0" cy="0" r="2" fill="currentColor"></circle><g stroke="currentColor" strokeWidth="1" fill="none"><ellipse rx="10" ry="4.5"></ellipse><ellipse rx="10" ry="4.5" transform="rotate(60)"></ellipse><ellipse rx="10" ry="4.5" transform="rotate(120)"></ellipse></g></svg><span className="font-bold text-lg tracking-widest text-gray-300">REACT</span></div>
           <div className="flex items-center gap-3"><svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-[#4285F4]"><path d="M19.423 7.18H14.83V2.46a.54.54 0 0 0-.91-.39L2.8 13.16a.54.54 0 0 0 .39.91h4.74v4.73a.54.54 0 0 0 .91.39l11-11.1a.54.54 0 0 0-.417-.91Z"/></svg><span className="font-bold text-lg tracking-widest text-gray-300">APPSHEET</span></div>
           <div className="flex items-center gap-3"><svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-[#02569B]"><path d="M14.314 0L2.3 12 6 15.7 21.684.013h-7.357zm.014 11.072L7.857 17.53l6.47 6.47H21.7l-6.46-6.468 6.46-6.46h-7.37z"/></svg><span className="font-bold text-lg tracking-widest text-gray-300">FLUTTER</span></div>
        </div>
      </div>

      {/* ABOUT */}
      <section id="about" className="relative overflow-hidden max-w-6xl mx-auto px-6 py-24 md:py-32 border-b border-white/5 animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000 delay-200">
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
              Dipimpin oleh <span className="text-cyan-400 font-bold">Wildan Abdillah</span>, kami menggabungkan ketajaman <span className="italic">Logika Bisnis</span> dengan sentuhan <span className="italic">Artistik</span> dari unit visual kami. Hasilnya? Solusi digital yang tidak hanya <strong>Jalan</strong>, tapi juga <strong>Tampil Beda</strong>.
            </p>
            <div className="grid grid-cols-2 gap-8 pt-4 border-t border-white/10 mt-6">
               <div><h4 className="text-xl md:text-2xl font-bold text-white">Hybrid</h4><span className="text-[8px] uppercase tracking-widest text-gray-500">Tech + Creative</span></div>
               <div><h4 className="text-xl md:text-2xl font-bold text-white">Remote</h4><span className="text-[8px] uppercase tracking-widest text-gray-500">Work Culture</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="max-w-6xl mx-auto px-6 py-20 md:py-32 animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000 delay-200">
        <div className="text-center mb-12 md:mb-20">
          <span className="text-cyan-400 text-[9px] md:text-[10px] font-bold tracking-[0.3em] uppercase">What We Do</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-4 leading-tight">Solusi Digital <span className="italic text-gray-500">End-to-End.</span></h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {[
            { num: "01", title: "Custom AppSheet", desc: "Ubah data spreadsheet rumit jadi aplikasi mobile yang gampang dipakai. Cocok buat Inventory, Absensi, & CRM." },
            { num: "02", title: "Web Development", desc: "Bikin website yang nggak cuma keren, tapi juga ngebut. Landing page, Company Profile, sampai Web Apps." },
            { num: "03", title: "Android Apps", desc: "Pengembangan aplikasi mobile native (Android/iOS) menggunakan Flutter. Solusi tepat untuk produk digital performa maksimal." },
            { num: "04", title: "Visual Branding", desc: "Sinergi dengan Storydesto & Destograph untuk kebutuhan konten visual yang selaras dengan identitas digitalmu." }
          ].map((item) => (
            <div key={item.num} className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 md:p-10 rounded-[2rem] hover:bg-white/10 transition duration-500 group">
              <div className="text-4xl font-black text-cyan-400 md:text-white/10 mb-6 md:group-hover:text-cyan-400 transition duration-500">{item.num}</div>
              <h3 className="text-xl font-bold mb-4">{item.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SELECTED WORKS */}
      <section id="projects" className="py-20 md:py-32 bg-white/5 relative">
         <div className="max-w-6xl mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 md:mb-16 gap-4 animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000">
              <div className="text-center md:text-left w-full md:w-auto">
                <h2 className="text-3xl md:text-5xl font-bold mb-2">Selected Works<span className="text-cyan-400">.</span></h2>
                <p className="text-gray-400 text-sm md:text-base">Some projects we have worked on.</p>
              </div>
              <Link to="/works" className="hidden md:block text-[10px] font-bold uppercase tracking-widest border-b border-cyan-400 pb-1 hover:text-cyan-400 transition">View All</Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
              {projects.map((project) => (
                <div 
                    key={project.id} 
                    onClick={() => openModal(project)}
                    className="group cursor-pointer animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000"
                >
                  <div className="h-[250px] md:h-[350px] rounded-2xl mb-6 overflow-hidden relative border border-white/5 group-hover:border-cyan-400/50 transition duration-500 bg-[#0a0a0a]">
                    <div className="absolute top-0 left-0 w-full h-8 bg-black/60 backdrop-blur-md flex items-center px-4 gap-2 z-20 border-b border-white/5">
                        <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]"></div>
                    </div>
                    <img src={project.images[0]} alt={project.title} className="w-full h-full object-cover transform group-hover:scale-105 transition duration-700" />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition duration-500 flex items-center justify-center opacity-0 group-hover:opacity-100 z-10">
                        <span className="bg-cyan-400 text-black px-6 py-2 rounded-full font-bold text-xs uppercase tracking-widest transform translate-y-4 group-hover:translate-y-0 transition duration-300 shadow-lg shadow-cyan-400/20">View Detail</span>
                    </div>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold group-hover:text-cyan-400 transition">{project.title}</h3>
                  <p className="text-[8px] md:text-[9px] font-bold uppercase tracking-widest text-cyan-400 mb-2">{project.category}</p>
                  <p className="text-gray-500 text-xs md:text-sm line-clamp-2 leading-relaxed">{project.descShort}</p>
                </div>
              ))}
            </div>
         </div>
      </section>

      {/* --- CONTACT SECTION (BARU) --- */}
      <section id="contact" className="py-32 px-6 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none"></div>
        <div className="relative z-10 max-w-3xl mx-auto animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000">
            <h2 className="text-4xl md:text-7xl font-extrabold tracking-tighter mb-8">
              Ready to <span className="text-cyan-400">Level Up?</span>
            </h2>
            <p className="text-gray-400 text-lg md:text-xl mb-10 leading-relaxed">
              Jangan biarkan idemu menguap begitu saja. Mari kita realisasikan menjadi sistem yang efisien dan visual yang memukau.
            </p>
            <a 
              href="https://wa.me/6285232351908?text=Halo%20VIXEL,%20saya%20tertarik%20diskusi%20project." 
              target="_blank"
              className="inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-cyan-400 hover:scale-105 transition duration-300 shadow-[0_0_30px_rgba(255,255,255,0.2)]"
            >
              Start Project via WhatsApp <i className="ph-fill ph-whatsapp-logo text-xl"></i>
            </a>
        </div>
      </section>

      {/* ARSENAL MODAL */}
      {showArsenal && (
        <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4" onClick={() => setShowArsenal(false)}>
            <div className="bg-[#0a0a0a] border border-cyan-400/20 w-full max-w-lg rounded-2xl relative flex flex-col p-8 shadow-[0_0_50px_rgba(34,211,238,0.1)] animate-fade-in-up" onClick={(e) => e.stopPropagation()}>
                <button onClick={() => setShowArsenal(false)} className="absolute top-4 right-4 bg-white/5 w-8 h-8 rounded-full flex items-center justify-center text-white hover:bg-cyan-400 hover:text-black transition"><i className="ph ph-x"></i></button>
                <div className="text-center mb-8">
                    <h2 className="text-2xl font-bold text-white mb-1">My <span className="text-cyan-400">Arsenal</span></h2>
                    <p className="text-gray-500 text-sm">Tools & Gear behind the works.</p>
                </div>
                <div className="space-y-6">
                    {arsenalItems.map((group, i) => (
                        <div key={i} className="border-b border-white/10 pb-6 last:border-0 last:pb-0">
                            <div className="flex items-center gap-2 mb-3 text-cyan-400 font-bold text-sm uppercase tracking-widest"><i className={`ph ${group.icon} text-lg`}></i> {group.category}</div>
                            <div className="flex flex-wrap gap-2">
                                {group.tools.map((tool, t) => (<span key={t} className="bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg text-xs text-gray-300 hover:border-cyan-400 hover:text-white transition cursor-default">{tool}</span>))}
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
            <div className="bg-[#0a0a0a] border border-cyan-400/20 w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-3xl relative flex flex-col shadow-[0_0_50px_rgba(34,211,238,0.1)]" onClick={(e) => e.stopPropagation()}>
                <button onClick={closeModal} className="absolute top-4 right-4 z-50 bg-black/50 w-10 h-10 rounded-full flex items-center justify-center text-white hover:bg-cyan-400 hover:text-black transition border border-white/10"><i className="ph ph-x text-xl"></i></button>
                <div className="w-full bg-black relative group border-b border-white/10">
                    <img src={activeProject.images[currentImageIndex]} alt="Preview" className="w-full h-auto max-h-[500px] object-contain bg-[#050505]" />
                    {activeProject.images.length > 1 && (
                        <><button onClick={prevImage} className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 rounded-full text-white hover:bg-cyan-400 hover:text-black transition flex items-center justify-center border border-white/10"><i className="ph ph-caret-left text-xl"></i></button><button onClick={nextImage} className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 rounded-full text-white hover:bg-cyan-400 hover:text-black transition flex items-center justify-center border border-white/10"><i className="ph ph-caret-right text-xl"></i></button></>
                    )}
                </div>
                <div className="p-8 md:p-12 text-left">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                        <div>
                            <span className="text-cyan-400 font-bold uppercase text-xs tracking-[0.2em] mb-2 block">{activeProject.category}</span>
                            <h2 className="text-3xl md:text-5xl font-bold text-white">{activeProject.title}</h2>
                        </div>
                        <div className="flex gap-3">
                            {activeProject.link && (<a href={activeProject.link} target="_blank" className="bg-cyan-400 text-black px-6 py-3 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-white transition flex items-center gap-2">Visit Site <i className="ph ph-arrow-up-right"></i></a>)}
                            {activeProject.github && (<a href={activeProject.github} target="_blank" className="border border-white/20 text-white px-6 py-3 rounded-full font-bold text-xs uppercase tracking-widest hover:border-cyan-400 hover:text-cyan-400 transition flex items-center gap-2"><i className="ph ph-github-logo text-lg"></i> Repo</a>)}
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div className="md:col-span-2">
                            <h4 className="text-white font-bold text-lg mb-4">About Project</h4>
                            <p className="text-gray-400 leading-loose whitespace-pre-line text-sm md:text-base">{activeProject.descLong}</p>
                        </div>
                        <div className="md:col-span-1 space-y-8">
                            <div>
                                <span className="text-gray-500 uppercase text-[10px] font-bold tracking-widest block mb-4">Tech Stack</span>
                                <div className="flex flex-wrap gap-2">
                                    {activeProject.stack.map((t) => {
                                        const details = getTechDetails(t);
                                        return (<div key={t} className="flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full text-xs hover:border-cyan-400 transition cursor-default"><i className={`ph ${details.icon} text-sm`} style={{ color: details.color }}></i><span className="text-gray-300">{t}</span></div>)
                                    })}
                                </div>
                            </div>
                            {activeProject.client && (<div><span className="text-gray-500 uppercase text-[10px] font-bold tracking-widest block mb-2">Client</span><p className="text-white font-medium text-lg">{activeProject.client}</p></div>)}
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