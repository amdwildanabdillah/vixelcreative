import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../supabase'; // Supabase in the house!

function Works() {
  const [activeProject, setActiveProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // --- STATE DATA ---
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState('All');
  const filters = ['All', 'Web Dev', 'Mobile App', 'AppSheet'];

  // --- LOGIC MENARIK DATA DARI SUPABASE ---
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const { data, error } = await supabase
            .from('vixel_works')
            .select('*')
            .order('created_at', { ascending: false });

        if (error) throw error;
        
        setProjects(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching projects: ", error);
        setIsLoading(false);
      }
    };

    fetchProjects();
  }, []);

  // --- HELPER ICON ---
  const getTechDetails = (techName) => {
    const name = techName.toLowerCase();
    if (name.includes('vue')) return { icon: 'ph-file-vue', color: '#4FC08D' };
    if (name.includes('react')) return { icon: 'ph-atom', color: '#61DAFB' };
    if (name.includes('vite')) return { icon: 'ph-lightning', color: '#646CFF' };
    if (name.includes('tailwind')) return { icon: 'ph-wind', color: '#38B2AC' };
    if (name.includes('flutter')) return { icon: 'ph-lightning', color: '#02569B' }; 
    if (name.includes('dart')) return { icon: 'ph-brackets-angle', color: '#0175C2' }; 
    if (name.includes('node')) return { icon: 'ph-nodejs-logo', color: '#339933' };
    if (name.includes('supabase')) return { icon: 'ph-database', color: '#3ECF8E' }; 
    if (name.includes('firebase')) return { icon: 'ph-fire', color: '#FFCA28' };
    if (name.includes('html')) return { icon: 'ph-file-html', color: '#E34F26' };
    if (name.includes('css')) return { icon: 'ph-file-css', color: '#1572B6' };
    if (name.includes('javascript') || name.includes('js')) return { icon: 'ph-file-js', color: '#F7DF1E' };
    if (name.includes('appsheet')) return { icon: 'ph-paper-plane-tilt', color: '#4285F4' }; 
    if (name.includes('netlify')) return { icon: 'ph-cloud-arrow-up', color: '#00C7B7' }; 
    if (name.includes('github')) return { icon: 'ph-github-logo', color: '#ffffff' }; 
    return { icon: 'ph-code', color: '#b084ff' }; 
  };

  const openModal = (project) => { setActiveProject(project); setCurrentImageIndex(0); document.body.style.overflow = 'hidden'; };
  const closeModal = () => { setActiveProject(null); document.body.style.overflow = 'auto'; };
  const nextImage = (e) => { e.stopPropagation(); if (activeProject) setCurrentImageIndex((prev) => (prev + 1) % activeProject.images.length); };
  const prevImage = (e) => { e.stopPropagation(); if (activeProject) setCurrentImageIndex((prev) => (prev - 1 + activeProject.images.length) % activeProject.images.length); };

  // --- LOGIC FILTER ---
  const filteredProjects = projects.filter(project => {
    if (activeFilter === 'All') return true;
    if (!project.category) return false;
    
    if (activeFilter === 'Web Dev') return project.category.includes('Web Dev');
    if (activeFilter === 'Mobile App') return project.category.includes('Android') || project.category.includes('Flutter');
    if (activeFilter === 'AppSheet') return project.category.includes('AppSheet') || project.category.includes('Automation');
    return false;
  });

  return (
    <section className="pt-32 bg-[#030303] text-white min-h-screen">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4">All Projects<span className="text-cyan-400">.</span></h1>
        <p className="text-gray-400 mb-12 max-w-xl">
            Kumpulan karya terpilih yang menggabungkan logika kode dengan estetika visual. Klik project untuk melihat detailnya.
        </p>

        {/* --- FILTER TABS --- */}
        <div className="flex flex-wrap gap-3 mb-10 animate-fade-in-up">
            {filters.map((filter) => (
                <button 
                    key={filter}
                    onClick={() => setActiveFilter(filter)}
                    className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition duration-300 border ${
                        activeFilter === filter 
                        ? 'bg-cyan-400 text-black border-cyan-400' 
                        : 'bg-transparent text-gray-400 border-white/10 hover:border-cyan-400 hover:text-white'
                    }`}
                >
                    {filter}
                </button>
            ))}
        </div>
        
        {/* --- LOADING STATE --- */}
        {isLoading ? (
            <div className="text-center text-cyan-400 py-20 font-bold uppercase tracking-widest">
               Loading Projects...
            </div>
        ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {filteredProjects.map((project) => (
                <div key={project.id} onClick={() => openModal(project)} className="group cursor-pointer animate-fade-in-up">
                
                <div className="rounded-2xl mb-6 overflow-hidden border border-white/5 group-hover:border-cyan-400/50 transition duration-500 bg-[#0a0a0a]">
                    <div className="w-full h-8 bg-[#151515] border-b border-white/5 flex items-center px-4 gap-2">
                        <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]"></div>
                    </div>

                    <div className="relative w-full aspect-video">
                        <img 
                            src={project.images && project.images.length > 0 && project.images[0] !== "-" ? project.images[0] : '/placeholder-image.jpg'} 
                            alt={project.title} 
                            className="w-full h-full object-cover" 
                        />
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition duration-500 flex items-center justify-center opacity-0 group-hover:opacity-100 z-10">
                            <span className="bg-cyan-400 text-black px-6 py-2 rounded-full font-bold text-xs uppercase tracking-widest transform translate-y-4 group-hover:translate-y-0 transition duration-300 shadow-lg shadow-cyan-400/20">View Detail</span>
                        </div>
                    </div>
                </div>

                <h3 className="text-2xl font-bold group-hover:text-cyan-400 transition">{project.title}</h3>
                <p className="text-[10px] font-bold uppercase tracking-widest text-cyan-400 mb-2">{project.category}</p>
                <p className="text-gray-500 text-sm line-clamp-2">{project.descShort}</p>
                </div>
            ))}
            </div>
        )}
      </div>

      <section className="py-32 px-6 text-center relative overflow-hidden mt-20 border-t border-white/5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none"></div>
        <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-7xl font-extrabold tracking-tighter mb-8">
              Ready to <span className="text-cyan-400">Level Up?</span>
            </h2>
            <p className="text-gray-400 text-lg md:text-xl mb-10 leading-relaxed">
              Punya ide project lain? Mari diskusikan kebutuhan teknis dan visualmu bersama kami.
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

      {/* MODAL */}
      {activeProject && (
        <div className="fixed inset-0 z-[100] bg-black/80 dark:bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-8" onClick={closeModal}>
            <div className="bg-[#0a0a0a] border border-cyan-400/20 w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-3xl relative flex flex-col shadow-2xl" onClick={(e) => e.stopPropagation()}>
                <button onClick={closeModal} className="absolute top-4 right-4 z-50 bg-black/50 w-10 h-10 rounded-full flex items-center justify-center text-white hover:bg-cyan-400 hover:text-black transition border border-white/10"><i className="ph ph-x text-xl"></i></button>
                <div className="w-full bg-black relative group border-b border-white/10">
                    <img src={activeProject.images && activeProject.images.length > 0 && activeProject.images[currentImageIndex] !== "-" ? activeProject.images[currentImageIndex] : '/placeholder-image.jpg'} alt="Preview" className="w-full h-auto max-h-[500px] object-contain bg-[#050505]" />
                    {activeProject.images && activeProject.images.length > 1 && (
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
                                    {activeProject.stack && activeProject.stack.map((t) => {
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
    </section>
  );
}

export default Works;