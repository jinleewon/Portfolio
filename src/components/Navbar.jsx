import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isProjectPage = location.pathname.startsWith('/project');

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#0a0e27]/90 backdrop-blur-md border-b border-brand-border py-4' : 'bg-transparent py-6'} px-6 md:px-[120px]`}>
      <div className="max-w-[1440px] mx-auto flex items-center justify-between">
        
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg overflow-hidden relative">
            <div className="absolute inset-0 bg-brand-blue/20 group-hover:bg-brand-blue/40 transition-colors" />
            <img src="/assets/profile.png" alt="Logo" className="w-full h-full object-cover" onError={(e) => e.target.style.display='none'} />
          </div>
          <span className="font-bold text-lg text-white tracking-wide">Planner Portfolio</span>
        </Link>

        <div className="hidden md:flex items-center gap-2">
          <Link to="/" className={`px-4 py-2 text-sm font-medium transition-colors ${!isProjectPage ? 'text-white bg-brand-blue/15 rounded-lg' : 'text-gray-400 hover:text-white'}`}>
            About
          </Link>
          <Link to="/project" className={`px-4 py-2 text-sm font-medium transition-colors ${isProjectPage ? 'text-white bg-brand-blue/15 rounded-lg' : 'text-gray-400 hover:text-white'}`}>
            Project
          </Link>
          <a href="/#toy-project" className="px-4 py-2 text-sm font-medium text-gray-400 hover:text-white transition-colors">
            Toy Project
          </a>
          <a href="/#contact" className="px-4 py-2 text-sm font-medium text-gray-400 hover:text-white transition-colors">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
