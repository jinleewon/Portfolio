import React from 'react';
import { Activity } from 'lucide-react';

const Hero = () => {
  return (
    <section className="flex flex-col items-center pt-32 pb-20 px-6 md:px-[120px] w-full bg-[#0a0e27]">
      <div className="flex flex-col items-center gap-6 max-w-4xl text-center">
        <div className="bg-brand-blue/10 border border-[#1e295d] flex items-center gap-2 px-4 py-1.5 rounded-full">
          <div className="bg-brand-cyan rounded-sm w-2 h-2 animate-pulse" />
          <span className="text-white font-semibold text-sm">Available for New Projects</span>
        </div>
        
        <h1 className="text-5xl md:text-[80px] font-extrabold text-white leading-tight">
          IT System Planner
        </h1>
        
        <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-[680px]">
          6년간 11개 프로젝트를 성공적으로 수행하고 24건 이상의 제안서를 정밀 기획 및 작성한 전문 IT 시스템 기획자입니다.
        </p>
        
        <div className="flex items-center gap-4 pt-3">
          <button className="bg-brand-blue px-8 py-4 rounded-xl text-white font-semibold hover:bg-blue-700 transition-colors">
            View Projects
          </button>
          <button className="border-2 border-[#1e295d] px-8 py-4 rounded-xl text-white font-semibold hover:bg-[#1e295d]/50 transition-colors">
            Contact Me
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mt-20">
        <div className="bg-brand-card border border-brand-border rounded-2xl p-8 flex flex-col justify-between shadow-lg hover:shadow-brand-blue/10 transition-shadow">
          <div className="flex justify-between items-center mb-4">
            <span className="text-brand-blue text-5xl font-bold">6+ Years</span>
            <div className="bg-brand-blue/10 w-10 h-10 rounded-full flex items-center justify-center">
              <Activity className="text-brand-blue w-5 h-5" />
            </div>
          </div>
          <div>
            <h3 className="text-white font-semibold text-lg mb-1">Experience</h3>
            <p className="text-gray-400 text-sm">IT 시스템 및 플랫폼 기획 전문성</p>
          </div>
        </div>

        <div className="bg-brand-card border border-brand-border rounded-2xl p-8 flex flex-col justify-between shadow-lg hover:shadow-brand-blue/10 transition-shadow">
          <div className="flex justify-between items-center mb-4">
            <span className="text-brand-blue text-5xl font-bold">11</span>
            <div className="bg-brand-blue/10 w-10 h-10 rounded-full flex items-center justify-center">
              <Activity className="text-brand-blue w-5 h-5" />
            </div>
          </div>
          <div>
            <h3 className="text-white font-semibold text-lg mb-1">Projects Done</h3>
            <p className="text-gray-400 text-sm">공공기관 및 기업 디지털 전환 완수</p>
          </div>
        </div>

        <div className="bg-brand-card border border-brand-border rounded-2xl p-8 flex flex-col justify-between shadow-lg hover:shadow-brand-blue/10 transition-shadow">
          <div className="flex justify-between items-center mb-4">
            <span className="text-brand-blue text-5xl font-bold">24+</span>
            <div className="bg-brand-blue/10 w-10 h-10 rounded-full flex items-center justify-center">
              <Activity className="text-brand-blue w-5 h-5" />
            </div>
          </div>
          <div>
            <h3 className="text-white font-semibold text-lg mb-1">Proposals Crafted</h3>
            <p className="text-gray-400 text-sm">24건 이상 제안 기획 및 다수 수주</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
