import React from 'react';
import { Mail, Phone, Code } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="bg-[#0a0e27] border-t border-[#1e295d] py-24 px-6 md:px-[120px] w-full">
      <div className="max-w-[1440px] mx-auto w-full">
        <div className="flex flex-col gap-4 mb-12">
        <div className="flex items-center gap-2">
          <div className="bg-brand-blue w-4 h-1 rounded-full" />
          <span className="text-brand-blue font-bold text-base uppercase tracking-wider">Contact</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
          함께 일하고 싶으시다면 연락해주세요
        </h2>
        <p className="text-gray-400 text-lg max-w-4xl leading-relaxed">
          IT 시스템 기획, 디지털 전환 제안, 혹은 사이드 프로젝트 협업 등 어떤 이야기든 환영합니다. 아래 채널을 통해 편하게 연락주세요.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-brand-card border border-brand-border rounded-2xl p-8 flex flex-col items-start gap-4 hover:border-brand-blue/50 transition-colors">
          <div className="bg-brand-blue/10 w-12 h-12 rounded-full flex items-center justify-center mb-2">
            <Mail className="text-white w-5 h-5" />
          </div>
          <div>
            <p className="text-slate-500 font-semibold text-base uppercase mb-1">Email</p>
            <p className="text-white font-bold text-lg">won10124@gmail.com</p>
          </div>
          <a href="mailto:won10124@gmail.com" className="text-brand-cyan font-medium text-base mt-auto hover:underline">
            이메일 보내기
          </a>
        </div>

        <div className="bg-brand-card border border-brand-border rounded-2xl p-8 flex flex-col items-start gap-4 hover:border-brand-blue/50 transition-colors">
          <div className="bg-brand-blue/10 w-12 h-12 rounded-full flex items-center justify-center mb-2">
            <Phone className="text-white w-5 h-5" />
          </div>
          <div>
            <p className="text-slate-500 font-semibold text-base uppercase mb-1">Phone</p>
            <p className="text-white font-bold text-lg">+82 10-4178-6953</p>
          </div>
          <a href="tel:+821041786953" className="text-brand-cyan font-medium text-base mt-auto hover:underline">
            전화/문자 문의
          </a>
        </div>

        <div className="bg-brand-card border border-brand-border rounded-2xl p-8 flex flex-col items-start gap-4 hover:border-brand-blue/50 transition-colors">
          <div className="bg-brand-blue/10 w-12 h-12 rounded-full flex items-center justify-center mb-2">
            <Code className="text-white w-5 h-5" />
          </div>
          <div>
            <p className="text-slate-500 font-semibold text-base uppercase mb-1">GitHub</p>
            <p className="text-white font-bold text-lg">github.com/jinleewon</p>
          </div>
          <a href="https://github.com/jinleewon" target="_blank" rel="noopener noreferrer" className="text-brand-cyan font-medium text-base mt-auto hover:underline">
            코드 저장소 방문
          </a>
        </div>
      </div>
      </div>
    </section>
  );
};

export default Contact;